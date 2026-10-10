// Shadows over Geneva — game flow.
(function () {
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const SAVE_KEY = 'sog-save-v1', SOUND_KEY = 'sog-sound';
  const MAX_STRIKES = 4;            // more than 3 wrong = out
  const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* storage unavailable */ } }
  };

  const ROLES = {
    league: {
      name: 'League Council', desk: 'The Council Chamber, Geneva', paper: 'The Evening Dispatch', city: 'Geneva',
      fail: 'A fourth wrong call and you will be expelled from the Council.',
      outHead: 'DELEGATE EXPELLED FROM LEAGUE COUNCIL',
      outBody: 'After a string of decisions that bore no relation to events, the Council has voted to remove you. “Geneva has enough illusions without inventing new ones,” one diplomat remarked.',
      advising: s => `Council in session · Secretary-General <b>${P(s.ldr).name}</b>`,
      intro: [
        'You represent a member state on the <b>Council of the League of Nations</b>, the inner body of great powers and elected members that meets several times a year to handle crises. Think of it as the League’s “security council”.',
        'The League has no army. It can talk, investigate, condemn and, under Article 16, call for economic sanctions. Its power depends on Britain and France, its leading members, and the USA never joined.',
        'Your task: make the decisions the Council actually made, from the Åland Islands to Abyssinia.'
      ],
      endWin: 'You followed the League from its hopeful first years to its collapse. By 1937 Japan, Germany and Italy had all left. In 1939 war came anyway, and the League’s last significant act was to expel the USSR for invading Finland.',
      ranks: [[.9, 'Secretary-General material'], [.75, 'Trusted Council delegate'], [.55, 'Junior delegate'], [0, 'Tea-boy at the Palais des Nations']]
    },
    germany: {
      name: 'Germany', desk: 'Wilhelmstrasse, Berlin', paper: 'The Evening Dispatch', city: 'Berlin',
      fail: 'A fourth wrong call and you will be ousted from the Foreign Office.',
      outHead: 'FOREIGN POLICY CHIEF OUSTED IN BERLIN',
      outBody: 'The Chancellery has dismissed its foreign-policy adviser after a run of disastrous recommendations. One colleague said the adviser “seemed to be working for a different country in a different century”.',
      advising: s => `You advise <b>${P(s.ldr).name}</b> · ${P(s.ldr).role}`,
      intro: [
        'You are a senior adviser in the German Foreign Office. Governments rise and fall around you: Bauer, Cuno, Stresemann, Brüning, Papen, and finally Hitler.',
        'Germany begins the period defeated, disarmed and humiliated by the Treaty of Versailles. Every government wants that treaty revised. They differ only in how far, how fast, and at what risk.',
        'Your task: recommend the foreign-policy decisions each leader really took.'
      ],
      endWin: 'You followed German foreign policy from the humiliation of Versailles to the invasion of Poland. Stresemann’s patient revision gave way to Hitler’s gambles, and each unpunished gamble led to the next. On 3 September 1939 Britain and France declared war.',
      ranks: [[.9, 'Master of Realpolitik'], [.75, 'Senior counsellor'], [.55, 'Second secretary'], [0, 'Filing clerk, basement archive']]
    },
    italy: {
      name: 'Italy', desk: 'Palazzo Chigi, Rome', paper: 'The Evening Dispatch', city: 'Rome',
      fail: 'A fourth wrong call and the Duce, or the Prime Minister, will have you ousted.',
      outHead: 'DUCE SACKS FOREIGN POLICY ADVISER',
      outBody: 'Palazzo Chigi confirmed last night that the adviser has been “relieved of all duties” after a run of recommendations Rome described as “anti-historical”.',
      advising: s => `You advise <b>${P(s.ldr).name}</b> · ${P(s.ldr).role}`,
      intro: [
        'You are an adviser at Palazzo Chigi, the Italian Foreign Ministry. You serve Orlando and Giolitti, then Benito Mussolini.',
        'Italy fought on the winning side in 1918 but feels cheated by the peace: a “mutilated victory”. Its leaders want prestige, the Adriatic and an empire, and they must choose between Britain and France on one side and Hitler’s Germany on the other.',
        'Your task: recommend the decisions Italy’s leaders really took.'
      ],
      endWin: 'You followed Italy from the disappointment of 1919, through Corfu and Locarno, to Abyssinia, the Axis and the Pact of Steel. In June 1940, as France fell, Mussolini entered the war. It ended with Italy defeated and Mussolini dead.',
      ranks: [[.9, 'Machiavelli reborn'], [.75, 'Trusted counsellor'], [.55, 'Embassy attaché'], [0, 'Clerk in the colonial archives']]
    }
  };

  const P = k => window.Portraits.PEOPLE[k] || window.Portraits.PEOPLE.you;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function dateKey(d) {
    const y = +(d.match(/\d{4}/) || [0])[0];
    const m = MONTHS.findIndex(mm => d.toLowerCase().startsWith(mm));
    return y + (m < 0 ? 0 : m / 12);
  }

  function scenariosFor(role, level) {
    return window.SCENARIOS[role]
      .filter(s => level === 'alevel' || s.lv === 'both')
      .map((s, i) => ({ s, i, k: dateKey(s.date) }))
      .sort((a, b) => a.k - b.k || a.i - b.i)
      .map(x => x.s);
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  // ---------- state ----------
  let st = null;
  let pick = { level: null, role: null };

  function newState(level, role) {
    return {
      v: 1, level, role,
      ids: scenariosFor(role, level).map(s => s.id),
      i: 0, phase: 'decide', strikes: 0, hints: level === 'igcse' ? 3 : 0,
      auth: 60, tens: 20,
      answers: [], order: null, chosen: null, elim: [], fxApplied: []
    };
  }
  const cur = () => window.SCENARIOS[st.role].find(s => s.id === st.ids[st.i]);
  const save = () => st && store.set(SAVE_KEY, st);

  // ---------- screens ----------
  function show(id) {
    $$('.screen').forEach(s => { s.hidden = s.id !== id; });
    const el = document.getElementById(id);
    el.scrollTop = 0;
    if (id === 's-title') rain.start(); else rain.stop();
    if (id === 's-game') requestAnimationFrame(() => window.GameMap.resize());
  }

  function hydratePortraits(root = document) {
    root.querySelectorAll('[data-portrait]').forEach(el => {
      if (!el.firstChild) el.innerHTML = el.dataset.portrait.split(',').map(k => window.Portraits.render(k, { decorative: true })).join('');
    });
  }

  // ---------- title rain ----------
  const rain = (() => {
    const c = $('#rain'), ctx = c.getContext('2d');
    let drops = [], raf = null;
    function size() {
      const r = c.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1);
      c.width = r.width * d; c.height = r.height * d; ctx.setTransform(d, 0, 0, d, 0, 0);
      drops = Array.from({ length: Math.round(r.width / 6) }, () => ({ x: Math.random() * r.width, y: Math.random() * r.height, v: 7 + Math.random() * 9, l: 10 + Math.random() * 18 }));
    }
    function frame() {
      const r = c.getBoundingClientRect();
      ctx.clearRect(0, 0, r.width, r.height);
      ctx.strokeStyle = 'rgba(200,190,170,.35)'; ctx.lineWidth = 1;
      ctx.beginPath();
      for (const d of drops) {
        ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - d.l * 0.18, d.y + d.l);
        d.y += d.v; d.x -= d.v * 0.18;
        if (d.y > r.height) { d.y = -20; d.x = Math.random() * (r.width + 60); }
      }
      ctx.stroke();
      raf = requestAnimationFrame(frame);
    }
    return {
      start() { if (raf || matchMedia('(prefers-reduced-motion: reduce)').matches) return; size(); frame(); },
      stop() { cancelAnimationFrame(raf); raf = null; },
      size
    };
  })();
  addEventListener('resize', () => { if (!$('#s-title').hidden) rain.size(); });

  // ---------- sound toggle ----------
  function syncSoundButtons() {
    const on = window.Sound.enabled;
    $('#btn-sound-title').textContent = on ? '♪ Music on' : '♪ Music off';
    $('#btn-sound-title').setAttribute('aria-pressed', on);
    $('#btn-sound').setAttribute('aria-pressed', on);
  }
  function toggleSound() {
    window.Sound.setEnabled(!window.Sound.enabled);
    store.set(SOUND_KEY, window.Sound.enabled);
    syncSoundButtons();
  }

  // ---------- flow ----------
  function goLevel() { window.Sound.start(); window.Sound.play('paper'); show('s-level'); }

  function setCounts() {
    $$('[data-count]').forEach(el => {
      const n = scenariosFor(el.dataset.count, pick.level || 'igcse').length;
      el.textContent = `${n} decisions · ${pick.level === 'alevel' ? 'A-Level' : 'IGCSE'} file`;
    });
  }

  function goBrief() {
    const R = ROLES[pick.role];
    $('#brief-eyebrow').textContent = `${pick.level === 'alevel' ? 'A-Level' : 'IGCSE'} file · ${R.desk}`;
    $('#brief-title').textContent = pick.role === 'league' ? 'Your seat at the Council' : `Adviser to ${R.name}`;
    $('#brief-body').innerHTML = sceneImg(pick.role) + R.intro.map(p => `<p>${p}</p>`).join('');
    $('#brief-fail').textContent = R.fail;
    $('#brief-hints').innerHTML = pick.level === 'igcse'
      ? '<b>Three adviser hints.</b> Each one crosses out a wrong option. Use them wisely.'
      : '<b>No hints at A-Level.</b> After each decision, the Historian’s Desk summarises the debate.';
    show('s-brief');
    window.Sound.play('paper');
  }

  function begin() {
    st = newState(pick.level, pick.role);
    save();
    startGame();
  }

  function startGame() {
    window.GameMap.reset();
    window.GameMap.setPlayer(st.role);
    // replay map effects of decisions already taken
    st.fxApplied.forEach(id => window.GameMap.apply(window.SCENARIOS[st.role].find(s => s.id === id).fx, true));
    $('#hud-role').textContent = (st.level === 'alevel' ? 'A-Level · ' : 'IGCSE · ') + ROLES[st.role].name;
    show('s-game');
    renderHud(true);
    renderCase();
  }

  // ---------- HUD ----------
  function renderHud(instant) {
    const s = cur();
    $('#hud-year').textContent = s ? (s.date.match(/\d{4}(–\d{2})?/) || [''])[0] : '1939';
    const setM = (id, v) => { const i = $(id + ' i'); i.style.transition = instant ? 'none' : ''; i.style.width = Math.max(2, Math.min(100, v)) + '%'; };
    setM('#m-auth', st.auth); setM('#m-tens', st.tens);
    $('#m-auth').title = `League authority: ${Math.round(st.auth)} / 100`;
    $('#m-tens').title = `World tension: ${Math.round(st.tens)} / 100`;
    const box = $('#hud-strikes');
    box.innerHTML = '';
    for (let k = 0; k < MAX_STRIKES; k++) {
      const d = document.createElement('span');
      d.className = 'strike' + (k < st.strikes ? ' on' : '') + (k === MAX_STRIKES - 1 && k >= st.strikes ? ' last' : '');
      d.textContent = k < st.strikes ? '✕' : (k === MAX_STRIKES - 1 ? 'OUT' : '');
      box.appendChild(d);
    }
    box.setAttribute('aria-label', `Mistakes: ${st.strikes}. Three are allowed; the fourth ends the game.`);
    $('#progress i').style.width = (st.i / st.ids.length * 100) + '%';
    window.GameMap.setTension(st.tens);
    window.Sound.setIntensity(st.tens / 100);
  }

  // ---------- the case file ----------
  function renderCase() {
    const s = cur();
    if (!s) return finish(true);
    const R = ROLES[st.role];
    if (!st.order) {
      const opts = s.opts.map((o, idx) => ({ o, idx })).filter(x => st.level === 'alevel' || !x.o.a);
      st.order = shuffle(opts.map(x => x.idx));
      st.chosen = null; st.elim = [];
      save();
    }
    const sp = P(s.speaker);
    const inner = $('#dossier-inner');
    inner.innerHTML = `
      <header class="case-head">
        <div class="case-meta"><span>${esc(s.date)}</span><span class="count">Crisis ${st.i + 1} of ${st.ids.length}</span></div>
        <h2>${esc(s.title)}</h2>
        <p class="advising">${R.advising(s)}</p>
      </header>
      <div class="panel">
        <div class="face">${window.Portraits.render(s.speaker)}</div>
        <div class="bubble-wrap">
          <div class="caption">${esc(captionFor(s))}</div>
          <div class="bubble" id="bubble" aria-label="${esc(sp.name)} says: ${esc(s.said)}"></div>
          <div class="who">${esc(sp.name)}<small>${esc(sp.role)}</small>${s.saidReal ? `<span class="genuine">${s.saidReal === 'attr' ? 'Attributed quotation' : 'Genuine quotation'}</span>` : ''}</div>
        </div>
      </div>
      <section class="file">
        <span class="file-tag">Dispatch</span>
        <p>${esc(s.brief)}</p>
        <p class="ask">${esc(s.ask)}</p>
      </section>
      <div class="options" id="options" role="group" aria-label="Options"></div>
      <div class="actions" id="actions"></div>
      <div id="result" aria-live="polite"></div>`;
    typeBubble(s.said);
    renderOptions();
    renderActions();
    if (st.phase === 'result') renderResult(true);
    const [lon, lat, z] = s.focus;
    window.GameMap.focus(lon, lat, z);
    renderHud();
    $('#dossier').scrollTop = 0;
    if (st.phase === 'decide') window.Sound.play('telegraph');
  }

  function captionFor(s) {
    const m = s.fx && s.fx.mark && s.fx.mark[0];
    const place = (m && window.GameMap.placeName(m.id)) || ROLES[st.role].city;
    return `${place}, ${s.date}…`;
  }

  // ---------- full screen ----------
  const FS = {
    supported() {
      const d = document.documentElement;
      return !!(d.requestFullscreen || d.webkitRequestFullscreen) && (document.fullscreenEnabled !== false || document.webkitFullscreenEnabled);
    },
    active() { return !!(document.fullscreenElement || document.webkitFullscreenElement); },
    async toggle() {
      try {
        if (FS.active()) {
          await (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen());
        } else {
          const d = document.documentElement;
          if (!FS.supported()) throw new Error('unsupported');
          await (d.requestFullscreen ? d.requestFullscreen({ navigationUI: 'hide' }) : d.webkitRequestFullscreen());
        }
      } catch (e) {
        const ios = /iP(hone|od|ad)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        toast('Full screen isn’t available here', ios
          ? 'On iPhone or iPad, tap Share, then “Add to Home Screen”. Open the game from the new icon and it fills the whole screen.'
          : 'This browser or page blocked full screen. Try opening the game in its own browser tab, or use your browser’s full-screen key (F11 on most computers).');
      }
    },
    sync() {
      const on = FS.active();
      $$('.fs-btn').forEach(b => b.setAttribute('aria-pressed', on));
      $('#btn-fs-title').textContent = on ? '⛶ Exit full screen' : '⛶ Full screen';
      $('#btn-fs').setAttribute('aria-label', on ? 'Exit full screen' : 'Full screen');
      requestAnimationFrame(() => { window.GameMap.resize(); if (!$('#s-title').hidden) rain.size(); });
    }
  };

  function toast(title, msg) {
    const t = $('#toast');
    t.innerHTML = `<b>${esc(title)}</b>${esc(msg)}`;
    t.hidden = false;
    clearTimeout(toast.t);
    toast.t = setTimeout(() => { t.hidden = true; }, 7000);
  }

  let typeTimer = null;
  function typeBubble(text) {
    const b = $('#bubble');
    clearInterval(typeTimer);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || st.phase === 'result') { b.textContent = text; return; }
    let n = 0;
    b.textContent = '';
    typeTimer = setInterval(() => {
      n += 1;
      b.textContent = text.slice(0, n);
      if (text[n - 1] && text[n - 1] !== ' ') window.Sound.play('key');
      if (n >= text.length) clearInterval(typeTimer);
    }, 22);
    b.onclick = () => { clearInterval(typeTimer); b.textContent = text; };
  }

  function renderOptions() {
    const s = cur();
    const box = $('#options');
    const letters = 'ABCD';
    box.innerHTML = st.order.map((idx, k) => {
      const o = s.opts[idx];
      let cls = 'opt';
      if (st.elim.includes(idx)) cls += ' eliminated';
      if (st.phase === 'result') {
        cls += ' locked';
        if (idx === s.ans) cls += ' is-correct';
        else if (idx === st.chosen) cls += ' is-wrong';
        else cls += ' dim';
      }
      return `<button class="${cls}" data-idx="${idx}" aria-pressed="${st.chosen === idx}"><span class="lt">${letters[k]}</span><span>${esc(o.t)}</span></button>`;
    }).join('');
    box.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
      if (st.phase !== 'decide') return;
      st.chosen = +b.dataset.idx;
      box.querySelectorAll('.opt').forEach(x => x.setAttribute('aria-pressed', x === b));
      window.Sound.play('key');
      renderActions();
      save();
    }));
  }

  function renderActions() {
    const a = $('#actions');
    if (st.phase !== 'decide') { a.innerHTML = ''; return; }
    const canHint = st.level === 'igcse' && st.hints > 0 && st.elim.length === 0 && st.order.length > 2;
    a.innerHTML = `
      <button class="btn btn-primary" id="seal" ${st.chosen === null ? 'disabled' : ''}>${st.chosen === null ? 'Choose an option' : 'Seal the decision'}</button>
      ${st.level === 'igcse' ? `<button class="btn btn-ghost hint-btn" id="hint" ${canHint ? '' : 'disabled'}>Ask your adviser (${st.hints} left)</button>` : ''}`;
    $('#seal').addEventListener('click', seal);
    const h = $('#hint');
    if (h) h.addEventListener('click', useHint);
  }

  function useHint() {
    const s = cur();
    const wrong = st.order.filter(i => i !== s.ans && i !== st.chosen);
    if (!wrong.length) return;
    const kill = wrong[Math.floor(Math.random() * wrong.length)];
    st.elim = [kill]; st.hints -= 1;
    if (st.chosen === kill) st.chosen = null;
    window.Sound.play('paper');
    save();
    renderOptions(); renderActions();
  }

  function seal() {
    const s = cur();
    if (st.chosen === null) return;
    const ok = st.chosen === s.ans;
    st.answers.push({ id: s.id, chosen: st.chosen, ok });
    if (!ok) st.strikes += 1;
    st.phase = 'result';
    // history happens regardless of the player's call
    st.auth = Math.max(0, Math.min(100, st.auth + (s.fx.auth || 0)));
    st.tens = Math.max(0, Math.min(100, st.tens + (s.fx.tens || 0)));
    st.fxApplied.push(s.id);
    save();
    window.Sound.play('stamp');
    window.Sound.play(ok ? 'right' : 'wrong');
    renderOptions(); renderActions();
    renderResult(false);
    setTimeout(() => {
      window.GameMap.apply(s.fx, false);
      renderHud();
      ['#m-auth', '#m-tens'].forEach(id => { const m = $(id); m.classList.remove('bump'); void m.offsetWidth; m.classList.add('bump'); });
    }, 500);
  }

  function renderResult(restoring) {
    const s = cur();
    const R = ROLES[st.role];
    const last = st.answers[st.answers.length - 1];
    const ok = last && last.id === s.id ? last.ok : true;
    const chosen = last && last.id === s.id ? s.opts[last.chosen] : null;
    const out = st.strikes >= MAX_STRIKES;
    const left = MAX_STRIKES - 1 - st.strikes;
    const chips = [];
    if (s.fx.auth) chips.push(`<span class="chip ${s.fx.auth > 0 ? 'up' : 'down'}">League authority ${s.fx.auth > 0 ? '▲' : '▼'} ${Math.abs(s.fx.auth)}</span>`);
    if (s.fx.tens) chips.push(`<span class="chip ${s.fx.tens > 0 ? 'down' : 'up'}">World tension ${s.fx.tens > 0 ? '▲' : '▼'} ${Math.abs(s.fx.tens)}</span>`);
    if (s.fx.own) Object.entries(s.fx.own).forEach(([k, v]) => {
      const nm = { manchuria: 'Manchuria', saar: 'Saar', rhineland: 'Rhineland', ruhr: 'Ruhr', austria: 'Austria', sudetenland: 'Sudetenland', bohemia: 'Bohemia–Moravia', memel: 'Memel', abyssinia: 'Abyssinia', albania: 'Albania' }[k];
      const who = { de: 'Germany', it: 'Italy', jp: 'Japan', fr: 'French occupation' }[v];
      chips.push(`<span class="chip down">Map: ${nm}${who ? ' → ' + who : ' restored'}</span>`);
    });
    const verdict = ok
      ? `<div class="stampbox ok">As history records<small>Correct call</small></div>`
      : `<div class="stampbox bad">${out ? (st.role === 'league' ? 'Expelled' : 'Ousted') : 'Wrong call'}<small>${out ? 'Fourth mistake' : `Mistake ${st.strikes} of 3 allowed${left === 0 ? ' · next one ends it' : ''}`}</small></div>`;
    const hist = s.hist ? (st.level === 'alevel'
      ? `<div class="note hist"><h4>Historian’s desk</h4><p>${esc(s.hist)}</p></div>`
      : `<details class="note hist"><summary>Go deeper: what historians say</summary><p>${esc(s.hist)}</p></details>`) : '';
    $('#result').innerHTML = `
      <div class="verdict">
        ${verdict}
        ${!ok && chosen ? `<div class="why"><b>Why that didn’t happen</b>${esc(chosen.x || '')}</div>` : ''}
        <div class="headline"><div class="paper-name"><span>${R.paper}</span><span>${esc(s.date)}</span></div><h3>${esc(s.head)}</h3></div>
        <div class="record"><h4>What really happened</h4><p>${esc(s.out)}</p><div class="fx-chips">${chips.join('')}</div></div>
        ${s.exam ? `<div class="note"><h4>${st.level === 'alevel' ? 'Exam angle' : 'Exam tip'}</h4><p>${esc(s.exam)}</p></div>` : ''}
        ${hist}
        <div class="actions"><button class="btn btn-primary" id="next">${out ? 'Face the consequences' : (st.i + 1 >= st.ids.length ? 'Close the file' : 'Next dispatch →')}</button></div>
      </div>`;
    $('#next').addEventListener('click', next);
    if (!restoring) setTimeout(() => {
      const d = $('#dossier'), r = $('#result');
      const top = r.getBoundingClientRect().top - d.getBoundingClientRect().top + d.scrollTop - 12;
      d.scrollTo({ top, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }, 350);
  }

  function next() {
    if (st.strikes >= MAX_STRIKES) return finish(false);
    st.i += 1; st.phase = 'decide'; st.order = null; st.chosen = null; st.elim = [];
    save();
    if (st.i >= st.ids.length) return finish(true);
    window.Sound.play('paper');
    renderCase();
  }

  // ---------- endings ----------
  function finish(completed) {
    const R = ROLES[st.role];
    const total = st.answers.length;
    const right = st.answers.filter(a => a.ok).length;
    const pct = total ? right / total : 0;
    const rank = R.ranks.find(([t]) => pct >= t)[1];
    const lastS = cur() || window.SCENARIOS[st.role].find(s => s.id === st.ids[st.ids.length - 1]);
    const date = completed ? (st.role === 'italy' ? '10 June 1940' : '3 September 1939') : lastS.date;
    const face = completed ? (st.role === 'league' ? 'avenol' : st.role === 'germany' ? 'hitler' : 'mussolini') : 'you';
    const head = completed
      ? (st.role === 'italy' ? 'ITALY ENTERS THE WAR' : 'EUROPE AT WAR')
      : R.outHead;
    const body = completed
      ? `<p>${R.endWin}</p><p>You made ${right} of ${total} calls as history did, and leave the service with the rank of <b>${rank}</b>.</p>`
      : `<p>${R.outBody}</p><p>You were removed in ${esc(lastS.date)}, after ${total} decisions, with ${right} made as history did. ${(n => n === 1 ? 'One crisis was' : n + ' crises were')(st.ids.length - st.i - 1)} still to come.</p>`;
    $('#newspaper').innerHTML = `
      <div class="np-mast"><div class="np-name">${R.paper}</div><div class="np-line"><span>${R.city}</span><span>${esc(date)}</span><span>Late edition</span></div></div>
      <h2 class="np-head ${completed ? 'red' : ''}">${head}</h2>
      ${sceneImg(completed ? 'war' : 'ousted')}
      <div class="np-cols"><div class="face">${window.Portraits.render(face, { decorative: true })}</div><div>${body}</div></div>
      <div class="np-score"><span>Correct <b>${right}</b> / ${total}</span><span>Mistakes <b>${st.strikes}</b></span><span>Rank <b>${rank}</b></span></div>`;
    renderDebrief($('#debrief'));
    store.del(SAVE_KEY);
    show('s-end');
    window.Sound.play(completed ? 'fanfare' : 'doom');
  }

  function renderDebrief(box, compact) {
    const items = st.ids.map(id => {
      const s = window.SCENARIOS[st.role].find(x => x.id === id);
      const a = st.answers.find(x => x.id === id);
      if (!a && compact) return '';
      const mk = a ? (a.ok ? '<span class="mk2 ok">✓</span>' : '<span class="mk2 bad">✕</span>') : '<span class="mk2 skip">·</span>';
      if (compact) return `<div class="log-item">${mk}<div><b>${esc(s.date)}</b> · ${esc(s.title)}</div></div>`;
      return `<div class="db-item">${mk}<div><h4>${esc(s.title)} <small>· ${esc(s.date)}</small></h4>
        <p>${a ? '' : '<i>Not reached.</i> '}History: ${esc(s.opts[s.ans].t)}</p>
        ${a && !a.ok ? `<p class="yours">You chose: ${esc(s.opts[a.chosen].t)}</p>` : ''}</div></div>`;
    }).join('');
    box.innerHTML = compact ? `<div class="log-list">${items || '<p>No decisions yet.</p>'}</div>` : `<h3>The case files</h3>${items}`;
  }

  // ---------- wiring ----------
  function wire() {
    $('#btn-new').addEventListener('click', () => { pick = { level: null, role: null }; goLevel(); });
    $('#btn-resume').addEventListener('click', () => {
      const s = store.get(SAVE_KEY);
      if (!s) return;
      st = s; pick = { level: s.level, role: s.role };
      window.Sound.start();
      startGame();
    });
    $('#btn-sound-title').addEventListener('click', toggleSound);
    $('#btn-sound').addEventListener('click', toggleSound);
    $$('.fs-btn').forEach(b => b.addEventListener('click', () => FS.toggle()));
    document.addEventListener('fullscreenchange', FS.sync);
    document.addEventListener('webkitfullscreenchange', FS.sync);
    $('#toast').addEventListener('click', () => { $('#toast').hidden = true; });
    $('#btn-about').addEventListener('click', () => { $('#about').hidden = false; $('#about-close').focus(); });
    $('#about-close').addEventListener('click', () => { $('#about').hidden = true; });
    $('#about').addEventListener('click', e => { if (e.target.id === 'about') $('#about').hidden = true; });
    $$('[data-go]').forEach(b => b.addEventListener('click', () => { show(b.dataset.go); refreshResume(); }));
    $$('[data-level]').forEach(b => b.addEventListener('click', () => {
      pick.level = b.dataset.level; setCounts(); window.Sound.play('stamp'); show('s-role');
    }));
    $$('[data-role]').forEach(b => b.addEventListener('click', () => {
      pick.role = b.dataset.role; window.Sound.play('stamp'); goBrief();
    }));
    $('#btn-begin').addEventListener('click', begin);

    $('#map-in').addEventListener('click', () => window.GameMap.zoomIn());
    $('#map-out').addEventListener('click', () => window.GameMap.zoomOut());
    $('#map-focus').addEventListener('click', () => window.GameMap.refocus());
    $('#map-world').addEventListener('click', () => window.GameMap.world());
    $('#map-full').addEventListener('click', () => {
      const on = $('#stage').classList.toggle('map-full');
      $('#map-full').setAttribute('aria-pressed', on);
      $('#map-full').setAttribute('aria-label', on ? 'Show the dossier' : 'Expand map');
      requestAnimationFrame(() => window.GameMap.resize());
    });
    $('#legend-btn').addEventListener('click', () => {
      const l = $('#legend'); l.hidden = !l.hidden; $('#legend-btn').setAttribute('aria-expanded', !l.hidden);
    });

    $('#btn-menu').addEventListener('click', () => { $('#menu-sheet').hidden = false; $('#m-resume').focus(); });
    $('#m-resume').addEventListener('click', () => { $('#menu-sheet').hidden = true; });
    $('#menu-sheet').addEventListener('click', e => { if (e.target.id === 'menu-sheet') $('#menu-sheet').hidden = true; });
    $('#m-log').addEventListener('click', () => {
      const card = $('#menu-sheet .menu-card');
      let box = card.querySelector('.log-wrap');
      if (box) { box.remove(); return; }
      box = document.createElement('div'); box.className = 'log-wrap';
      renderDebrief(box, true);
      card.insertBefore(box, $('#m-quit'));
    });
    $('#m-quit').addEventListener('click', () => {
      save(); $('#menu-sheet').hidden = true;
      const lw = $('#menu-sheet .log-wrap'); if (lw) lw.remove();
      refreshResume(); show('s-title');
    });

    $('#btn-again').addEventListener('click', () => { pick = { level: st.level, role: st.role }; begin(); });
    $('#btn-other').addEventListener('click', () => { pick = { level: st.level, role: null }; setCounts(); show('s-role'); });
    $('#btn-home').addEventListener('click', () => { refreshResume(); show('s-title'); });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { $('#about').hidden = true; $('#menu-sheet').hidden = true; }
      if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey && !e.altKey) { FS.toggle(); return; }
      if ($('#s-game').hidden || !st || st.phase !== 'decide' || !$('#menu-sheet').hidden) return;
      const k = e.key.toUpperCase();
      const idx = 'ABCD'.indexOf(k);
      if (idx >= 0 && idx < st.order.length) {
        const btn = $$('#options .opt')[idx];
        if (btn && !btn.classList.contains('eliminated')) btn.click();
      }
      if (e.key === 'Enter' && st.chosen !== null && document.activeElement && !document.activeElement.closest('button')) seal();
    });
  }

  function refreshResume() {
    const s = store.get(SAVE_KEY);
    const b = $('#btn-resume');
    if (s && s.v === 1 && s.ids && s.i < s.ids.length) {
      b.hidden = false;
      b.textContent = `Resume: ${ROLES[s.role].name} · ${s.level === 'alevel' ? 'A-Level' : 'IGCSE'} (${s.i + 1}/${s.ids.length})`;
    } else b.hidden = true;
  }

  const sceneArt = k => (window.ART && window.ART.scenes && window.ART.scenes[k]) || null;
  const sceneImg = k => sceneArt(k) ? `<img class="scene-art" src="${sceneArt(k)}" alt="" decoding="async">` : '';

  function init() {
    const t = $('#s-title');
    // Title background: absolute URLs, because url() inside a CSS variable resolves against the stylesheet's folder
    const abs = u => new URL(u, document.baseURI).href;
    const setTitleArt = () => {
      const tall = matchMedia('(orientation: portrait)').matches && sceneArt('title-mobile');
      const src = tall ? sceneArt('title-mobile') : (sceneArt('title') || sceneArt('title-mobile'));
      if (!src) return;
      t.classList.add('has-art');
      t.style.backgroundImage = `linear-gradient(rgba(12, 11, 10, ${tall ? .35 : .55}), rgba(12, 11, 10, .92) ${tall ? 80 : 75}%), url("${abs(src)}")`;
      t.style.backgroundPosition = tall ? 'center top' : 'center 30%';
    };
    setTitleArt();
    matchMedia('(orientation: portrait)').addEventListener('change', setTitleArt);
    const snd = store.get(SOUND_KEY);
    if (snd === false) window.Sound.setEnabled(false);
    hydratePortraits();
    window.GameMap.build($('#map'));
    wire();
    syncSoundButtons();
    refreshResume();
    setCounts();
    show('s-title');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
