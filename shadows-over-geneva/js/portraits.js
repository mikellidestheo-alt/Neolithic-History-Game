// Graphic-novel portrait generator.
// Realistic proportions, fine ink lines, flat shadow tones with cross-hatching, muted period colours and
// an architectural backdrop. Every figure is assembled from a few parameters.
(function () {
  const INK = '#1b1612';
  const SKIN = {
    light: { base: '#d9b592', shade: '#b3896a', deep: '#8a6249', lip: '#b07b66' },
    mid: { base: '#c99c76', shade: '#a2775a', deep: '#7c5640', lip: '#9c6a55' },
    dark: { base: '#7d5640', shade: '#5f3f2e', deep: '#47291c', lip: '#5c3527' }
  };
  const HAIR = { black: '#1f1b18', dark: '#3b3029', brown: '#5b4333', grey: '#8f8a83', white: '#d9d4ca' };
  const CLOTH = {
    suit: '#2f3a48', wing: '#26272b', black: '#191817', brown: '#6b5638', uniform: '#535a43',
    tunic: '#6d6a52', cape: '#24201d', grey: '#55595e', blue: '#2b3a52'
  };
  const SCENE = {
    palais: { sky: '#b9c3bd', stone: '#d8ccb0', dark: '#9c907a' },
    ministry: { sky: '#6f6658', stone: '#8d7f69', dark: '#4e463b' },
    field: { sky: '#a9a594', stone: '#7f7a66', dark: '#55513f' },
    noir: { sky: '#3a3631', stone: '#4c463e', dark: '#25221e' }
  };

  const PEOPLE = {
    drummond:   { name: 'Sir Eric Drummond', role: 'Secretary-General of the League, 1920–33', hair: 'receding', hc: 'grey', stache: 'clipped', mc: 'grey', clothes: 'wing', tie: '#5a2a24', brows: 'calm', mouth: 'set', age: 1, scene: 'palais' },
    avenol:     { name: 'Joseph Avenol', role: 'Secretary-General of the League, 1933–40', hair: 'bald', hc: 'grey', glasses: 'round', clothes: 'suit', brows: 'worried', mouth: 'set', age: 1, scene: 'palais' },
    pilsudski:  { name: 'Marshal Józef Piłsudski', role: 'Leader of Poland', hair: 'crop', hc: 'grey', stache: 'walrus', mc: 'grey', brows: 'heavy', clothes: 'uniform', mouth: 'set', age: 2, jaw: .7, scene: 'field' },
    chamberlainA: { name: 'Sir Austen Chamberlain', role: 'British Foreign Secretary, 1924–29', hair: 'slick', hc: 'dark', glasses: 'monocle', clothes: 'wing', brows: 'raised', mouth: 'set', hw: 38, chin: 172, age: 1, scene: 'palais' },
    mussolini:  { name: 'Benito Mussolini', role: 'Il Duce, Prime Minister of Italy 1922–43', hair: 'bald', hc: 'dark', clothes: 'black', brows: 'angry', mouth: 'jut', jaw: .9, hw: 44, chin: 172, age: 1, scene: 'ministry' },
    briand:     { name: 'Aristide Briand', role: 'French Foreign Minister', hair: 'wavy', hc: 'grey', stache: 'walrus', mc: 'dark', clothes: 'suit', brows: 'worried', mouth: 'set', age: 2, eyes: 'heavy', scene: 'palais' },
    matsuoka:   { name: 'Yōsuke Matsuoka', role: 'Japan’s delegate to the League', hair: 'crop', hc: 'black', glasses: 'round', stache: 'clipped', mc: 'black', clothes: 'suit', brows: 'stern', mouth: 'set', iris: 'brown', age: 1, scene: 'palais' },
    hitler:     { name: 'Adolf Hitler', role: 'Führer of Germany, 1933–45', hair: 'sidepart', hc: 'dark', stache: 'toothbrush', mc: 'dark', clothes: 'brown', brows: 'angry', mouth: 'set', hw: 39, age: 1, scene: 'ministry' },
    selassie:   { name: 'Haile Selassie', role: 'Emperor of Abyssinia', skin: 'dark', hair: 'curly', hc: 'black', beard: 'full', mc: 'black', clothes: 'cape', brows: 'worried', mouth: 'set', hw: 37, chin: 172, iris: 'brown', scene: 'palais' },
    laval:      { name: 'Pierre Laval', role: 'Prime Minister of France, 1935–36', hair: 'slick', hc: 'black', stache: 'clipped', mc: 'black', clothes: 'suit', tie: '#e6e0d2', brows: 'raised', mouth: 'smirk', skin: 'mid', iris: 'brown', scene: 'ministry' },
    bauer:      { name: 'Gustav Bauer', role: 'Chancellor of Germany, 1919–20', hair: 'crop', hc: 'dark', stache: 'walrus', mc: 'dark', clothes: 'wing', brows: 'worried', mouth: 'frown', age: 1, scene: 'ministry' },
    wirth:      { name: 'Joseph Wirth', role: 'Chancellor of Germany, 1921–22', hair: 'crop', hc: 'dark', glasses: 'pince', clothes: 'suit', brows: 'calm', mouth: 'set', scene: 'ministry' },
    rathenau:   { name: 'Walther Rathenau', role: 'German Foreign Minister, 1922', hair: 'bald', hc: 'dark', beard: 'trim', stache: 'clipped', mc: 'dark', clothes: 'wing', brows: 'calm', mouth: 'set', hw: 39, iris: 'brown', age: 1, scene: 'ministry' },
    poincare:   { name: 'Raymond Poincaré', role: 'Prime Minister of France, 1922–24', hair: 'receding', hc: 'grey', beard: 'trim', stache: 'clipped', mc: 'grey', clothes: 'wing', brows: 'stern', mouth: 'frown', age: 2, scene: 'ministry' },
    cuno:       { name: 'Wilhelm Cuno', role: 'Chancellor of Germany, 1922–23', hair: 'receding', hc: 'dark', clothes: 'wing', brows: 'worried', mouth: 'frown', age: 1, scene: 'ministry' },
    stresemann: { name: 'Gustav Stresemann', role: 'Chancellor 1923, Foreign Minister 1923–29', hair: 'bald', hc: 'dark', stache: 'clipped', mc: 'dark', clothes: 'wing', brows: 'calm', mouth: 'set', hw: 45, jaw: .85, chin: 172, age: 1, scene: 'palais' },
    kellogg:    { name: 'Frank B. Kellogg', role: 'US Secretary of State', hair: 'wavy', hc: 'white', clothes: 'suit', brows: 'calm', mouth: 'smile', age: 2, scene: 'palais' },
    hugenberg:  { name: 'Alfred Hugenberg', role: 'Nationalist (DNVP) leader and press baron', hair: 'crop', hc: 'white', stache: 'walrus', mc: 'white', glasses: 'pince', clothes: 'wing', brows: 'angry', mouth: 'frown', hw: 43, age: 2, scene: 'ministry' },
    bruning:    { name: 'Heinrich Brüning', role: 'Chancellor of Germany, 1930–32', hair: 'receding', hc: 'dark', glasses: 'round', clothes: 'suit', brows: 'worried', mouth: 'set', hw: 37, chin: 172, scene: 'ministry' },
    papen:      { name: 'Franz von Papen', role: 'Chancellor of Germany, 1932', hair: 'slick', hc: 'grey', stache: 'clipped', mc: 'grey', clothes: 'wing', brows: 'raised', mouth: 'smirk', hw: 37, chin: 172, age: 1, scene: 'ministry' },
    ribbentrop: { name: 'Joachim von Ribbentrop', role: 'German diplomat, Foreign Minister from 1938', hair: 'slick', hc: 'grey', clothes: 'suit', brows: 'raised', mouth: 'smirk', age: 1, scene: 'ministry' },
    franco:     { name: 'General Francisco Franco', role: 'Leader of Spain’s Nationalists', hair: 'crop', hc: 'dark', stache: 'clipped', mc: 'dark', clothes: 'uniform', hat: 'cap', brows: 'stern', mouth: 'set', hw: 43, jaw: .85, iris: 'brown', scene: 'field' },
    schuschnigg:{ name: 'Kurt von Schuschnigg', role: 'Chancellor of Austria, 1934–38', hair: 'slick', hc: 'dark', glasses: 'round', clothes: 'suit', brows: 'worried', mouth: 'set', scene: 'ministry' },
    nchamberlain:{ name: 'Neville Chamberlain', role: 'British Prime Minister, 1937–40', hair: 'slick', hc: 'grey', stache: 'clipped', mc: 'grey', clothes: 'wing', brows: 'heavy', mouth: 'set', hw: 38, chin: 172, age: 2, scene: 'ministry' },
    hacha:      { name: 'Emil Hácha', role: 'President of Czechoslovakia, 1938–39', hair: 'bald', hc: 'grey', clothes: 'suit', brows: 'worried', mouth: 'frown', age: 2, scene: 'noir' },
    stalin:     { name: 'Joseph Stalin', role: 'Dictator of the USSR', hair: 'swept', hc: 'dark', stache: 'walrus', mc: 'dark', clothes: 'tunic', brows: 'stern', mouth: 'set', skin: 'mid', iris: 'brown', age: 1, scene: 'ministry' },
    wilson:     { name: 'Woodrow Wilson', role: 'President of the United States', hair: 'receding', hc: 'grey', glasses: 'pince', clothes: 'wing', brows: 'stern', mouth: 'set', hw: 36, chin: 176, jaw: .6, age: 2, scene: 'palais' },
    orlando:    { name: 'Vittorio Orlando', role: 'Prime Minister of Italy, 1917–19', hair: 'crop', hc: 'white', stache: 'walrus', mc: 'white', clothes: 'wing', brows: 'worried', mouth: 'frown', age: 2, iris: 'brown', scene: 'palais' },
    giolitti:   { name: 'Giovanni Giolitti', role: 'Prime Minister of Italy, 1920–21', hair: 'crop', hc: 'white', stache: 'walrus', mc: 'white', clothes: 'wing', brows: 'stern', mouth: 'set', hw: 40, chin: 174, age: 2, scene: 'ministry' },
    dannunzio:  { name: 'Gabriele D’Annunzio', role: 'Poet, soldier, “Commandant” of Fiume', hair: 'bald', hc: 'dark', beard: 'goatee', stache: 'clipped', mc: 'dark', clothes: 'uniform', brows: 'raised', mouth: 'smirk', hw: 37, iris: 'brown', age: 1, scene: 'field' },
    zog:        { name: 'Ahmed Zogu (King Zog)', role: 'Ruler of Albania', hair: 'slick', hc: 'brown', stache: 'pencil', mc: 'brown', clothes: 'uniform', brows: 'calm', mouth: 'set', hw: 37, chin: 172, iris: 'brown', scene: 'ministry' },
    macdonald:  { name: 'Ramsay MacDonald', role: 'British Prime Minister', hair: 'wavy', hc: 'grey', stache: 'walrus', mc: 'grey', clothes: 'wing', brows: 'worried', mouth: 'set', age: 2, scene: 'palais' },
    ciano:      { name: 'Count Galeazzo Ciano', role: 'Italian Foreign Minister, 1936–43', hair: 'slick', hc: 'black', clothes: 'black', brows: 'raised', mouth: 'smirk', hw: 42, iris: 'brown', scene: 'ministry' },
    you:        { name: 'You', role: 'The decision-maker', silhouette: true, scene: 'noir' }
  };

  let uid = 0;
  const f = n => +n.toFixed(1);

  // ---------- geometry ----------
  function headPath(hw, chin, jaw) {
    const L = 100 - hw, R = 100 + hw, t = 40;
    return `M100,${t} C${f(100 + hw * .62)},${t} ${R},${t + 18} ${R},${t + 46} ` +
      `C${R},${t + 60} ${R - 1},${t + 72} ${R - 3},${t + 82} ` +
      `C${R - 6},${t + 104} ${f(100 + hw * jaw)},${chin - 6} ${f(100 + hw * .3)},${chin - 1} ` +
      `Q100,${chin + 3} ${f(100 - hw * .3)},${chin - 1} ` +
      `C${f(100 - hw * jaw)},${chin - 6} ${L + 6},${t + 104} ${L + 3},${t + 82} ` +
      `C${L + 1},${t + 72} ${L},${t + 60} ${L},${t + 46} C${L},${t + 18} ${f(100 - hw * .62)},${t} 100,${t} Z`;
  }

  // ---------- backdrops ----------
  function backdrop(p, id) {
    const s = SCENE[p.scene] || SCENE.ministry;
    let out = `<rect width="200" height="240" fill="${s.sky}"/>`;
    if (p.scene === 'palais') {
      out += `<rect x="-5" y="34" width="210" height="190" fill="${s.stone}"/>
        <rect x="-5" y="34" width="210" height="10" fill="${s.dark}" opacity=".5"/>
        <rect x="-5" y="44" width="210" height="3" fill="${INK}" opacity=".25"/>`;
      for (let x = 2; x < 200; x += 26) {
        out += `<rect x="${x}" y="48" width="12" height="160" fill="#e6dcc4"/><rect x="${x + 8}" y="48" width="4" height="160" fill="${s.dark}" opacity=".45"/>
          <rect x="${x + 13}" y="62" width="11" height="40" fill="#3d4651" opacity=".55"/><rect x="${x + 13}" y="118" width="11" height="40" fill="#3d4651" opacity=".55"/>`;
      }
      const flags = ['#8f3b33', '#3e5a7a', '#b49a4c', '#5b6e45', '#8f3b33'];
      flags.forEach((c, i) => {
        const x = 10 + i * 46;
        out += `<line x1="${x}" y1="6" x2="${x}" y2="70" stroke="${INK}" stroke-width="1"/>
          <path d="M${x},8 q8,-3 16,1 q-2,7 0,13 q-8,-4 -16,-1 Z" fill="${c}" stroke="${INK}" stroke-width=".7" opacity=".85"/>`;
      });
    } else if (p.scene === 'ministry') {
      out += `<rect x="-5" y="0" width="210" height="240" fill="${s.stone}"/>
        <rect x="20" y="14" width="66" height="150" fill="#b9b19c" stroke="${INK}" stroke-width="1.2"/>
        <path d="M53,14 L53,164 M20,64 L86,64 M20,114 L86,114" stroke="${INK}" stroke-width="1.6"/>
        <path d="M6,0 Q14,90 4,240 L-5,240 L-5,0 Z M100,0 Q86,80 96,240 L120,240 L120,0 Z" fill="#5c2f28" opacity=".8"/>
        <path d="M100,0 Q86,80 96,240" stroke="${INK}" stroke-width="1" fill="none"/>
        <rect x="140" y="0" width="70" height="240" fill="${s.dark}" opacity=".55"/>`;
    } else if (p.scene === 'field') {
      out += `<path d="M-5,40 Q40,20 80,36 T160,30 T210,38 L210,0 L-5,0 Z" fill="#c4c0ae" opacity=".7"/>
        <path d="M-5,170 Q30,150 70,160 Q120,140 160,158 Q190,150 210,160 L210,240 L-5,240 Z" fill="${s.stone}"/>
        <path d="M150,60 q-10,-20 6,-30 q16,-8 22,8 q12,-6 18,8 q6,16 -10,20 Z" fill="#8b877a" opacity=".6"/>`;
    } else {
      out += `<rect x="-5" y="0" width="210" height="240" fill="${s.stone}"/>
        <path d="M-10,-10 L120,-10 L60,260 L-10,260 Z" fill="#000" opacity=".25"/>`;
    }
    // light hatching over the whole backdrop to push it back
    out += `<rect width="200" height="240" fill="url(#${id}hx)" opacity=".35"/>
      <rect width="200" height="240" fill="url(#${id}vg)"/>`;
    return out;
  }

  // ---------- clothing ----------
  function clothes(p, id, hw) {
    const c = CLOTH[p.clothes] || CLOTH.suit;
    const nL = f(100 - hw * .58), nR = f(100 + hw * .58);
    const base = `<path d="M-6,245 L-6,214 C16,198 44,190 ${nL},186 L${nR},186 C156,190 184,198 206,214 L206,245 Z" fill="${c}" stroke="${INK}" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M150,192 C176,200 196,212 206,222 L206,245 L138,245 Z" fill="url(#${id}hd)" opacity=".7"/>`;
    const shirt = '#e7e0d0';
    const tie = p.tie || '#6b2a22';
    switch (p.clothes) {
      case 'suit':
        return base + `<path d="M78,188 L100,232 L122,188 Z" fill="${shirt}" stroke="${INK}" stroke-width="1.4"/>
          <path d="M80,186 L92,206 L100,194 Z M120,186 L108,206 L100,194 Z" fill="#f2ece0" stroke="${INK}" stroke-width="1.3"/>
          <path d="M96,196 L104,196 L102.5,205 L97.5,205 Z" fill="${tie}" stroke="${INK}" stroke-width="1.2"/>
          <path d="M97.5,205 L102.5,205 L106,240 L94,240 Z" fill="${tie}" stroke="${INK}" stroke-width="1.2"/>
          <path d="M100,205 L101,240" stroke="${INK}" stroke-width=".6" opacity=".5"/>
          <path d="M68,190 L91,245 L86,214 L74,206 L82,196 Z" fill="${c}" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M132,190 L109,245 L114,214 L126,206 L118,196 Z" fill="${c}" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M132,190 L109,245 L114,214 L126,206 L118,196 Z" fill="url(#${id}hd)" opacity=".5"/>
          <path d="M44,214 L52,214" stroke="#e7e0d0" stroke-width="2" opacity=".7"/>`;
      case 'wing':
        return base + `<path d="M76,188 L100,236 L124,188 Z" fill="${shirt}" stroke="${INK}" stroke-width="1.4"/>
          <path d="M86,186 L97,197 L90,201 Z M114,186 L103,197 L110,201 Z" fill="#fbf7ee" stroke="${INK}" stroke-width="1.2"/>
          <path d="M95,197 L105,197 L103.5,205 L96.5,205 Z" fill="${tie}" stroke="${INK}" stroke-width="1.1"/>
          <path d="M96.5,205 L103.5,205 L105,236 L95,236 Z" fill="${tie}" stroke="${INK}" stroke-width="1.1"/>
          <path d="M84,206 L100,230 L116,206 L116,245 L84,245 Z" fill="#4a4740" stroke="${INK}" stroke-width="1.2"/>
          <circle cx="100" cy="232" r="1.2" fill="#c9b27a"/><circle cx="100" cy="241" r="1.2" fill="#c9b27a"/>
          <path d="M66,190 L88,245 L84,212 L72,204 L80,195 Z M134,190 L112,245 L116,212 L128,204 L120,195 Z" fill="${c}" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/>`;
      case 'black':
        return base + `<path d="M80,186 L93,206 L100,194 Z M120,186 L107,206 L100,194 Z" fill="#2a2826" stroke="${INK}" stroke-width="1.3"/>
          <path d="M96,196 L104,196 L102.5,205 L97.5,205 Z M97.5,205 L102.5,205 L105,240 L95,240 Z" fill="#0e0d0c" stroke="#3a3632" stroke-width="1"/>
          <path d="M60,200 Q70,230 66,245 M140,200 Q130,230 134,245" stroke="#3a3632" stroke-width="1.2" fill="none"/>
          <rect x="128" y="214" width="16" height="12" fill="none" stroke="#3a3632" stroke-width="1"/>`;
      case 'brown':
        return base + `<path d="M80,186 L93,206 L100,194 Z M120,186 L107,206 L100,194 Z" fill="#7b6545" stroke="${INK}" stroke-width="1.3"/>
          <path d="M96,196 L104,196 L102.5,205 L97.5,205 Z M97.5,205 L102.5,205 L105,240 L95,240 Z" fill="#3b2f22" stroke="${INK}" stroke-width="1"/>
          <path d="M58,200 L58,245 M142,200 L142,245" stroke="${INK}" stroke-width="1" opacity=".5"/>
          <rect x="62" y="212" width="18" height="13" fill="none" stroke="${INK}" stroke-width="1" opacity=".7"/>
          <path d="M2,224 Q16,212 34,208 L38,224 Q20,228 6,238 Z" fill="#8a2a22" stroke="${INK}" stroke-width="1.4"/>`;
      case 'uniform':
        return base + `<path d="M${nL - 2},180 L${nR + 2},180 L${nR + 4},198 L${nL - 4},198 Z" fill="${c}" stroke="${INK}" stroke-width="1.5"/>
          <path d="M${nL},186 L${nL + 12},186 L${nL + 12},196 L${nL},196 Z M${nR},186 L${nR - 12},186 L${nR - 12},196 L${nR},196 Z" fill="#7a2a24" stroke="${INK}" stroke-width="1"/>
          <path d="M100,198 L100,245" stroke="${INK}" stroke-width="1.4"/>
          <circle cx="104" cy="212" r="1.8" fill="#b39a5c" stroke="${INK}" stroke-width=".6"/><circle cx="104" cy="228" r="1.8" fill="#b39a5c" stroke="${INK}" stroke-width=".6"/>
          <path d="M22,204 L54,196 L56,203 L24,212 Z M178,204 L146,196 L144,203 L176,212 Z" fill="#a08a52" stroke="${INK}" stroke-width="1"/>
          <path d="M60,196 L134,245" stroke="#3a3326" stroke-width="5"/><path d="M60,196 L134,245" stroke="${INK}" stroke-width=".7"/>
          <rect x="60" y="214" width="20" height="14" fill="none" stroke="${INK}" stroke-width="1" opacity=".6"/>`;
      case 'tunic':
        return base + `<path d="M${nL - 2},178 L${nR + 2},178 L${nR + 3},196 L${nL - 3},196 Z" fill="${c}" stroke="${INK}" stroke-width="1.5"/>
          <path d="M100,196 L100,245" stroke="${INK}" stroke-width="1.3"/>
          <circle cx="103" cy="208" r="1.6" fill="#8d8669"/><circle cx="103" cy="222" r="1.6" fill="#8d8669"/><circle cx="103" cy="236" r="1.6" fill="#8d8669"/>
          <path d="M62,212 L84,212 L84,226 L62,226 Z M116,212 L138,212 L138,226 L116,226 Z" fill="none" stroke="${INK}" stroke-width="1"/>`;
      case 'cape':
        return `<path d="M-10,245 L-10,210 C18,190 50,184 ${nL},182 L${nR},182 C150,184 182,190 210,210 L210,245 Z" fill="${CLOTH.cape}" stroke="${INK}" stroke-width="1.8"/>
          <path d="M${nL},184 Q100,206 ${nR},184" fill="none" stroke="#a88b4a" stroke-width="2.5"/>
          <path d="M84,188 L100,228 L116,188 Z" fill="#e7e0d0" stroke="${INK}" stroke-width="1.3"/>
          <path d="M30,206 Q58,196 74,192 M170,206 Q142,196 126,192" stroke="#a88b4a" stroke-width="1.2" fill="none"/>
          <path d="M150,192 C176,200 196,212 206,222 L206,245 L138,245 Z" fill="url(#${id}hd)" opacity=".7"/>`;
    }
    return base;
  }

  // ---------- hair ----------
  function capPath(hw, hy, v, sy, wave) {
    const L = 100 - hw, R = 100 + hw;
    const edge = wave
      ? `C${R - 6},${hy + 6} ${R - 12},${hy - 2} ${f(100 + hw * .5)},${hy} Q${f(100 + hw * .25)},${hy - 7} 100,${hy - 2} Q${f(100 - hw * .25)},${hy - 7} ${f(100 - hw * .5)},${hy} C${L + 12},${hy - 2} ${L + 6},${hy + 6}`
      : `C${R - 5},${hy + 8} ${R - 14},${hy} ${f(100 + hw * .4)},${hy - 2} Q100,${hy - 6} ${f(100 - hw * .4)},${hy - 2} C${L + 14},${hy} ${L + 5},${hy + 8}`;
    return `M${L - 1.5},${sy} C${L - 3},${58 - v} ${f(100 - hw * .72)},${36 - v} 100,${36 - v} C${f(100 + hw * .72)},${36 - v} ${R + 3},${58 - v} ${R + 1.5},${sy} L${R - 3},${sy} ${edge} ${L + 3},${sy} Z`;
  }

  function strands(hw, hy, col, n = 7, v = 0) {
    let d = '';
    for (let i = 0; i < n; i++) {
      const x = 100 - hw * .75 + (i / (n - 1)) * hw * 1.5;
      d += `M${f(x)},${hy - 1} Q${f(x + (x - 100) * .1 - 4)},${f((hy + 36 - v) / 2)} ${f(100 + (x - 100) * .4)},${f(38 - v)} `;
    }
    return `<path d="${d}" stroke="${col}" stroke-width=".8" fill="none" opacity=".75"/>`;
  }

  function hair(p, hw, id) {
    const col = HAIR[p.hc] || HAIR.dark;
    const hi = p.hc === 'black' || p.hc === 'dark' ? '#6b5d52' : p.hc === 'brown' ? '#8b6e57' : '#efebe3';
    const L = 100 - hw, R = 100 + hw;
    const s = `stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"`;
    switch (p.hair) {
      case 'bald':
        return `<path d="M${L - 1.5},106 C${L - 3},90 ${L - 1},76 ${L + 4},68 C${L + 6},80 ${L + 7},94 ${L + 6},108 Z" fill="${col}" ${s}/>
          <path d="M${R + 1.5},106 C${R + 3},90 ${R + 1},76 ${R - 4},68 C${R - 6},80 ${R - 7},94 ${R - 6},108 Z" fill="${col}" ${s}/>
          <path d="M${L + 1},84 l3,-8 M${L + 2},96 l3,-9 M${R - 1},84 l-3,-8 M${R - 2},96 l-3,-9" stroke="${hi}" stroke-width=".7"/>`;
      case 'receding':
        return `<path d="M${L - 1.5},106 C${L - 4},80 ${L},58 ${L + 14},50 C${L + 12},64 ${L + 9},84 ${L + 7},108 Z" fill="${col}" ${s}/>
          <path d="M${R + 1.5},106 C${R + 4},80 ${R},58 ${R - 14},50 C${R - 12},64 ${R - 9},84 ${R - 7},108 Z" fill="${col}" ${s}/>
          <path d="M${f(100 - hw * .55)},44 Q100,33 ${f(100 + hw * .55)},44 Q${f(100 + hw * .2)},52 100,50 Q${f(100 - hw * .2)},52 ${f(100 - hw * .55)},44 Z" fill="${col}" ${s}/>
          <path d="M${L + 3},70 q2,12 3,26 M${R - 3},70 q-2,12 -3,26" stroke="${hi}" stroke-width=".7" fill="none"/>`;
      case 'sidepart':
        return `<path d="${capPath(hw, 66, 2, 100)}" fill="${col}" ${s}/>
          <path d="M${f(100 + hw * .3)},42 C${f(100 - hw * .1)},48 ${L + 10},62 ${L + 6},88 C${L + 14},74 ${f(100 - hw * .3)},64 ${f(100 + hw * .05)},60 Z" fill="${col}" ${s}/>
          <path d="M${f(100 + hw * .3)},42 L${f(100 + hw * .45)},56" stroke="${hi}" stroke-width=".9"/>
          ${strands(hw * .9, 64, hi, 6, 2)}`;
      case 'slick':
        return `<path d="${capPath(hw, 60, 3, 98)}" fill="${col}" ${s}/>${strands(hw, 58, hi, 9, 3)}`;
      case 'crop':
        return `<path d="${capPath(hw, 58, 1, 96)}" fill="${col}" ${s}/>
          <path d="M${L + 6},64 l2,-6 M${L + 14},56 l2,-6 M${R - 6},64 l-2,-6 M${R - 14},56 l-2,-6 M96,48 l2,-6 M106,48 l2,-6 M86,50 l2,-6" stroke="${hi}" stroke-width=".8"/>`;
      case 'wavy':
        return `<path d="${capPath(hw + 2, 60, 9, 100, true)}" fill="${col}" ${s}/>${strands(hw, 58, hi, 8, 9)}
          <path d="M${L - 2},84 q-4,-8 0,-16 M${R + 2},84 q4,-8 0,-16" stroke="${INK}" stroke-width="1" fill="none"/>`;
      case 'swept':
        return `<path d="${capPath(hw + 2, 58, 13, 102)}" fill="${col}" ${s}/>${strands(hw, 56, hi, 10, 13)}`;
      case 'curly': {
        let b = `<path d="${capPath(hw + 3, 58, 9, 98)}" fill="${col}" ${s}/>`;
        let d = '';
        let k = 0;
        for (let y = 32; y < 62; y += 4.5) for (let x = 100 - hw - 2; x <= 100 + hw + 2; x += 5) {
          k++;
          const jx = ((k * 37) % 7) / 3.5 - 1, jy = ((k * 53) % 5) / 2.5 - 1;
          if (Math.hypot((x - 100) / (hw + 2), (y - 52) / 22) < 1) d += `M${f(x + jx + (k % 2) * 2.5)},${f(y + jy)} q1.4,-1.6 2.6,0 `;
        }
        return b + `<path d="${d}" stroke="${hi}" stroke-width=".6" fill="none" opacity=".55"/>`;
      }
    }
    return '';
  }

  // ---------- face ----------
  function eyes(p, sk) {
    const ey = 104;
    const iris = p.iris === 'brown' ? '#3e2b20' : '#4b5866';
    const heavy = p.eyes === 'heavy';
    const one = (cx, side) => `
      <path d="M${cx - 9},${ey} Q${cx - 1},${ey - (heavy ? 4 : 5.5)} ${cx + 9},${ey - .5} Q${cx},${ey + 3.6} ${cx - 9},${ey} Z" fill="#ece3d2"/>
      <circle cx="${cx + side * .4}" cy="${ey - .3}" r="3.1" fill="${iris}"/><circle cx="${cx + side * .4}" cy="${ey - .3}" r="1.3" fill="${INK}"/>
      <circle cx="${cx - .8}" cy="${ey - 1.4}" r=".7" fill="#fff" opacity=".8"/>
      <path d="M${cx - 9},${ey} Q${cx - 1},${ey - (heavy ? 4 : 5.5)} ${cx + 9},${ey - .5}" fill="none" stroke="${INK}" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M${cx - 7},${ey + 2} Q${cx},${ey + 3.8} ${cx + 7},${ey + 1.4}" fill="none" stroke="${INK}" stroke-width=".7" opacity=".7"/>
      <path d="M${cx - 8},${ey - 4.5} Q${cx},${ey - (heavy ? 6.5 : 9)} ${cx + 8},${ey - 4.5}" fill="none" stroke="${sk.deep}" stroke-width=".9"/>
      ${(p.age || 0) > 0 ? `<path d="M${cx - 6},${ey + 5.5} Q${cx},${ey + 8} ${cx + 6},${ey + 5}" fill="none" stroke="${sk.deep}" stroke-width=".7"/>` : ''}
      ${(p.age || 0) > 1 ? `<path d="M${cx + side * 10},${ey - 1} l${side * 4},-2 M${cx + side * 10},${ey + 2} l${side * 4},1" stroke="${sk.deep}" stroke-width=".6"/>` : ''}`;
    return one(84, -1) + one(116, 1);
  }

  function brows(p) {
    const col = HAIR[p.mc || p.hc] || HAIR.dark;
    const c = p.hc === 'white' || p.hc === 'grey' ? '#6f6a63' : col;
    const t = p.brows === 'heavy' ? 4.2 : 2.8;
    let l, r;
    switch (p.brows) {
      case 'angry': l = [74, 92, 90, 99]; r = [126, 92, 110, 99]; break;
      case 'worried': l = [74, 97, 92, 92]; r = [126, 97, 108, 92]; break;
      case 'raised': l = [74, 94, 92, 93]; r = [126, 92, 108, 94]; break;
      case 'stern': l = [74, 94, 92, 96]; r = [126, 94, 108, 96]; break;
      default: l = [74, 95, 92, 95]; r = [126, 95, 108, 95];
    }
    const b = ([x1, y1, x2, y2]) => {
      const mx = (x1 + x2) / 2, my = Math.min(y1, y2) - 3;
      return `<path d="M${x1},${y1} Q${mx},${my} ${x2},${y2} Q${mx},${my + t} ${x1},${y1 + 1} Z" fill="${c}" stroke="${INK}" stroke-width=".8" stroke-linejoin="round"/>`;
    };
    return b(l) + b(r);
  }

  function nose(sk) {
    return `<path d="M103,106 C104,114 107,121 109,128 Q106,132 101,131 Z" fill="${sk.shade}"/>
      <path d="M97,107 C96,115 94,121 92,127" fill="none" stroke="${INK}" stroke-width=".8" opacity=".55"/>
      <path d="M91,127 Q88,131 93,132.5 M109,127 Q112,131 107,132.5" fill="none" stroke="${INK}" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M95,131.5 Q97,130 99,132 M101,132 Q103,130 105,131.5" fill="none" stroke="${INK}" stroke-width="1.3" stroke-linecap="round"/>`;
  }

  function mouth(p, sk) {
    const y = 143;
    const corners = { frown: 2.5, smile: -2.5, smirk: 0, jut: 1.5, set: .8 }[p.mouth] ?? .8;
    const right = p.mouth === 'smirk' ? -2.5 : corners;
    return `<path d="M89,${y + corners} Q94,${y - 1.5} 100,${y - .5} Q106,${y - 1.5} 111,${y + right}" fill="none" stroke="${INK}" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M93,${y + 1.5} Q100,${y + 6} 107,${y + 1.5} Q100,${y + 3} 93,${y + 1.5} Z" fill="${sk.lip}" opacity=".75"/>
      <path d="M94,${y + 6.5} Q100,${y + 8.5} 106,${y + 6.5}" fill="none" stroke="${INK}" stroke-width=".9" opacity=".7"/>
      ${p.mouth === 'jut' ? `<path d="M90,${y + 12} Q100,${y + 15} 110,${y + 12}" fill="none" stroke="${INK}" stroke-width="1" opacity=".7"/>` : ''}
      <path d="M98,133 L98,${y - 3} M102,133 L102,${y - 3}" stroke="${sk.shade}" stroke-width=".9"/>`;
  }

  function lines(p, sk, hw) {
    const a = p.age || 0;
    let d = `M91,128 Q86,136 88,${145 + a}`;
    d += ` M109,128 Q114,136 112,${145 + a}`;
    let out = `<path d="${d}" fill="none" stroke="${sk.deep}" stroke-width="${.8 + a * .2}"/>`;
    if (a > 0) out += `<path d="M86,70 Q100,67 114,70 M88,76 Q100,73 112,76" fill="none" stroke="${sk.deep}" stroke-width=".6" opacity=".7"/>`;
    if (a > 1) out += `<path d="M${100 - hw + 8},120 Q${100 - hw + 12},132 ${100 - hw + 16},140 M${100 + hw - 8},120 Q${100 + hw - 12},132 ${100 + hw - 16},140" fill="none" stroke="${sk.deep}" stroke-width=".6"/>`;
    return out;
  }

  function stache(p) {
    const col = HAIR[p.mc] || HAIR.dark;
    const s = `fill="${col}" stroke="${INK}" stroke-width="1.1" stroke-linejoin="round"`;
    const tex = (d) => `<path d="${d}" stroke="${p.mc === 'white' || p.mc === 'grey' ? '#efe9de' : '#5a4c40'}" stroke-width=".6" fill="none" opacity=".8"/>`;
    switch (p.stache) {
      case 'toothbrush': return `<path d="M94,133.5 L106,133.5 L105.5,141 L94.5,141 Z" fill="${col}" stroke="${INK}" stroke-width="1"/>` + tex('M96,135 l0,5 M99,135 l0,5 M102,135 l0,5 M104.5,135 l0,5');
      case 'clipped': return `<path d="M88,141 Q92,133 100,134 Q108,133 112,141 Q106,138.5 100,139.5 Q94,138.5 88,141 Z" ${s}/>` + tex('M92,138 l2,-3 M96,137.5 l1,-3 M104,137.5 l-1,-3 M108,138 l-2,-3');
      case 'pencil': return `<path d="M89,139.5 Q100,135 111,139.5" stroke="${col}" stroke-width="1.8" fill="none"/>`;
      case 'walrus': return `<path d="M82,146 Q84,132 100,132.5 Q116,132 118,146 Q113,143 108,141 Q100,139 92,141 Q87,143 82,146 Z" ${s}/>` + tex('M87,142 l3,-6 M92,140 l2,-6 M97,139 l1,-6 M103,139 l-1,-6 M108,140 l-2,-6 M113,142 l-3,-6');
    }
    return '';
  }

  function beard(p, hw, chin) {
    const col = HAIR[p.mc] || HAIR.dark;
    const s = `fill="${col}" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"`;
    const L = 100 - hw, R = 100 + hw;
    const hi = p.mc === 'white' || p.mc === 'grey' ? '#efe9de' : '#5a4c40';
    switch (p.beard) {
      case 'full': return `<path d="M${L + 2},112 C${L + 2},140 ${L + 12},${chin + 10} 100,${chin + 16} C${R - 12},${chin + 10} ${R - 2},140 ${R - 2},112 C${R - 8},132 ${R - 14},140 110,148 Q100,152 90,148 C${L + 14},140 ${L + 8},132 ${L + 2},112 Z" ${s}/>
        <path d="M86,140 Q92,133 100,134 Q108,133 114,140 Q107,138 100,139 Q93,138 86,140 Z" ${s}/>
        <path d="M${L + 8},128 q4,14 10,24 M${R - 8},128 q-4,14 -10,24 M96,156 l0,10 M104,156 l0,10 M90,154 l-2,8 M110,154 l2,8" stroke="${hi}" stroke-width=".6" fill="none"/>`;
      case 'trim': return `<path d="M${L + 8},128 C${L + 12},${chin + 2} 90,${chin + 8} 100,${chin + 9} C110,${chin + 8} ${R - 12},${chin + 2} ${R - 8},128 C${R - 12},146 112,151 100,152 C88,151 ${L + 12},146 ${L + 8},128 Z" ${s}/>
        <path d="M96,156 l0,8 M104,156 l0,8 M${L + 12},134 q4,10 8,16 M${R - 12},134 q-4,10 -8,16" stroke="${hi}" stroke-width=".6" fill="none"/>`;
      case 'goatee': return `<path d="M93,151 Q100,${chin + 16} 107,151 Q100,154 93,151 Z" ${s}/>`;
    }
    return '';
  }

  function glasses(p) {
    const rim = '#3a2a1c';
    switch (p.glasses) {
      case 'round': return `<circle cx="84" cy="104" r="10.5" fill="rgba(220,230,235,.12)" stroke="${rim}" stroke-width="2"/>
        <circle cx="116" cy="104" r="10.5" fill="rgba(220,230,235,.12)" stroke="${rim}" stroke-width="2"/>
        <path d="M94.5,103 Q100,99.5 105.5,103 M73.5,102 L62,99 M126.5,102 L138,99" stroke="${rim}" stroke-width="1.6" fill="none"/>
        <path d="M78,98 l4,-2 M110,98 l4,-2" stroke="#fff" stroke-width="1" opacity=".7"/>`;
      case 'pince': return `<ellipse cx="84" cy="104" rx="9.5" ry="7" fill="rgba(220,230,235,.1)" stroke="${INK}" stroke-width="1.2"/>
        <ellipse cx="116" cy="104" rx="9.5" ry="7" fill="rgba(220,230,235,.1)" stroke="${INK}" stroke-width="1.2"/>
        <path d="M93.5,103 Q100,100 106.5,103" stroke="${INK}" stroke-width="1.2" fill="none"/>
        <path d="M74.5,106 Q66,150 76,200" stroke="${INK}" stroke-width=".6" fill="none"/>`;
      case 'monocle': return `<circle cx="116" cy="104" r="11" fill="rgba(220,230,235,.14)" stroke="${INK}" stroke-width="1.6"/>
        <path d="M126,110 Q136,150 128,200" stroke="${INK}" stroke-width=".6" fill="none"/>
        <path d="M110,98 l4,-2" stroke="#fff" stroke-width="1" opacity=".7"/>`;
    }
    return '';
  }

  function hat(p, hw) {
    if (p.hat !== 'cap') return '';
    const L = 100 - hw, R = 100 + hw;
    return `<path d="M${L - 12},60 C${L - 10},30 ${f(100 - hw * .6)},18 100,18 C${f(100 + hw * .6)},18 ${R + 10},30 ${R + 12},60 Z" fill="${CLOTH.uniform}" stroke="${INK}" stroke-width="1.6"/>
      <path d="M${L - 4},60 L${R + 4},60 L${R + 2},70 L${L - 2},70 Z" fill="#2c2a22" stroke="${INK}" stroke-width="1.4"/>
      <path d="M${L + 2},69 Q100,90 ${R - 2},69 Q100,78 ${L + 2},69 Z" fill="#141210" stroke="${INK}" stroke-width="1.2"/>
      <circle cx="100" cy="46" r="5" fill="#a08a52" stroke="${INK}" stroke-width="1"/>
      <path d="M${R - 10},28 C${R + 4},36 ${R + 8},48 ${R + 10},58 L${R - 2},58 Z" fill="url(#hdcap)" opacity=".4"/>`;
  }

  function silhouette() {
    return `<path d="M-8,245 L-8,212 C18,192 52,184 76,180 L124,180 C148,184 182,192 208,212 L208,245 Z" fill="#2c2722" stroke="#000" stroke-width="1.5"/>
      <path d="M76,180 L100,236 L88,245 L58,245 L60,196 Z M124,180 L100,236 L112,245 L142,245 L140,196 Z" fill="#3a332b" stroke="#000" stroke-width="1.4"/>
      <path d="M86,182 L100,214 L114,182 Z" fill="#141210"/>
      <path d="M66,114 C66,80 80,62 100,62 C120,62 134,80 134,114 C134,146 120,170 100,174 C80,170 66,146 66,114 Z" fill="#14110f"/>
      <path d="M118,120 C126,134 124,156 104,172 C120,166 132,148 132,124 Z" fill="#6a5440" opacity=".55"/>
      <path d="M36,78 Q100,60 164,78 Q156,88 100,86 Q44,88 36,78 Z" fill="#1d1916" stroke="#000" stroke-width="1.2"/>
      <path d="M62,80 C62,46 78,30 100,30 C122,30 138,46 138,80 Z" fill="#26211c" stroke="#000" stroke-width="1.2"/>
      <path d="M64,70 L136,70 L137,79 L63,79 Z" fill="#4a3a28"/>
      <path d="M100,32 Q96,48 100,64" stroke="#000" stroke-width="1" fill="none"/>
      <circle cx="122" cy="150" r="2" fill="#d6643a"/>
      <path d="M123,148 q7,-14 1,-28 q-5,-10 4,-22" stroke="#cfc7b8" stroke-width="1.4" fill="none" opacity=".45"/>`;
  }

  function render(key, opts = {}) {
    const p = PEOPLE[key] || PEOPLE.you;
    const id = 'pt' + (++uid);
    const hw = p.hw || 40, chin = p.chin || 168, jaw = p.jaw ?? .72;
    const sk = SKIN[p.skin || 'light'];
    const head = headPath(hw, chin, jaw);
    const defs = `<defs>
      <pattern id="${id}hd" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(40)"><line x1="0" y1="0" x2="0" y2="3" stroke="${INK}" stroke-width=".9"/></pattern>
      <pattern id="${id}hx" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)"><line x1="0" y1="0" x2="0" y2="4" stroke="${INK}" stroke-width=".35"/></pattern>
      <pattern id="${id}hc" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(-50)"><line x1="0" y1="0" x2="0" y2="3" stroke="${INK}" stroke-width=".6"/></pattern>
      <radialGradient id="${id}vg" cx="50%" cy="42%" r="72%"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".45"/></radialGradient>
      <clipPath id="${id}h"><path d="${head}"/></clipPath>
    </defs>`;
    let body;
    if (p.silhouette) {
      body = silhouette();
    } else {
      const nL = f(100 - hw * .5), nR = f(100 + hw * .5);
      const neck = `<path d="M${nL},${chin - 30} L${f(nL - 3)},190 Q100,200 ${f(nR + 3)},190 L${nR},${chin - 30} Z" fill="${sk.base}" stroke="${INK}" stroke-width="1.5"/>
        <path d="M${f(nL - 2)},${chin - 6} Q100,${chin + 16} ${f(nR + 2)},${chin - 6} L${f(nR + 3)},190 Q100,200 ${f(nL - 3)},190 Z" fill="${sk.shade}"/>
        <path d="M${f(nL - 2)},${chin - 2} Q100,${chin + 14} ${f(nR + 2)},${chin - 2} L${f(nR + 3)},190 L${f(100 + hw * .1)},190 Z" fill="url(#${id}hd)" opacity=".55"/>
        <path d="M92,${chin + 8} L94,186 M108,${chin + 8} L106,186" stroke="${sk.deep}" stroke-width=".7"/>`;
      const ear = (x, s) => `<path d="M${x},96 C${x + s * 9},92 ${x + s * 10},104 ${x + s * 8},114 C${x + s * 7},122 ${x + s * 3},126 ${x - s * 1},124" fill="${s > 0 ? sk.shade : sk.base}" stroke="${INK}" stroke-width="1.4"/>
        <path d="M${x + s * 2},100 C${x + s * 6},100 ${x + s * 6},110 ${x + s * 3},116" fill="none" stroke="${sk.deep}" stroke-width=".8"/>`;
      const ears = ear(100 - hw + 1, -1) + ear(100 + hw - 1, 1);
      const face = `<path d="${head}" fill="${sk.base}"/>
        <g clip-path="url(#${id}h)">
          <path d="M${f(100 + hw * .42)},30 C${f(100 + hw * .62)},70 ${f(100 + hw * .5)},100 ${f(100 + hw * .62)},118 C${f(100 + hw * .5)},138 ${f(100 + hw * .32)},158 100,${chin + 4} L${100 + hw + 10},${chin + 10} L${100 + hw + 10},30 Z" fill="${sk.shade}"/>
          <path d="M${f(100 + hw * .7)},40 C${f(100 + hw * .82)},80 ${f(100 + hw * .74)},110 ${f(100 + hw * .78)},124 C${f(100 + hw * .6)},150 ${f(100 + hw * .4)},162 ${f(100 + hw * .1)},${chin + 4} L${100 + hw + 10},${chin + 10} L${100 + hw + 10},30 Z" fill="url(#${id}hd)" opacity=".6"/>
          <path d="M70,98 Q84,92 96,98 L96,103 Q84,98 70,103 Z M104,98 Q116,92 130,98 L130,103 Q116,98 104,103 Z" fill="${sk.shade}" opacity=".8"/>
          <path d="M${100 - hw},${chin - 18} Q100,${chin + 6} ${100 + hw},${chin - 18} L${100 + hw},${chin + 10} L${100 - hw},${chin + 10} Z" fill="${sk.shade}" opacity=".45"/>
          <path d="M${f(100 - hw * .78)},116 Q${f(100 - hw * .7)},124 ${f(100 - hw * .6)},130" stroke="${sk.deep}" stroke-width=".7" fill="none"/>
          <path d="M${f(100 - hw * .2)},${chin - 4} Q100,${chin - 9} ${f(100 + hw * .2)},${chin - 4}" stroke="${sk.deep}" stroke-width=".7" fill="none"/>
        </g>
        <path d="${head}" fill="none" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
        ${p.hair === 'bald' ? `<path d="M${f(100 - hw * .55)},58 Q${f(100 - hw * .3)},46 ${f(100 - hw * .02)},45" stroke="#f3e6d2" stroke-width="2.4" fill="none" opacity=".55" stroke-linecap="round"/>
          <g clip-path="url(#${id}h)"><path d="M${f(100 + hw * .2)},34 C${f(100 + hw * .6)},44 ${100 + hw},60 ${100 + hw},80 L${100 + hw + 6},80 L${100 + hw + 6},30 Z" fill="url(#${id}hc)" opacity=".5"/></g>` : ''}`;
      body = backdrop(p, id) + clothes(p, id, hw) + neck + ears + face + lines(p, sk, hw) + hair(p, hw, id) +
        beard(p, hw, chin) + eyes(p, sk) + brows(p) + nose(sk) + mouth(p, sk) + stache(p) + glasses(p) + hat(p, hw).replace('url(#hdcap)', `url(#${id}hd)`);
    }
    if (p.silhouette) body = backdrop(p, id) + `<g transform="translate(100 250) scale(1.1) translate(-100 -250)">${body}</g>`;
    else {
      const bd = backdrop(p, id);
      body = bd + `<g transform="translate(100 250) scale(1.13) translate(-100 -250)">${body.slice(bd.length)}</g>`;
    }
    const title = opts.decorative ? '' : `<title>${p.name}</title>`;
    return `<svg viewBox="0 0 200 240" class="portrait" ${opts.decorative ? 'aria-hidden="true"' : 'role="img"'} preserveAspectRatio="xMidYMid slice">${title}${defs}${body}<rect x="1.5" y="1.5" width="197" height="237" fill="none" stroke="${INK}" stroke-width="3"/></svg>`;
  }

  window.Portraits = { render, PEOPLE };
})();
