// Strategic map: c.1930 borders, territorial changes, flashpoint markers, pan / pinch / zoom.
(function () {
  const M = window.MAPDATA;
  const NS = 'http://www.w3.org/2000/svg';

  // Natural Earth projection (same maths as d3.geoNaturalEarth1, with the build's scale & translate)
  function project(lon, lat) {
    const l = lon * Math.PI / 180, p = lat * Math.PI / 180;
    const p2 = p * p, p4 = p2 * p2;
    const x = l * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4)));
    const y = p * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4)));
    return [x * M.k + M.tx, -y * M.k + M.ty];
  }

  const PLACES = {
    geneva: [6.15, 46.2, 'Geneva'], aaland: [20.0, 60.2, 'Åland Is.'], vilna: [25.28, 54.69, 'Vilna'],
    silesia: [18.9, 50.3, 'Upper Silesia'], corfu: [19.9, 39.6, 'Corfu'], petrich: [23.2, 41.4, 'Petrich'],
    mosul: [43.1, 36.3, 'Mosul'], leticia: [-69.94, -4.2, 'Leticia'], mukden: [123.4, 41.8, 'Mukden'],
    saar: [7.0, 49.35, 'Saar'], walwal: [45.3, 7.1, 'Wal-Wal'], addis: [38.75, 9.0, 'Addis Ababa'],
    rhineland: [7.1, 50.4, 'Rhineland'], versailles: [2.12, 48.8, 'Versailles'], rapallo: [9.23, 44.35, 'Rapallo / Genoa'],
    ruhr: [7.05, 51.45, 'Ruhr'], berlin: [13.4, 52.5, 'Berlin'], london: [-0.12, 51.5, 'London'],
    locarno: [8.79, 46.17, 'Locarno'], vienna: [16.37, 48.2, 'Vienna'], lausanne: [6.63, 46.52, 'Lausanne'],
    warsaw: [21.0, 52.23, 'Warsaw'], brenner: [11.5, 47.0, 'Brenner Pass'], stresa: [8.54, 45.88, 'Stresa'],
    guernica: [-2.68, 43.31, 'Guernica'], rome: [12.5, 41.9, 'Rome'], munich: [11.58, 48.14, 'Munich'],
    prague: [14.42, 50.08, 'Prague'], memel: [21.13, 55.71, 'Memel'], moscow: [37.6, 55.75, 'Moscow'],
    danzig: [18.65, 54.35, 'Danzig'], fiume: [14.44, 45.33, 'Fiume'], paris: [2.35, 48.86, 'Paris'],
    tirana: [19.82, 41.33, 'Tirana'], washington: [-77.04, 38.9, 'Washington'], maginot: [7.4, 49.15, 'Maginot Line']
  };

  const LABELS = [
    ['Germany', 10.4, 51.0, 1], ['France', 2.4, 46.6, 1], ['Italy', 13.2, 42.6, 1], ['Britain', -1.8, 52.8, 1],
    ['USSR', 42, 57, 0], ['Poland', 19.6, 52.2, 1], ['Spain', -3.7, 40.0, 1], ['Abyssinia', 39.5, 8.3, 1],
    ['Japan', 138.5, 36.5, 1], ['Manchuria', 126, 46, 1], ['China', 105, 32, 0], ['United States', -100, 40, 0],
    ['Austria', 14.6, 47.5, 2], ['Czechoslovakia', 17.2, 49.25, 2], ['Hungary', 19.3, 47.1, 2], ['Yugoslavia', 19.2, 44.0, 2],
    ['Romania', 25.0, 45.8, 2], ['Greece', 22.0, 39.3, 2], ['Turkey', 35.0, 39.0, 1], ['Lithuania', 23.9, 55.4, 2],
    ['Finland', 26.5, 63.5, 1], ['Sweden', 15.5, 62.5, 1], ['Albania', 20.1, 40.9, 3], ['Iraq', 44, 33, 1],
    ['Colombia', -73, 4, 1], ['Peru', -75, -9, 1], ['Bulgaria', 25.3, 42.7, 2], ['Libya', 18, 27, 1],
    ['Eritrea', 38.5, 15.6, 2], ['It. Somaliland', 46, 4.5, 2], ['East Prussia', 21, 54.3, 3], ['Belgium', 4.6, 50.6, 3],
    ['Switzerland', 8.2, 46.8, 3], ['Brazil', -52, -10, 0], ['Egypt', 29.5, 26.5, 1], ['Latvia', 25.5, 56.9, 3], ['Estonia', 25.8, 58.7, 3]
  ];

  const KIND_TEXT = { win: 'League success', fail: 'Failure', war: 'Aggression', deal: 'Treaty / agreement', crisis: 'Crisis' };

  let svg, gWorld, gRegions, gMarks, gLabels, tintEl, wrap, tip;
  let vb = { x: 0, y: 0, w: M.w, h: M.h };
  let anim = null, lastFocus = null;
  const regionEls = {}, countryEls = {};

  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  function graticule() {
    let d = '';
    for (let lon = -180; lon <= 180; lon += 15) {
      for (let lat = -60; lat <= 80; lat += 5) {
        const [x, y] = project(lon, lat);
        d += (lat === -60 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1);
      }
    }
    for (let lat = -60; lat <= 75; lat += 15) {
      for (let lon = -180; lon <= 180; lon += 5) {
        const [x, y] = project(lon, lat);
        d += (lon === -180 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1);
      }
    }
    return d;
  }

  function build(container) {
    wrap = container;
    svg = el('svg', { class: 'map-svg', viewBox: `0 0 ${M.w} ${M.h}`, preserveAspectRatio: 'xMidYMid slice', role: 'img', 'aria-label': 'Strategic map of the world around 1930' });
    const defs = el('defs', {}, svg);
    defs.innerHTML = `
      <pattern id="hatch-dmz" width="2.4" height="2.4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="2.4" height="2.4" style="fill:var(--m-de)"/><rect width="1" height="2.4" style="fill:var(--m-hatch)"/></pattern>
      <pattern id="hatch-lg" width="2.4" height="2.4" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="2.4" height="2.4" style="fill:var(--m-de)"/><rect width="1.1" height="2.4" style="fill:var(--m-league)"/></pattern>
      <pattern id="hatch-fr" width="2.4" height="2.4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="2.4" height="2.4" style="fill:var(--m-de)"/><rect width="1.2" height="2.4" style="fill:var(--m-fr)"/></pattern>
      <radialGradient id="sea-glow" cx="52%" cy="30%" r="60%"><stop offset="0" style="stop-color:var(--m-sea-hi)"/><stop offset="1" style="stop-color:var(--m-sea)"/></radialGradient>`;
    el('rect', { x: -2000, y: -2000, width: M.w + 4000, height: M.h + 4000, fill: 'url(#sea-glow)' }, svg);
    el('path', { d: graticule(), class: 'graticule' }, svg);
    gWorld = el('g', { class: 'countries' }, svg);
    for (const c of M.countries) {
      const p = el('path', { d: c.d, class: `country b-${c.bloc}`, 'data-key': c.key }, gWorld);
      (countryEls[c.key] = countryEls[c.key] || []).push(p);
    }
    gRegions = el('g', { class: 'regions' }, svg);
    for (const [k, d] of Object.entries(M.regions)) regionEls[k] = el('path', { d, class: `region r-${k}`, 'data-key': k }, gRegions);
    gLabels = el('g', { class: 'labels', 'aria-hidden': 'true' }, svg);
    for (const [name, lon, lat, tier] of LABELS) {
      const [x, y] = project(lon, lat);
      const t = el('text', { x, y, class: `lbl tier${tier}` }, gLabels);
      t.textContent = name.toUpperCase();
    }
    gMarks = el('g', { class: 'marks' }, svg);
    const gv = el('g', { class: 'geneva-star' }, gMarks);
    const [gx, gy] = project(...PLACES.geneva);
    gv.setAttribute('transform', `translate(${gx},${gy})`);
    gv.innerHTML = '<g class="mk"><path d="M0,-3 L0.9,-0.9 L3,-0.9 L1.3,0.5 L1.9,2.7 L0,1.4 L-1.9,2.7 L-1.3,0.5 L-3,-0.9 L-0.9,-0.9 Z"/><text class="mlbl" y="-4.4">GENEVA</text></g>';
    container.appendChild(svg);
    tintEl = document.createElement('div'); tintEl.className = 'map-tint'; container.appendChild(tintEl);
    tip = document.createElement('div'); tip.className = 'map-tip'; tip.hidden = true; container.appendChild(tip);
    interactions();
    new ResizeObserver(() => setVB(vb, true)).observe(container);
    reset();
  }

  function reset() {
    for (const k in regionEls) regionEls[k].setAttribute('class', `region r-${k}`);
    for (const k in countryEls) countryEls[k].forEach(p => p.classList.remove('own-de', 'own-it', 'own-jp', 'own-fr', 'flash', 'player'));
    gMarks.querySelectorAll('.mark').forEach(m => m.remove());
    applyOwner('rhineland', 'dmz', true);
    applyOwner('saar', 'lg', true);
  }

  function setPlayer(role) {
    for (const k in countryEls) countryEls[k].forEach(p => p.classList.remove('player'));
    const keys = { germany: ['germany', 'east-prussia'], italy: ['italy'], britain: ['united-kingdom'], france: ['france'] }[role] || [];
    keys.forEach(k => (countryEls[k] || []).forEach(p => p.classList.add('player')));
    svg.classList.toggle('role-league', role === 'league');
  }

  function applyOwner(key, owner, quiet) {
    if (regionEls[key]) {
      const r = regionEls[key];
      r.setAttribute('class', `region r-${key}` + (owner ? ` o-${owner}` : ''));
      if (!quiet && owner) { r.classList.add('flash'); setTimeout(() => r.classList.remove('flash'), 2400); }
    } else if (countryEls[key]) {
      countryEls[key].forEach(p => {
        p.classList.remove('own-de', 'own-it', 'own-jp', 'own-fr');
        if (owner) p.classList.add('own-' + owner);
        if (!quiet && owner) { p.classList.add('flash'); setTimeout(() => p.classList.remove('flash'), 2400); }
      });
    }
  }

  function addMark(m, quiet) {
    const pl = PLACES[m.id];
    if (!pl) return;
    let g = gMarks.querySelector(`.mark[data-id="${m.id}"]`);
    if (g) g.remove();
    const [x, y] = project(pl[0], pl[1]);
    g = el('g', { class: `mark k-${m.kind}` + (quiet ? '' : ' fresh'), 'data-id': m.id, transform: `translate(${x},${y})`, tabindex: 0, role: 'button', 'aria-label': `${m.label}: ${KIND_TEXT[m.kind]}` }, gMarks);
    g.dataset.label = m.label;
    g.dataset.place = pl[2];
    const icon = {
      win: '<path class="ic" d="M-1.6,0 L-0.4,1.2 L1.8,-1.4"/>',
      fail: '<path class="ic" d="M-1.3,-1.3 L1.3,1.3 M1.3,-1.3 L-1.3,1.3"/>',
      war: '<path class="ic fill" d="M0,-2 L0.6,-0.6 L2,-0.8 L0.9,0.3 L1.4,1.8 L0,0.9 L-1.4,1.8 L-0.9,0.3 L-2,-0.8 L-0.6,-0.6 Z"/>',
      deal: '<path class="ic" d="M-1.6,0 L1.6,0 M0,-1.6 L0,1.6"/>',
      crisis: '<path class="ic" d="M0,-1.6 L0,0.5 M0,1.3 L0,1.5"/>'
    }[m.kind];
    g.innerHTML = `<g class="mk"><circle class="pulse" r="3"/><circle class="dot" r="3"/>${icon}<text class="mlbl" y="-4.6">${m.label}</text></g>`;
  }

  function apply(fx, quiet) {
    if (!fx) return;
    if (fx.own) for (const [k, v] of Object.entries(fx.own)) applyOwner(k, v, quiet);
    if (fx.mark) fx.mark.forEach(m => addMark(m, quiet));
  }

  function setTension(t) {
    if (tintEl) tintEl.style.opacity = Math.min(0.75, Math.max(0, (t - 20) / 110)).toFixed(2);
  }

  // ---------- view box ----------
  function aspect() {
    const r = wrap.getBoundingClientRect();
    return r.width > 0 && r.height > 0 ? r.height / r.width : 0.5;
  }

  function clampVB(v) {
    const a = aspect();
    v.w = Math.max(40, Math.min(M.w * 1.05, v.w));
    v.h = v.w * a;
    v.x = Math.max(-v.w * 0.3, Math.min(M.w - v.w * 0.7, v.x));
    v.y = Math.max(-v.h * 0.3, Math.min(M.h - v.h * 0.7, v.y));
    return v;
  }

  function setVB(v, keepCenter) {
    if (keepCenter) {
      const cx = v.x + v.w / 2, cy = v.y + v.h / 2;
      v.h = v.w * aspect(); v.x = cx - v.w / 2; v.y = cy - v.h / 2;
    }
    vb = clampVB({ ...v });
    svg.setAttribute('viewBox', `${vb.x.toFixed(2)} ${vb.y.toFixed(2)} ${vb.w.toFixed(2)} ${vb.h.toFixed(2)}`);
    const px = wrap.getBoundingClientRect().width || 400;
    const u = vb.w / px;            // map units per CSS pixel
    svg.style.setProperty('--u', u);
    const zoom = M.w / vb.w;
    svg.dataset.z = zoom > 9 ? 3 : zoom > 4.5 ? 2 : zoom > 1.8 ? 1 : 0;
  }

  function focus(lon, lat, zoom, instant) {
    lastFocus = [lon, lat, zoom];
    const [x, y] = project(lon, lat);
    const w = M.w / zoom, h = w * aspect();
    const target = { x: x - w / 2, y: y - h / 2, w, h };
    if (instant || matchMedia('(prefers-reduced-motion: reduce)').matches) { setVB(target); return; }
    const from = { ...vb }, t0 = performance.now(), dur = 1400;
    cancelAnimationFrame(anim);
    const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    // zoom out a little in the middle of long jumps for a cinematic sweep
    const dist = Math.hypot((from.x + from.w / 2) - x, (from.y + from.h / 2) - y);
    const pull = Math.min(1, dist / 600);
    const stepFn = now => {
      const t = Math.min(1, (now - t0) / dur), e = ease(t);
      const bump = 1 + pull * 1.4 * Math.sin(Math.PI * t);
      const wNow = (from.w + (target.w - from.w) * e) * bump;
      const cx = (from.x + from.w / 2) + ((x) - (from.x + from.w / 2)) * e;
      const cy = (from.y + from.h / 2) + ((y) - (from.y + from.h / 2)) * e;
      setVB({ x: cx - wNow / 2, y: cy - wNow * aspect() / 2, w: wNow });
      if (t < 1) anim = requestAnimationFrame(stepFn);
    };
    anim = requestAnimationFrame(stepFn);
  }

  function zoomBy(f, cx, cy) {
    const r = wrap.getBoundingClientRect();
    const px = cx ?? r.width / 2, py = cy ?? r.height / 2;
    const mx = vb.x + (px / r.width) * vb.w, my = vb.y + (py / r.height) * vb.h;
    const w = vb.w / f;
    setVB({ x: mx - (px / r.width) * w, y: my - (py / r.height) * w * aspect(), w });
  }

  function interactions() {
    const pts = new Map();
    let start = null;
    svg.addEventListener('pointerdown', e => {
      svg.setPointerCapture(e.pointerId);
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      start = { vb: { ...vb }, pts: new Map([...pts].map(([k, v]) => [k, { ...v }])) };
      cancelAnimationFrame(anim);
    });
    svg.addEventListener('pointermove', e => {
      if (!pts.has(e.pointerId) || !start) return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      const r = wrap.getBoundingClientRect();
      const s = vb.w / r.width;
      if (pts.size === 1) {
        const p0 = start.pts.get(e.pointerId); if (!p0) return;
        const k = start.vb.w / r.width;
        setVB({ x: start.vb.x - (e.clientX - p0.x) * k, y: start.vb.y - (e.clientY - p0.y) * k, w: start.vb.w });
      } else if (pts.size === 2) {
        const [a, b] = [...pts.values()];
        const [a0, b0] = [...start.pts.values()];
        if (!a0 || !b0) return;
        const d0 = Math.hypot(a0.x - b0.x, a0.y - b0.y), d1 = Math.hypot(a.x - b.x, a.y - b.y);
        const f = d1 / Math.max(10, d0);
        const c0x = (a0.x + b0.x) / 2 - r.left, c0y = (a0.y + b0.y) / 2 - r.top;
        const c1x = (a.x + b.x) / 2 - r.left, c1y = (a.y + b.y) / 2 - r.top;
        const mx = start.vb.x + (c0x / r.width) * start.vb.w, my = start.vb.y + (c0y / r.height) * start.vb.h;
        const w = start.vb.w / f;
        setVB({ x: mx - (c1x / r.width) * w, y: my - (c1y / r.height) * w * aspect(), w });
      }
      void s;
    });
    const end = e => {
      pts.delete(e.pointerId);
      start = pts.size ? { vb: { ...vb }, pts: new Map([...pts].map(([k, v]) => [k, { ...v }])) } : null;
    };
    svg.addEventListener('pointerup', end);
    svg.addEventListener('pointercancel', end);
    svg.addEventListener('wheel', e => {
      e.preventDefault();
      const r = wrap.getBoundingClientRect();
      zoomBy(Math.exp(-e.deltaY * 0.0015), e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });
    // marker / country taps
    let downAt = null;
    svg.addEventListener('pointerdown', e => { downAt = { x: e.clientX, y: e.clientY }; });
    svg.addEventListener('click', e => {
      if (downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) > 6) return;
      const m = e.target.closest('.mark');
      const c = e.target.closest('.country, .region');
      const r = wrap.getBoundingClientRect();
      if (m) showTip(`<b>${m.dataset.label}</b><span>${m.dataset.place}</span>`, e.clientX - r.left, e.clientY - r.top);
      else if (c) {
        const key = c.dataset.key;
        const name = c.classList.contains('region') ? REGION_NAMES[key] : (M.countries.find(x => x.key === key) || {}).name;
        if (name) showTip(`<b>${name}</b>`, e.clientX - r.left, e.clientY - r.top);
      } else tip.hidden = true;
    });
    svg.addEventListener('keydown', e => {
      const m = e.target.closest && e.target.closest('.mark');
      if (m && (e.key === 'Enter' || e.key === ' ')) {
        const r = wrap.getBoundingClientRect(), b = m.getBoundingClientRect();
        showTip(`<b>${m.dataset.label}</b><span>${m.dataset.place}</span>`, b.left - r.left, b.top - r.top);
      }
    });
  }
  const REGION_NAMES = { rhineland: 'Rhineland', saar: 'Saar', ruhr: 'Ruhr', sudetenland: 'Sudetenland', bohemia: 'Bohemia–Moravia', memel: 'Memel' };

  function showTip(html, x, y) {
    tip.innerHTML = html;
    tip.hidden = false;
    const r = wrap.getBoundingClientRect();
    tip.style.left = Math.min(r.width - 170, Math.max(8, x - 80)) + 'px';
    tip.style.top = Math.max(8, y - 56) + 'px';
    clearTimeout(showTip.t);
    showTip.t = setTimeout(() => { tip.hidden = true; }, 3200);
  }

  window.GameMap = {
    build, reset, apply, focus, setTension, setPlayer,
    zoomIn: () => zoomBy(1.6), zoomOut: () => zoomBy(1 / 1.6),
    world: () => focus(25, 30, 1.3),
    placeName: id => (PLACES[id] || [])[2],
    refocus: () => lastFocus && focus(...lastFocus),
    resize: () => setVB(vb, true)
  };
})();
