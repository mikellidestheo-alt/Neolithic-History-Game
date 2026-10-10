// Comic-book portrait generator: bold ink outlines, halftone shading, sunburst panel.
// Every figure is assembled from a few parameters (head, hair, facial hair, eyewear, clothes).
(function () {
  const INK = '#0b0a09';
  const SKIN = { light: '#ead2b2', mid: '#d6ad86', dark: '#6e4631' };
  const HAIR = { black: '#15120f', dark: '#2e2520', grey: '#8d877f', white: '#e7e2d8', brown: '#4b3527' };
  const CLOTH = {
    suit: '#23201d', wing: '#23201d', black: '#0e0d0c', brown: '#6a5233', uniform: '#4b4d39',
    tunic: '#6a6550', cape: '#191512', grey: '#55585c', navy: '#1e2733'
  };

  const PEOPLE = {
    drummond:   { name: 'Sir Eric Drummond', role: 'Secretary-General of the League, 1920–33', hair: 'receding', hc: 'grey', stache: 'small', mc: 'grey', clothes: 'wing', brows: 'calm', mouth: 'flat', bg: '#c9a54a' },
    avenol:     { name: 'Joseph Avenol', role: 'Secretary-General of the League, 1933–40', hair: 'bald', hc: 'grey', glasses: 'round', clothes: 'wing', brows: 'worried', mouth: 'flat', bg: '#c9a54a' },
    pilsudski:  { name: 'Marshal Józef Piłsudski', role: 'Leader of Poland', hair: 'crop', hc: 'grey', stache: 'walrus', mc: 'grey', brows: 'bushy', clothes: 'uniform', mouth: 'flat', bg: '#7d8a99', jaw: .7 },
    chamberlainA: { name: 'Sir Austen Chamberlain', role: 'British Foreign Secretary, 1924–29', hair: 'slick', hc: 'dark', glasses: 'monocle', clothes: 'wing', brows: 'raised', mouth: 'flat', bg: '#7d8a99', hw: 56, chin: 184 },
    mussolini:  { name: 'Benito Mussolini', role: 'Il Duce, Prime Minister of Italy 1922–43', hair: 'bald', hc: 'dark', clothes: 'black', brows: 'angry', mouth: 'jut', jaw: .95, hw: 68, chin: 186, bg: '#a3261d' },
    briand:     { name: 'Aristide Briand', role: 'French Foreign Minister', hair: 'messy', hc: 'grey', stache: 'walrus', mc: 'dark', clothes: 'suit', brows: 'worried', mouth: 'flat', bg: '#7d8a99', eyes: 'droop' },
    matsuoka:   { name: 'Yōsuke Matsuoka', role: 'Japan’s delegate to the League', hair: 'crop', hc: 'black', glasses: 'round', stache: 'small', mc: 'black', clothes: 'suit', brows: 'stern', mouth: 'flat', bg: '#a3261d' },
    hitler:     { name: 'Adolf Hitler', role: 'Führer of Germany, 1933–45', hair: 'sidepart', hc: 'black', stache: 'toothbrush', mc: 'black', clothes: 'brown', brows: 'angry', mouth: 'frown', bg: '#a3261d', hw: 58 },
    selassie:   { name: 'Haile Selassie', role: 'Emperor of Abyssinia', skin: 'dark', hair: 'curly', hc: 'black', beard: 'full', mc: 'black', clothes: 'cape', brows: 'worried', mouth: 'flat', bg: '#c9a54a', hw: 54, chin: 182 },
    laval:      { name: 'Pierre Laval', role: 'Prime Minister of France, 1935–36', hair: 'slick', hc: 'black', stache: 'small', mc: 'black', clothes: 'suit', tie: 'white', brows: 'raised', mouth: 'smirk', bg: '#7d8a99', skin: 'mid' },
    bauer:      { name: 'Gustav Bauer', role: 'Chancellor of Germany, 1919–20', hair: 'crop', hc: 'dark', stache: 'walrus', mc: 'dark', clothes: 'wing', brows: 'worried', mouth: 'frown', bg: '#8d8378' },
    wirth:      { name: 'Joseph Wirth', role: 'Chancellor of Germany, 1921–22', hair: 'crop', hc: 'dark', glasses: 'pince', clothes: 'suit', brows: 'calm', mouth: 'flat', bg: '#8d8378' },
    rathenau:   { name: 'Walther Rathenau', role: 'German Foreign Minister, 1922', hair: 'bald', hc: 'dark', beard: 'trim', mc: 'dark', clothes: 'wing', brows: 'calm', mouth: 'flat', bg: '#8d8378', hw: 56 },
    poincare:   { name: 'Raymond Poincaré', role: 'Prime Minister of France, 1922–24', hair: 'receding', hc: 'grey', beard: 'trim', mc: 'grey', clothes: 'wing', brows: 'stern', mouth: 'frown', bg: '#7d8a99' },
    cuno:       { name: 'Wilhelm Cuno', role: 'Chancellor of Germany, 1922–23', hair: 'receding', hc: 'dark', clothes: 'wing', brows: 'worried', mouth: 'frown', bg: '#8d8378' },
    stresemann: { name: 'Gustav Stresemann', role: 'Chancellor 1923, Foreign Minister 1923–29', hair: 'bald', hc: 'dark', stache: 'small', mc: 'dark', clothes: 'wing', brows: 'calm', mouth: 'smile', hw: 68, jaw: .85, bg: '#c9a54a' },
    kellogg:    { name: 'Frank B. Kellogg', role: 'US Secretary of State', hair: 'messy', hc: 'white', clothes: 'suit', brows: 'calm', mouth: 'smile', bg: '#7d8a99' },
    hugenberg:  { name: 'Alfred Hugenberg', role: 'Nationalist (DNVP) leader and press baron', hair: 'crop', hc: 'white', stache: 'walrus', mc: 'white', glasses: 'pince', clothes: 'wing', brows: 'angry', mouth: 'shout', hw: 64, bg: '#a3261d' },
    bruning:    { name: 'Heinrich Brüning', role: 'Chancellor of Germany, 1930–32', hair: 'receding', hc: 'dark', glasses: 'round', clothes: 'suit', brows: 'worried', mouth: 'flat', hw: 54, chin: 184, bg: '#8d8378' },
    papen:      { name: 'Franz von Papen', role: 'Chancellor of Germany, 1932', hair: 'slick', hc: 'grey', stache: 'small', mc: 'grey', clothes: 'wing', brows: 'raised', mouth: 'smirk', hw: 54, chin: 184, bg: '#8d8378' },
    ribbentrop: { name: 'Joachim von Ribbentrop', role: 'German diplomat, Foreign Minister from 1938', hair: 'slick', hc: 'grey', clothes: 'suit', brows: 'raised', mouth: 'smirk', bg: '#a3261d' },
    franco:     { name: 'General Francisco Franco', role: 'Leader of Spain’s Nationalists', hair: 'crop', hc: 'dark', stache: 'small', mc: 'dark', clothes: 'uniform', hat: 'cap', brows: 'stern', mouth: 'flat', hw: 64, jaw: .85, bg: '#a3261d' },
    schuschnigg:{ name: 'Kurt von Schuschnigg', role: 'Chancellor of Austria, 1934–38', hair: 'slick', hc: 'dark', glasses: 'round', clothes: 'suit', brows: 'worried', mouth: 'flat', bg: '#7d8a99' },
    nchamberlain:{ name: 'Neville Chamberlain', role: 'British Prime Minister, 1937–40', hair: 'slick', hc: 'grey', stache: 'small', mc: 'grey', clothes: 'wing', brows: 'bushy', mouth: 'flat', hw: 56, chin: 184, bg: '#7d8a99' },
    hacha:      { name: 'Emil Hácha', role: 'President of Czechoslovakia, 1938–39', hair: 'bald', hc: 'grey', clothes: 'suit', brows: 'worried', mouth: 'frown', bg: '#7d8a99' },
    stalin:     { name: 'Joseph Stalin', role: 'Dictator of the USSR', hair: 'swept', hc: 'dark', stache: 'walrus', mc: 'dark', clothes: 'tunic', brows: 'stern', mouth: 'flat', bg: '#a3261d', skin: 'mid' },
    wilson:     { name: 'Woodrow Wilson', role: 'President of the United States', hair: 'receding', hc: 'grey', glasses: 'pince', clothes: 'wing', brows: 'stern', mouth: 'flat', hw: 52, chin: 188, jaw: .6, bg: '#7d8a99' },
    orlando:    { name: 'Vittorio Orlando', role: 'Prime Minister of Italy, 1917–19', hair: 'crop', hc: 'white', stache: 'walrus', mc: 'white', clothes: 'wing', brows: 'worried', mouth: 'frown', bg: '#5e6b3a' },
    giolitti:   { name: 'Giovanni Giolitti', role: 'Prime Minister of Italy, 1920–21', hair: 'crop', hc: 'white', stache: 'walrus', mc: 'white', clothes: 'wing', brows: 'stern', mouth: 'flat', hw: 58, chin: 186, bg: '#5e6b3a' },
    dannunzio:  { name: 'Gabriele D’Annunzio', role: 'Poet, soldier, “Commandant” of Fiume', hair: 'bald', hc: 'dark', beard: 'goatee', stache: 'small', mc: 'dark', clothes: 'uniform', brows: 'raised', mouth: 'smirk', hw: 54, bg: '#a3261d' },
    zog:        { name: 'Ahmed Zogu (King Zog)', role: 'Ruler of Albania', hair: 'slick', hc: 'brown', stache: 'pencil', mc: 'brown', clothes: 'uniform', brows: 'calm', mouth: 'flat', hw: 54, chin: 184, bg: '#5e6b3a' },
    macdonald:  { name: 'Ramsay MacDonald', role: 'British Prime Minister', hair: 'messy', hc: 'grey', stache: 'walrus', mc: 'grey', clothes: 'wing', brows: 'worried', mouth: 'flat', bg: '#7d8a99' },
    ciano:      { name: 'Count Galeazzo Ciano', role: 'Italian Foreign Minister, 1936–43', hair: 'slick', hc: 'black', clothes: 'black', brows: 'raised', mouth: 'smirk', hw: 60, bg: '#5e6b3a' },
    you:        { name: 'You', role: 'The decision-maker', silhouette: true, bg: '#c9a54a' }
  };

  let uid = 0;

  function headPath(hw, chin, jaw) {
    const L = 100 - hw, R = 100 + hw;
    return `M${L},96 C${L},52 ${100 - hw * 0.6},28 100,28 C${100 + hw * 0.6},28 ${R},52 ${R},96 ` +
      `C${R},132 ${100 + hw * jaw},${chin - 8} 100,${chin} C${100 - hw * jaw},${chin - 8} ${L},132 ${L},96 Z`;
  }

  function clothes(p, id) {
    const c = CLOTH[p.clothes] || CLOTH.suit;
    const shoulders = `<path d="M-5,245 L-5,224 Q18,194 70,190 L130,190 Q182,194 205,224 L205,245 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>`;
    let extra = '';
    switch (p.clothes) {
      case 'suit':
        extra = `<path d="M78,190 L100,232 L122,190 Z" fill="#efe8da" stroke="${INK}" stroke-width="3"/>
          <path d="M95,198 L105,198 L108,236 L100,244 L92,236 Z" fill="${p.tie === 'white' ? '#efe8da' : '#7b1f19'}" stroke="${INK}" stroke-width="2.5"/>
          <path d="M70,190 L92,236 M130,190 L108,236" stroke="${INK}" stroke-width="3"/>`;
        break;
      case 'wing':
        extra = `<path d="M76,188 L100,236 L124,188 Z" fill="#efe8da" stroke="${INK}" stroke-width="3"/>
          <path d="M84,186 L98,200 L88,206 Z M116,186 L102,200 L112,206 Z" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
          <path d="M96,202 L104,202 L106,236 L100,242 L94,236 Z" fill="#2c2a28" stroke="${INK}" stroke-width="2"/>
          <path d="M68,190 L94,240 M132,190 L106,240" stroke="${INK}" stroke-width="3"/>`;
        break;
      case 'black':
        extra = `<path d="M82,190 L100,214 L118,190" fill="none" stroke="#3a3632" stroke-width="3"/>
          <path d="M100,214 L100,245" stroke="#3a3632" stroke-width="2"/>
          <circle cx="100" cy="226" r="2.5" fill="#3a3632"/><circle cx="100" cy="238" r="2.5" fill="#3a3632"/>
          <path d="M20,215 Q40,205 60,206" stroke="#3a3632" stroke-width="2" fill="none"/>`;
        break;
      case 'brown':
        extra = `<path d="M80,190 L100,218 L120,190" fill="#5a4329" stroke="${INK}" stroke-width="3"/>
          <path d="M96,200 L104,200 L106,240 L94,240 Z" fill="#1a1613" stroke="${INK}" stroke-width="2"/>
          <path d="M2,226 Q18,212 34,208 L40,226 Q22,230 6,240 Z" fill="#a3261d" stroke="${INK}" stroke-width="2.5"/>`;
        break;
      case 'uniform':
        extra = `<path d="M76,188 L124,188 L120,204 L80,204 Z" fill="${c}" stroke="${INK}" stroke-width="3"/>
          <rect x="80" y="192" width="10" height="8" fill="#a3261d" stroke="${INK}" stroke-width="1.5"/>
          <rect x="110" y="192" width="10" height="8" fill="#a3261d" stroke="${INK}" stroke-width="1.5"/>
          <path d="M100,204 L100,245" stroke="${INK}" stroke-width="2.5"/>
          <circle cx="106" cy="216" r="2.5" fill="#c9a54a"/><circle cx="106" cy="232" r="2.5" fill="#c9a54a"/>
          <path d="M18,206 L52,198 L54,206 L20,214 Z M182,206 L148,198 L146,206 L180,214 Z" fill="#c9a54a" stroke="${INK}" stroke-width="2"/>`;
        break;
      case 'tunic':
        extra = `<path d="M78,186 L122,186 L120,202 L80,202 Z" fill="${c}" stroke="${INK}" stroke-width="3"/>
          <path d="M100,202 L100,245" stroke="${INK}" stroke-width="2.5"/>
          <path d="M60,214 L84,214 L84,226 L60,226 Z M116,214 L140,214 L140,226 L116,226 Z" fill="none" stroke="${INK}" stroke-width="2"/>`;
        break;
      case 'cape':
        return `<path d="M-10,245 L-10,214 Q20,186 74,184 L126,184 Q180,186 210,214 L210,245 Z" fill="${CLOTH.cape}" stroke="${INK}" stroke-width="4"/>
          <path d="M70,186 Q100,210 130,186" fill="none" stroke="#c9a54a" stroke-width="4"/>
          <path d="M84,190 L100,226 L116,190 Z" fill="#efe8da" stroke="${INK}" stroke-width="2.5"/>
          <path d="M30,208 Q60,200 76,196" stroke="#c9a54a" stroke-width="2" fill="none"/>`;
    }
    return shoulders + extra;
  }

  function hair(p, hw, col) {
    const L = 100 - hw, R = 100 + hw;
    const s = `stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"`;
    switch (p.hair) {
      case 'bald':
        return `<path d="M${L - 1},84 Q${L + 2},70 ${L + 8},66 L${L + 6},96 Z M${R + 1},84 Q${R - 2},70 ${R - 8},66 L${R - 6},96 Z" fill="${col}" ${s}/>`;
      case 'receding':
        return `<path d="M${L - 2},96 Q${L - 4},58 ${L + 16},44 Q${L + 18},62 ${L + 8},98 Z M${R + 2},96 Q${R + 4},58 ${R - 16},44 Q${R - 18},62 ${R - 8},98 Z" fill="${col}" ${s}/>
          <path d="M${100 - hw * .45},34 Q100,26 ${100 + hw * .45},34 Q100,32 ${100 - hw * .45},34 Z" fill="${col}" ${s}/>`;
      case 'sidepart':
        return `<path d="M${L - 2},98 Q${L - 6},40 100,24 Q${R + 6},40 ${R + 2},98 Q${R - 6},70 ${R - 14},60 Q100,48 ${L + 14},60 Q${L + 4},70 ${L - 2},98 Z" fill="${col}" ${s}/>
          <path d="M${100 + hw * .35},40 Q${100 - hw * .2},46 ${L + 8},86 Q${L + 18},62 ${100 + hw * .1},54 Z" fill="${col}" ${s}/>`;
      case 'slick':
        return `<path d="M${L - 2},94 Q${L - 6},34 100,22 Q${R + 6},34 ${R + 2},94 Q${R - 4},64 ${R - 12},58 Q100,50 ${L + 12},58 Q${L + 4},64 ${L - 2},94 Z" fill="${col}" ${s}/>
          <path d="M${L + 20},48 Q100,36 ${R - 16},44 M${L + 24},40 Q100,30 ${R - 22},36" stroke="${col === HAIR.white || col === HAIR.grey ? '#5b5650' : '#4a423c'}" stroke-width="2" fill="none"/>`;
      case 'messy':
        return `<path d="M${L - 4},96 L${L - 10},70 L${L - 2},64 L${L - 6},44 L${L + 10},44 L${L + 10},28 L${100 - 14},32 L100,16 L${100 + 14},30 L${R - 10},24 L${R - 8},42 L${R + 8},44 L${R + 4},64 L${R + 10},70 L${R + 4},96 Q${R - 6},64 ${R - 18},58 Q100,52 ${L + 18},58 Q${L + 6},64 ${L - 4},96 Z" fill="${col}" ${s}/>`;
      case 'curly': {
        let b = '';
        for (let i = 0; i <= 8; i++) {
          const a = Math.PI * (1 + i / 8);
          b += `<circle cx="${100 + Math.cos(a) * (hw + 2)}" cy="${78 + Math.sin(a) * 52}" r="14" fill="${col}" ${s}/>`;
        }
        return b;
      }
      case 'crop':
        return `<path d="M${L - 2},94 L${L - 4},50 Q${L + 4},28 100,26 Q${R - 4},28 ${R + 4},50 L${R + 2},94 Q${R - 4},66 ${R - 10},58 L${L + 10},58 Q${L + 4},66 ${L - 2},94 Z" fill="${col}" ${s}/>`;
      case 'swept':
        return `<path d="M${L - 4},100 Q${L - 12},30 100,14 Q${R + 12},30 ${R + 4},100 Q${R - 2},62 ${R - 12},56 Q100,40 ${L + 12},56 Q${L + 2},62 ${L - 4},100 Z" fill="${col}" ${s}/>
          <path d="M${L + 18},44 Q100,24 ${R - 18},44 M${L + 24},34 Q100,18 ${R - 24},34" stroke="#57504a" stroke-width="2" fill="none"/>`;
    }
    return '';
  }

  function brows(p, ey) {
    const w = p.brows === 'bushy' ? 6 : 4.2;
    const col = HAIR[p.mc || p.hc] || INK;
    const c = p.brows === 'bushy' ? col : INK;
    let l, r;
    switch (p.brows) {
      case 'angry': l = `M70,${ey - 15} L94,${ey - 7}`; r = `M130,${ey - 15} L106,${ey - 7}`; break;
      case 'worried': l = `M70,${ey - 9} Q82,${ey - 14} 93,${ey - 17}`; r = `M130,${ey - 9} Q118,${ey - 14} 107,${ey - 17}`; break;
      case 'raised': l = `M70,${ey - 12} Q82,${ey - 22} 94,${ey - 14}`; r = `M130,${ey - 12} Q118,${ey - 18} 106,${ey - 12}`; break;
      case 'stern': l = `M70,${ey - 13} L94,${ey - 10}`; r = `M130,${ey - 13} L106,${ey - 10}`; break;
      case 'bushy': l = `M68,${ey - 12} Q82,${ey - 20} 95,${ey - 12}`; r = `M132,${ey - 12} Q118,${ey - 20} 105,${ey - 12}`; break;
      default: l = `M71,${ey - 12} Q82,${ey - 17} 94,${ey - 12}`; r = `M129,${ey - 12} Q118,${ey - 17} 106,${ey - 12}`;
    }
    const st = `fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round"`;
    const out = p.brows === 'bushy' ? `<path d="${l}" ${st.replace(c, INK).replace(w, w + 3)}/><path d="${r}" ${st.replace(c, INK).replace(w, w + 3)}/>` : '';
    return out + `<path d="${l}" ${st}/><path d="${r}" ${st}/>`;
  }

  function eyes(p, ey) {
    const droop = p.eyes === 'droop';
    const one = cx => `<path d="M${cx - 9},${ey} Q${cx},${ey - (droop ? 4 : 7)} ${cx + 9},${ey} Q${cx},${ey + 5} ${cx - 9},${ey} Z" fill="#f6f0e4" stroke="${INK}" stroke-width="2.4"/>
      <circle cx="${cx + (p.brows === 'angry' ? 1 : 0)}" cy="${ey - 0.5}" r="3" fill="${INK}"/>` +
      (droop ? `<path d="M${cx - 10},${ey - 3} Q${cx},${ey - 7} ${cx + 10},${ey - 3}" stroke="${INK}" stroke-width="3" fill="none"/>` : '');
    return one(82) + one(118);
  }

  function nose(ey) {
    return `<path d="M101,${ey + 2} Q104,${ey + 18} 108,${ey + 26} Q104,${ey + 31} 97,${ey + 29}" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M90,${ey + 27} Q93,${ey + 30} 96,${ey + 29}" fill="none" stroke="${INK}" stroke-width="2"/>`;
  }

  function mouth(p, my) {
    const st = `fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"`;
    switch (p.mouth) {
      case 'frown': return `<path d="M88,${my + 3} Q100,${my - 5} 112,${my + 3}" ${st}/>`;
      case 'smile': return `<path d="M86,${my - 2} Q100,${my + 8} 114,${my - 2}" ${st}/>`;
      case 'smirk': return `<path d="M88,${my} Q102,${my + 3} 114,${my - 5}" ${st}/>`;
      case 'shout': return `<path d="M88,${my - 3} Q100,${my - 6} 112,${my - 3} Q110,${my + 12} 100,${my + 13} Q90,${my + 12} 88,${my - 3} Z" fill="#2a0e0b" stroke="${INK}" stroke-width="2.6"/>
        <path d="M91,${my - 2} L109,${my - 2} L108,${my + 1} L92,${my + 1} Z" fill="#f2ebdc"/>`;
      case 'jut': return `<path d="M86,${my} Q100,${my - 6} 114,${my}" ${st}/><path d="M90,${my + 6} Q100,${my + 10} 110,${my + 6}" ${st}/>`;
      default: return `<path d="M88,${my} L112,${my}" ${st}/>`;
    }
  }

  function stache(p, my) {
    const col = HAIR[p.mc] || INK;
    const s = `fill="${col}" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"`;
    switch (p.stache) {
      case 'toothbrush': return `<path d="M92,${my - 13} L108,${my - 13} L107,${my - 4} L93,${my - 4} Z" fill="${INK}"/>`;
      case 'small': return `<path d="M84,${my - 6} Q100,${my - 16} 116,${my - 6} Q100,${my - 9} 84,${my - 6} Z" ${s}/>`;
      case 'pencil': return `<path d="M86,${my - 7} Q100,${my - 12} 114,${my - 7}" stroke="${INK}" stroke-width="2.4" fill="none"/>`;
      case 'walrus': return `<path d="M74,${my + 4} Q78,${my - 16} 100,${my - 15} Q122,${my - 16} 126,${my + 4} Q118,${my + 2} 112,${my - 2} Q100,${my - 6} 88,${my - 2} Q82,${my + 2} 74,${my + 4} Z" ${s}/>`;
    }
    return '';
  }

  function beard(p, hw, chin, my) {
    const col = HAIR[p.mc] || INK;
    const s = `fill="${col}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"`;
    const L = 100 - hw, R = 100 + hw;
    switch (p.beard) {
      case 'full': return `<path d="M${L + 2},104 Q${L + 2},${chin + 12} 100,${chin + 18} Q${R - 2},${chin + 12} ${R - 2},104 Q${R - 10},${my + 4} 112,${my + 8} Q100,${my + 14} 88,${my + 8} Q${L + 10},${my + 4} ${L + 2},104 Z" ${s}/>
        <path d="M80,${my - 6} Q100,${my - 16} 120,${my - 6} Q100,${my - 2} 80,${my - 6} Z" ${s}/>`;
      case 'trim': return `<path d="M${L + 12},130 Q${L + 16},${chin + 4} 100,${chin + 8} Q${R - 16},${chin + 4} ${R - 12},130 Q112,${my + 12} 100,${my + 12} Q88,${my + 12} ${L + 12},130 Z" ${s}/>`;
      case 'goatee': return `<path d="M92,${my + 8} Q100,${my + 30} 108,${my + 8} Q100,${my + 12} 92,${my + 8} Z" ${s}/>`;
    }
    return '';
  }

  function glasses(p, ey) {
    const st = `fill="rgba(255,255,255,.12)" stroke="${INK}" stroke-width="2.8"`;
    switch (p.glasses) {
      case 'round': return `<circle cx="82" cy="${ey}" r="12" ${st}/><circle cx="118" cy="${ey}" r="12" ${st}/>
        <path d="M94,${ey - 1} Q100,${ey - 5} 106,${ey - 1}" stroke="${INK}" stroke-width="2.5" fill="none"/>
        <path d="M76,${ey - 6} L80,${ey - 9}" stroke="#fff" stroke-width="2"/>`;
      case 'pince': return `<ellipse cx="82" cy="${ey}" rx="11" ry="8" ${st}/><ellipse cx="118" cy="${ey}" rx="11" ry="8" ${st}/>
        <path d="M93,${ey} L107,${ey}" stroke="${INK}" stroke-width="2.4"/>
        <path d="M71,${ey + 2} Q60,${ey + 40} 70,${ey + 90}" stroke="${INK}" stroke-width="1.4" fill="none"/>`;
      case 'monocle': return `<circle cx="118" cy="${ey}" r="13" fill="rgba(255,255,255,.16)" stroke="${INK}" stroke-width="3"/>
        <path d="M130,${ey + 6} Q142,${ey + 50} 132,${ey + 100}" stroke="${INK}" stroke-width="1.4" fill="none"/>
        <path d="M110,${ey - 8} L114,${ey - 11}" stroke="#fff" stroke-width="2"/>`;
    }
    return '';
  }

  function hat(p, hw) {
    if (p.hat !== 'cap') return '';
    const L = 100 - hw, R = 100 + hw;
    return `<path d="M${L - 10},62 Q${L - 6},18 100,10 Q${R + 6},18 ${R + 10},62 Z" fill="${CLOTH.uniform}" stroke="${INK}" stroke-width="4"/>
      <path d="M${L - 4},62 L${R + 4},62 L${R},72 L${L},72 Z" fill="#1a1712" stroke="${INK}" stroke-width="3"/>
      <path d="M${L + 4},70 Q100,96 ${R - 4},70" fill="#0e0d0b" stroke="${INK}" stroke-width="3"/>
      <circle cx="100" cy="46" r="7" fill="#c9a54a" stroke="${INK}" stroke-width="2"/>`;
  }

  function silhouette(id) {
    return `<path d="M-5,245 L-5,222 Q18,192 70,188 L130,188 Q182,192 205,222 L205,245 Z" fill="#0e0d0c"/>
      <path d="M78,188 L100,232 L122,188 Z" fill="#2a2724"/>
      <ellipse cx="100" cy="112" rx="50" ry="64" fill="#0e0d0c"/>
      <path d="M30,74 Q100,56 170,74 Q160,84 100,82 Q40,84 30,74 Z" fill="#0e0d0c"/>
      <path d="M58,76 Q60,22 100,20 Q140,22 142,76 Z" fill="#0e0d0c"/>
      <path d="M60,66 L140,66 L141,74 L59,74 Z" fill="#3a2a1a"/>
      <path d="M62,100 Q100,92 138,100" stroke="#c9a54a" stroke-width="3" opacity=".7" fill="none"/>
      <circle cx="122" cy="146" r="2.5" fill="#d64a2a"/>
      <path d="M122,146 q8,-14 2,-30 q-6,-10 4,-22" stroke="#cfc7b8" stroke-width="2" fill="none" opacity=".6"/>`;
  }

  function render(key, opts = {}) {
    const p = PEOPLE[key] || PEOPLE.you;
    const id = 'pt' + (++uid);
    const hw = p.hw || 60, chin = p.chin || 180, jaw = p.jaw ?? .72;
    const ey = 102, my = ey + 46;
    const skin = SKIN[p.skin || 'light'];
    const hc = HAIR[p.hc] || INK;
    const bg = opts.bg || p.bg;
    let rays = '';
    for (let i = 0; i < 24; i++) {
      const a1 = (i / 24) * Math.PI * 2, a2 = a1 + Math.PI / 48;
      rays += `M100,110 L${100 + Math.cos(a1) * 260},${110 + Math.sin(a1) * 260} L${100 + Math.cos(a2) * 260},${110 + Math.sin(a2) * 260} Z `;
    }
    const defs = `<defs>
      <pattern id="${id}d" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><circle cx="3" cy="3" r="1.6" fill="${INK}"/></pattern>
      <pattern id="${id}b" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(20)"><circle cx="3.5" cy="3.5" r="1.4" fill="rgba(0,0,0,.28)"/></pattern>
      <clipPath id="${id}h"><path d="${headPath(hw, chin, jaw)}"/></clipPath>
    </defs>`;
    const bgLayer = `<rect width="200" height="240" fill="${bg}"/><path d="${rays}" fill="rgba(255,255,255,.12)"/><rect width="200" height="240" fill="url(#${id}b)"/>`;
    let body;
    if (p.silhouette) {
      body = silhouette(id);
    } else {
      const neck = `<path d="M${100 - hw * .42},${chin - 34} L${100 - hw * .46},196 Q100,206 ${100 + hw * .46},196 L${100 + hw * .42},${chin - 34} Z" fill="${skin}" stroke="${INK}" stroke-width="3.5"/>
        <path d="M${100 - hw * .44},${chin - 10} Q100,${chin + 12} ${100 + hw * .44},${chin - 10} L${100 + hw * .46},196 Q100,206 ${100 - hw * .46},196 Z" fill="url(#${id}d)" opacity=".7"/>`;
      const ears = `<ellipse cx="${100 - hw - 2}" cy="108" rx="9" ry="15" fill="${skin}" stroke="${INK}" stroke-width="3.5"/>
        <ellipse cx="${100 + hw + 2}" cy="108" rx="9" ry="15" fill="${skin}" stroke="${INK}" stroke-width="3.5"/>`;
      const head = `<path d="${headPath(hw, chin, jaw)}" fill="${skin}" stroke="${INK}" stroke-width="4.5" stroke-linejoin="round"/>
        <g clip-path="url(#${id}h)">
          <ellipse cx="${100 + hw * 1.05}" cy="112" rx="${hw * .62}" ry="100" fill="url(#${id}d)" opacity=".85"/>
          <ellipse cx="100" cy="${chin + 6}" rx="${hw}" ry="20" fill="url(#${id}d)" opacity=".5"/>
          <path d="M70,${ey - 6} Q82,${ey - 11} 94,${ey - 6} L94,${ey - 2} Q82,${ey - 6} 70,${ey - 2} Z M106,${ey - 6} Q118,${ey - 11} 130,${ey - 6} L130,${ey - 2} Q118,${ey - 6} 106,${ey - 2} Z" fill="rgba(0,0,0,.18)"/>
        </g>
        ${p.hair === 'bald' ? `<ellipse cx="${100 - hw * .3}" cy="48" rx="${hw * .28}" ry="9" fill="#fff" opacity=".45" transform="rotate(-18 ${100 - hw * .3} 48)"/>` : ''}`;
      body = clothes(p, id) + neck + ears + head + hair(p, hw, hc) + beard(p, hw, chin, my) + eyes(p, ey) + brows(p, ey) + nose(ey) + mouth(p, my) + stache(p, my) + glasses(p, ey) + hat(p, hw);
    }
    const title = opts.decorative ? '' : `<title>${p.name}</title>`;
    return `<svg viewBox="0 0 200 240" class="portrait" ${opts.decorative ? 'aria-hidden="true"' : 'role="img"'} preserveAspectRatio="xMidYMid slice">${title}${defs}${bgLayer}${body}<rect x="2" y="2" width="196" height="236" fill="none" stroke="${INK}" stroke-width="5"/></svg>`;
  }

  window.Portraits = { render, PEOPLE };
})();
