// Procedural noir score + sound effects with the Web Audio API (no audio files needed).
// D minor: slow string pads, a pizzicato "heartbeat" bass, a ticking clock and a lonely piano.
// Intensity (0–1) follows world tension: more timpani, faster ostinato, louder clock.
(function () {
  let ctx = null, master, music, sfx, verb, verbIn, timer = null;
  let running = false, enabled = true, intensity = 0.15;
  let nextT = 0, step = 0;
  const BPM = 64, STEP = 60 / BPM / 2;   // eighth-note grid
  const BAR = 16;                        // eighths per chord (two bars of 4/4)

  const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
  // i – VI – iv – V   then   i – III – VI – V(b9)
  const PROG = [
    [38, [50, 53, 57, 62]], [34, [50, 53, 58, 62]], [31, [50, 55, 58, 62]], [33, [49, 52, 57, 61]],
    [38, [50, 53, 57, 60]], [41, [48, 53, 57, 60]], [34, [50, 53, 58, 65]], [33, [49, 55, 57, 58]]
  ];
  const MEL = [62, 64, 65, 67, 69, 70, 73, 74, 77];

  function init() {
    if (ctx) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0.8;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.ratio.value = 4;
    master.connect(comp).connect(ctx.destination);
    music = ctx.createGain(); music.gain.value = 0.55; music.connect(master);
    sfx = ctx.createGain(); sfx.gain.value = 0.9; sfx.connect(master);
    // reverb from generated impulse
    verb = ctx.createConvolver();
    const len = ctx.sampleRate * 3.2, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    }
    verb.buffer = ir;
    verbIn = ctx.createGain(); verbIn.gain.value = 0.5;
    verbIn.connect(verb).connect(master);
    document.addEventListener('visibilitychange', () => {
      if (!ctx) return;
      if (document.hidden) ctx.suspend(); else if (enabled) ctx.resume();
    });
    return true;
  }

  function env(g, t, a, peak, d, sustain, r) {
    g.gain.cancelScheduledValues(t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    if (d) g.gain.exponentialRampToValueAtTime(Math.max(sustain, 0.0001), t + a + d);
    if (r) g.gain.exponentialRampToValueAtTime(0.0001, t + a + d + r);
  }

  function noiseBuf(sec) {
    const b = ctx.createBuffer(1, ctx.sampleRate * sec, ctx.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  let NOISE;

  // ---------- instruments ----------
  function pad(notes, t, dur) {
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 700 + intensity * 900; lp.Q.value = 0.6;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.06, t + 1.8);
    g.gain.setValueAtTime(0.06, t + dur - 1.2);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.8);
    lp.connect(g); g.connect(music); g.connect(verbIn);
    notes.forEach(n => {
      [-7, 7].forEach(det => {
        const o = ctx.createOscillator(); o.type = 'sawtooth';
        o.frequency.value = mtof(n); o.detune.value = det;
        const vib = ctx.createOscillator(), vg = ctx.createGain();
        vib.frequency.value = 4.6; vg.gain.value = 4; vib.connect(vg).connect(o.detune);
        o.connect(lp); o.start(t); o.stop(t + dur + 1); vib.start(t); vib.stop(t + dur + 1);
      });
    });
  }

  function pluck(n, t, vol = 0.32) {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
    o.type = 'triangle'; o2.type = 'sine';
    o.frequency.value = mtof(n); o2.frequency.value = mtof(n) * 2;
    lp.type = 'lowpass'; lp.frequency.value = 900;
    const g2 = ctx.createGain(); g2.gain.value = 0.25;
    o.connect(lp); o2.connect(g2).connect(lp); lp.connect(g); g.connect(music);
    env(g, t, 0.008, vol, 0.5, 0.0001);
    o.start(t); o2.start(t); o.stop(t + 0.7); o2.stop(t + 0.7);
  }

  function piano(n, t, vol = 0.09) {
    const g = ctx.createGain();
    g.connect(music); g.connect(verbIn);
    [1, 2, 3.01].forEach((h, i) => {
      const o = ctx.createOscillator(); o.type = i ? 'sine' : 'triangle';
      o.frequency.value = mtof(n) * h;
      const hg = ctx.createGain(); hg.gain.value = [1, 0.35, 0.12][i];
      o.connect(hg).connect(g); o.start(t); o.stop(t + 2.6);
    });
    env(g, t, 0.006, vol, 2.4, 0.0001);
  }

  function tick(t, vol) {
    const s = ctx.createBufferSource(); s.buffer = NOISE;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3200; bp.Q.value = 6;
    const g = ctx.createGain();
    s.connect(bp).connect(g).connect(music);
    env(g, t, 0.001, vol, 0.03, 0.0001);
    s.start(t, Math.random()); s.stop(t + 0.06);
  }

  function timpani(n, t, vol = 0.5) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(mtof(n) * 1.5, t);
    o.frequency.exponentialRampToValueAtTime(mtof(n), t + 0.12);
    o.connect(g); g.connect(music); g.connect(verbIn);
    env(g, t, 0.005, vol, 1.4, 0.0001);
    o.start(t); o.stop(t + 1.6);
    const s = ctx.createBufferSource(); s.buffer = NOISE;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 300;
    const ng = ctx.createGain(); s.connect(lp).connect(ng).connect(music);
    env(ng, t, 0.002, vol * 0.4, 0.25, 0.0001);
    s.start(t, Math.random()); s.stop(t + 0.3);
  }

  function stab(notes, t, vol = 0.12, dur = 0.5) {
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(400, t); lp.frequency.exponentialRampToValueAtTime(2600, t + 0.08);
    lp.frequency.exponentialRampToValueAtTime(600, t + dur);
    const g = ctx.createGain(); lp.connect(g); g.connect(music); g.connect(verbIn);
    env(g, t, 0.02, vol, dur, 0.0001);
    notes.forEach(n => {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = mtof(n);
      o.connect(lp); o.start(t); o.stop(t + dur + 0.2);
    });
  }

  // ---------- sequencer ----------
  function schedule() {
    while (nextT < ctx.currentTime + 0.25) {
      const chordIdx = Math.floor(step / BAR) % PROG.length;
      const [root, notes] = PROG[chordIdx];
      const s = step % BAR;
      if (s === 0) {
        pad(notes, nextT, STEP * BAR);
        if (intensity > 0.35 || chordIdx % 4 === 3) timpani(root - 12 + 12, nextT, 0.25 + intensity * 0.35);
      }
      // heartbeat bass: beats 1 and the "and" of 1
      if (s % 8 === 0) pluck(root, nextT, 0.34);
      if (s % 8 === 1) pluck(root, nextT, 0.2);
      // ostinato when tension is high
      if (intensity > 0.55 && s % 2 === 0 && s % 8 !== 0) pluck(root + 12, nextT, 0.08 + intensity * 0.06);
      // clock
      if (s % 2 === 0) tick(nextT, 0.03 + intensity * 0.05);
      // lonely piano
      if (s % 2 === 0 && Math.random() < 0.18 + intensity * 0.12) {
        const pool = MEL.filter(m => notes.some(n => (m - n) % 12 === 0) || Math.random() < 0.25);
        piano(pool[Math.floor(Math.random() * pool.length)], nextT + (Math.random() < 0.3 ? STEP / 2 : 0));
      }
      if (intensity > 0.75 && s === 12 && chordIdx % 2 === 1) stab([root + 12, root + 18, root + 24], nextT, 0.06);
      nextT += STEP;
      step++;
    }
  }

  function start() {
    if (!enabled || !init()) return;
    ctx.resume();
    if (running) return;
    NOISE = NOISE || noiseBuf(2);
    running = true;
    nextT = ctx.currentTime + 0.1;
    music.gain.cancelScheduledValues(ctx.currentTime);
    music.gain.setValueAtTime(0.0001, ctx.currentTime);
    music.gain.exponentialRampToValueAtTime(0.55, ctx.currentTime + 3);
    timer = setInterval(schedule, 60);
  }

  function stop() {
    running = false;
    clearInterval(timer);
    if (ctx) music.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.4);
  }

  // ---------- sound effects ----------
  const fx = {
    stamp() {
      const t = ctx.currentTime;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.15);
      o.connect(g).connect(sfx); env(g, t, 0.003, 0.7, 0.22, 0.0001); o.start(t); o.stop(t + 0.3);
      const s = ctx.createBufferSource(); s.buffer = NOISE;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1200;
      const ng = ctx.createGain(); s.connect(lp).connect(ng).connect(sfx);
      env(ng, t, 0.002, 0.5, 0.09, 0.0001); s.start(t); s.stop(t + 0.12);
    },
    key() {
      const t = ctx.currentTime;
      const s = ctx.createBufferSource(); s.buffer = NOISE;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800 + Math.random() * 1400; bp.Q.value = 3;
      const g = ctx.createGain(); s.connect(bp).connect(g).connect(sfx);
      env(g, t, 0.001, 0.12, 0.025, 0.0001); s.start(t, Math.random()); s.stop(t + 0.04);
    },
    telegraph() {
      const t = ctx.currentTime;
      [0, 0.12, 0.2, 0.42].forEach((d, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'square'; o.frequency.value = 760;
        const lp = ctx.createBiquadFilter(); lp.frequency.value = 1500;
        o.connect(lp).connect(g).connect(sfx);
        env(g, t + d, 0.004, 0.06, i === 3 ? 0.14 : 0.05, 0.0001); o.start(t + d); o.stop(t + d + 0.25);
      });
    },
    paper() {
      const t = ctx.currentTime;
      const s = ctx.createBufferSource(); s.buffer = NOISE;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.2;
      bp.frequency.setValueAtTime(900, t); bp.frequency.exponentialRampToValueAtTime(4000, t + 0.25);
      const g = ctx.createGain(); s.connect(bp).connect(g).connect(sfx);
      env(g, t, 0.03, 0.22, 0.25, 0.0001); s.start(t, Math.random()); s.stop(t + 0.35);
    },
    right() {
      const t = ctx.currentTime + 0.15;
      stabTo([62, 66, 69, 74], t, 0.13, 1.6);
      timpaniTo(38, t, 0.5);
    },
    wrong() {
      const t = ctx.currentTime + 0.15;
      stabTo([38, 39, 44, 50], t, 0.16, 1.8);
      timpaniTo(26, t, 0.7);
    },
    doom() {
      const t = ctx.currentTime + 0.1;
      [50, 49, 48, 47, 45, 44, 38].forEach((n, i) => stabTo([n, n - 12], t + i * 0.38, 0.1, 0.5));
      timpaniTo(26, t + 2.7, 0.9);
      const s = ctx.createBufferSource(); s.buffer = NOISE;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500;
      const g = ctx.createGain(); s.connect(lp).connect(g); g.connect(sfx); g.connect(verbIn);
      env(g, t + 2.7, 0.01, 0.4, 3, 0.0001); s.start(t + 2.7); s.stop(t + 6);
    },
    fanfare() {
      const t = ctx.currentTime + 0.1;
      [[50, 57, 62], [53, 58, 65], [55, 62, 67], [57, 62, 69, 74]].forEach((c, i) => stabTo(c, t + i * 0.45, 0.11, i === 3 ? 2 : 0.4));
      timpaniTo(38, t + 1.35, 0.6);
    }
  };
  function stabTo(notes, t, vol, dur) {
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(500, t); lp.frequency.exponentialRampToValueAtTime(2400, t + 0.1);
    lp.frequency.exponentialRampToValueAtTime(700, t + dur);
    const g = ctx.createGain(); lp.connect(g); g.connect(sfx); g.connect(verbIn);
    env(g, t, 0.03, vol, dur, 0.0001);
    notes.forEach(n => [-5, 5].forEach(det => {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = mtof(n); o.detune.value = det;
      o.connect(lp); o.start(t); o.stop(t + dur + 0.2);
    }));
  }
  function timpaniTo(n, t, vol) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(mtof(n) * 1.5, t); o.frequency.exponentialRampToValueAtTime(mtof(n), t + 0.12);
    o.connect(g); g.connect(sfx); g.connect(verbIn);
    env(g, t, 0.005, vol, 1.6, 0.0001); o.start(t); o.stop(t + 1.8);
  }

  let lastKey = 0;
  window.Sound = {
    start, stop,
    get enabled() { return enabled; },
    setEnabled(on) {
      enabled = on;
      if (!on) { stop(); if (ctx) ctx.suspend(); }
      else { if (init()) { ctx.resume(); start(); } }
    },
    setIntensity(v) { intensity = Math.max(0, Math.min(1, v)); },
    play(name) {
      if (!enabled || !ctx || ctx.state !== 'running') return;
      NOISE = NOISE || noiseBuf(2);
      if (name === 'key') { const n = performance.now(); if (n - lastKey < 45) return; lastKey = n; }
      fx[name] && fx[name]();
    }
  };
})();
