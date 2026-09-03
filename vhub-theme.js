(() => {
  const base = {
    bg: '#f8f9f9',
    ink: '#111714',
    sub: '#68736f',
    muted: '#9aa5a1',
    accent: '#111714',
    scene: '#f8f9f9',
    dark: false,
    layout: 'classic',
    effect: 'none',
    group: 'SOLID'
  };

  const t = (id, label, options = {}) => ({ ...base, id, label, ...options });

  const themes = [
    t('light', 'LIGHT'),
    t('dark', 'DARK', { bg:'#101312', ink:'#edf1ef', sub:'#a4aeaa', muted:'#707b77', accent:'#edf1ef', scene:'#101312', dark:true }),
    t('mono', 'MONO', { bg:'#ffffff', ink:'#000000', sub:'#555555', muted:'#929292', accent:'#000000', scene:'#ffffff' }),
    t('oled', 'OLED', { bg:'#000000', ink:'#ffffff', sub:'#b5b5b5', muted:'#707070', accent:'#ffffff', scene:'#000000', dark:true }),
    t('fog', 'FOG', { bg:'#eef1f0', ink:'#202624', sub:'#69736f', muted:'#98a19d', accent:'#202624', scene:'#eef1f0' }),
    t('graphite', 'GRAPHITE', { bg:'#1b1f1d', ink:'#f0f3f1', sub:'#a6b0ab', muted:'#727c77', accent:'#f0f3f1', scene:'#1b1f1d', dark:true }),
    t('slate', 'SLATE', { bg:'#e9edef', ink:'#172026', sub:'#64737a', muted:'#929da2', accent:'#172026', scene:'#e9edef' }),
    t('midnight', 'MIDNIGHT', { bg:'#0d1117', ink:'#e6edf3', sub:'#9da7b3', muted:'#66717c', accent:'#e6edf3', scene:'#0d1117', dark:true }),
    t('blueprint', 'BLUEPRINT', { bg:'#edf3f6', ink:'#10212b', sub:'#5e7380', muted:'#91a1aa', accent:'#234f66', scene:'#edf3f6' }),
    t('navy', 'NAVY', { bg:'#111923', ink:'#edf2f6', sub:'#a5b3bf', muted:'#6f7d88', accent:'#d9ebf7', scene:'#111923', dark:true }),
    t('ice', 'ICE', { bg:'#f1f6f7', ink:'#132126', sub:'#61757d', muted:'#93a4aa', accent:'#2d6372', scene:'#f1f6f7' }),
    t('sage', 'SAGE', { bg:'#edf1ed', ink:'#18231d', sub:'#63756a', muted:'#95a39a', accent:'#315d43', scene:'#edf1ed' }),
    t('moss', 'MOSS', { bg:'#121a15', ink:'#edf3ef', sub:'#a5b5aa', muted:'#6d7d72', accent:'#cfe7d5', scene:'#121a15', dark:true }),
    t('lilac', 'LILAC', { bg:'#f1f0f5', ink:'#221f29', sub:'#706b79', muted:'#9e99a7', accent:'#594c69', scene:'#f1f0f5' }),
    t('plum', 'PLUM', { bg:'#1a151d', ink:'#f1edf2', sub:'#b2a7b5', muted:'#7c7180', accent:'#eadcf0', scene:'#1a151d', dark:true }),
    t('concrete', 'CONCRETE', { bg:'#e6e8e7', ink:'#1d2220', sub:'#656e6a', muted:'#929996', accent:'#3c4642', scene:'#e6e8e7' }),
    t('steel', 'STEEL', { bg:'#dfe5e8', ink:'#162128', sub:'#5e6d75', muted:'#8b989e', accent:'#294957', scene:'#dfe5e8' }),
    t('cloud', 'CLOUD', { bg:'#f4f6f6', ink:'#1a201e', sub:'#6b7571', muted:'#a0a8a5', accent:'#364640', scene:'#f4f6f6' }),

    t('aurora', 'AURORA', { group:'GRADIENT', bg:'#101519', ink:'#f4fbf8', sub:'#b7c9c2', muted:'#7c928a', accent:'#8fffc1', dark:true, scene:'linear-gradient(135deg,#081b1b 0%,#14243b 42%,#2b1637 100%)', effect:'aurora' }),
    t('horizon', 'HORIZON', { group:'GRADIENT', bg:'#eef2f3', ink:'#182126', sub:'#68757b', muted:'#98a2a7', accent:'#245f78', scene:'linear-gradient(180deg,#ddeaf0 0%,#f7f5ef 52%,#e3dad2 100%)' }),
    t('ocean', 'OCEAN', { group:'GRADIENT', bg:'#0b1d28', ink:'#eefbff', sub:'#a4c1cc', muted:'#6f929f', accent:'#62d2f2', dark:true, scene:'linear-gradient(145deg,#07131b 0%,#0b3850 48%,#0d6a75 100%)', effect:'drift' }),
    t('glacier', 'GLACIER', { group:'GRADIENT', bg:'#eef6f8', ink:'#10232b', sub:'#5d7884', muted:'#91a7b0', accent:'#2885a5', scene:'linear-gradient(135deg,#ffffff 0%,#e1f0f5 45%,#d8e7f5 100%)' }),
    t('dusk', 'DUSK', { group:'GRADIENT', bg:'#171726', ink:'#f6f0ff', sub:'#bcb1ce', muted:'#837791', accent:'#c79fff', dark:true, scene:'linear-gradient(150deg,#0f1020 0%,#2a1f43 50%,#512a47 100%)', effect:'haze' }),
    t('sunset', 'SUNSET', { group:'GRADIENT', bg:'#fff3ed', ink:'#33201c', sub:'#85685f', muted:'#b29a91', accent:'#9b4c35', scene:'linear-gradient(145deg,#fff7e8 0%,#f7d7c8 48%,#d9c7e7 100%)' }),
    t('lavender', 'LAVENDER', { group:'GRADIENT', bg:'#f4f1f8', ink:'#261f30', sub:'#756b81', muted:'#a69dad', accent:'#6d4d86', scene:'linear-gradient(135deg,#faf8ff 0%,#e8e1f3 55%,#e1ebf5 100%)' }),
    t('mint', 'MINT', { group:'GRADIENT', bg:'#eff8f3', ink:'#14251c', sub:'#5e7869', muted:'#93a89c', accent:'#277852', scene:'linear-gradient(135deg,#f7fff9 0%,#dcefe5 52%,#e6f3f0 100%)' }),
    t('ember', 'EMBER', { group:'GRADIENT', bg:'#1b1210', ink:'#fff3ed', sub:'#c8aaa0', muted:'#8d7169', accent:'#ff8a61', dark:true, scene:'linear-gradient(145deg,#120b0a 0%,#40201b 55%,#6b2f1f 100%)', effect:'pulse' }),
    t('prism', 'PRISM', { group:'GRADIENT', bg:'#f5f4f8', ink:'#201f24', sub:'#706d78', muted:'#9e9aa6', accent:'#6353a6', scene:'linear-gradient(125deg,#e8f5ff 0%,#f2e7ff 34%,#ffe8ef 68%,#fff4d9 100%)', effect:'drift' }),

    t('drift', 'DRIFT', { group:'MOTION', bg:'#101719', ink:'#eef8f7', sub:'#abc0bd', muted:'#718985', accent:'#87e5d8', dark:true, scene:'linear-gradient(120deg,#0d1718,#12222a,#19162d)', effect:'drift' }),
    t('spotlight', 'SPOTLIGHT', { group:'MOTION', bg:'#0e1011', ink:'#f5f6f6', sub:'#adb2b3', muted:'#737a7b', accent:'#ffffff', dark:true, scene:'#0e1011', effect:'spotlight' }),
    t('scanline', 'SCANLINE', { group:'MOTION', bg:'#101314', ink:'#e5eee9', sub:'#95aaa0', muted:'#63756c', accent:'#8fe3b6', dark:true, scene:'#101314', effect:'scan' }),
    t('starfield', 'STARFIELD', { group:'MOTION', bg:'#070a10', ink:'#eef3ff', sub:'#a7b0c2', muted:'#697388', accent:'#a9c4ff', dark:true, scene:'radial-gradient(circle at 50% 120%,#172038 0%,#090c14 48%,#05070b 100%)', effect:'stars' }),
    t('matrix', 'MATRIX', { group:'MOTION', bg:'#020704', ink:'#b9ffd1', sub:'#72b98a', muted:'#3f7250', accent:'#6dff9f', dark:true, scene:'#020704', layout:'terminal', effect:'matrix' }),
    t('rain', 'RAIN', { group:'MOTION', bg:'#10171d', ink:'#eef5f9', sub:'#a5b7c1', muted:'#6b808b', accent:'#8fd4f2', dark:true, scene:'linear-gradient(180deg,#0d151b,#17232b)', effect:'rain' }),
    t('pulse', 'PULSE', { group:'MOTION', bg:'#151119', ink:'#f7eef9', sub:'#c0adbf', muted:'#826e82', accent:'#ff9dde', dark:true, scene:'radial-gradient(circle at 50% 50%,#2c182b 0%,#151119 55%,#0e0c11 100%)', effect:'pulse' }),
    t('haze', 'HAZE', { group:'MOTION', bg:'#eef0f1', ink:'#202528', sub:'#6d767a', muted:'#9da4a7', accent:'#515e64', scene:'linear-gradient(135deg,#eceff0,#f7f7f6,#e7ebed)', effect:'haze' }),

    t('cards', 'CARDS', { group:'LAYOUT', bg:'#f3f4f4', ink:'#171c1a', sub:'#68726e', muted:'#9aa19e', accent:'#171c1a', scene:'#f3f4f4', layout:'cards' }),
    t('bento', 'BENTO', { group:'LAYOUT', bg:'#eef0ef', ink:'#151a18', sub:'#65706b', muted:'#959e99', accent:'#151a18', scene:'#eef0ef', layout:'bento' }),
    t('terminal', 'TERMINAL', { group:'LAYOUT', bg:'#0a0d0b', ink:'#c8ffd8', sub:'#83b890', muted:'#4c7657', accent:'#7dff9b', dark:true, scene:'#0a0d0b', layout:'terminal', effect:'scan' }),
    t('dashboard', 'DASHBOARD', { group:'LAYOUT', bg:'#eef1f2', ink:'#172027', sub:'#66757d', muted:'#94a0a6', accent:'#2b5c72', scene:'#eef1f2', layout:'dashboard' }),
    t('poster', 'POSTER', { group:'LAYOUT', bg:'#f1efe8', ink:'#181816', sub:'#6d6b63', muted:'#9a978d', accent:'#181816', scene:'#f1efe8', layout:'poster' }),
    t('editorial', 'EDITORIAL', { group:'LAYOUT', bg:'#f5f3ed', ink:'#201f1a', sub:'#6f6b5f', muted:'#a09a89', accent:'#201f1a', scene:'#f5f3ed', layout:'editorial' }),
    t('brutal', 'BRUTAL', { group:'LAYOUT', bg:'#ffffff', ink:'#000000', sub:'#333333', muted:'#777777', accent:'#000000', scene:'#ffffff', layout:'brutal' }),
    t('glass', 'GLASS', { group:'LAYOUT', bg:'#dfe9ee', ink:'#172128', sub:'#61727b', muted:'#8f9da4', accent:'#274e61', scene:'linear-gradient(135deg,#d8e8f0,#f0e8ef,#dceee8)', layout:'glass', effect:'drift' }),
    t('wide', 'WIDE', { group:'LAYOUT', bg:'#f7f8f8', ink:'#161b19', sub:'#69736f', muted:'#9ba39f', accent:'#161b19', scene:'#f7f8f8', layout:'wide' }),
    t('dense', 'DENSE', { group:'LAYOUT', bg:'#f3f5f4', ink:'#151a18', sub:'#636e69', muted:'#929b97', accent:'#151a18', scene:'#f3f5f4', layout:'dense' }),

    t('bluegrid', 'BLUE GRID', { group:'EXPERIMENTAL', bg:'#eaf2f5', ink:'#10232b', sub:'#5e7782', muted:'#91a5ad', accent:'#1a607c', scene:'#eaf2f5', layout:'bluegrid', effect:'grid' }),
    t('neonwire', 'NEON WIRE', { group:'EXPERIMENTAL', bg:'#090b10', ink:'#f1f6ff', sub:'#a7b1c1', muted:'#667185', accent:'#75f7ff', dark:true, scene:'linear-gradient(145deg,#07090e,#111529)', layout:'wire', effect:'grid' })
  ];

  const themeMap = new Map(themes.map(theme => [theme.id, theme]));

  const runtimeCSS = `
    body {
      background: var(--scene, var(--bg)) !important;
      background-attachment: fixed !important;
      transition: background .35s ease, color .2s ease;
      position: relative;
      overflow-x: hidden;
    }
    body::before, body::after {
      content: '';
      position: fixed;
      inset: -15vmax;
      pointer-events: none;
      z-index: 0;
      opacity: 0;
    }
    .app { position: relative; z-index: 1; transition: max-width .3s ease, padding .3s ease; }
    .app-row, .bookmark-group, .topbar { transition: background .2s ease, border-color .2s ease, transform .2s ease, border-radius .2s ease; }

    html[data-vhub-effect="aurora"] body::before {
      opacity: .8;
      background:
        radial-gradient(circle at 20% 30%, rgba(69,255,173,.28), transparent 30%),
        radial-gradient(circle at 80% 25%, rgba(89,142,255,.24), transparent 34%),
        radial-gradient(circle at 55% 75%, rgba(226,83,255,.18), transparent 32%);
      filter: blur(50px);
      animation: vhub-drift 14s ease-in-out infinite alternate;
    }
    html[data-vhub-effect="drift"] body::before {
      opacity: .55;
      background:
        radial-gradient(circle at 20% 20%, rgba(255,255,255,.22), transparent 26%),
        radial-gradient(circle at 80% 60%, color-mix(in srgb, var(--accent) 30%, transparent), transparent 34%);
      filter: blur(55px);
      animation: vhub-drift 11s ease-in-out infinite alternate;
    }
    html[data-vhub-effect="spotlight"] body::before {
      inset: 0;
      opacity: 1;
      background: radial-gradient(circle 260px at var(--pointer-x,50%) var(--pointer-y,35%), rgba(255,255,255,.14), transparent 72%);
    }
    html[data-vhub-effect="scan"] body::after {
      inset: 0;
      opacity: .18;
      background: repeating-linear-gradient(180deg, transparent 0 3px, rgba(255,255,255,.12) 3px 4px);
      animation: vhub-scan 8s linear infinite;
    }
    html[data-vhub-effect="stars"] body::before {
      inset: 0;
      opacity: .55;
      background-image:
        radial-gradient(circle at 10% 20%, #fff 0 1px, transparent 1.5px),
        radial-gradient(circle at 32% 68%, #fff 0 1px, transparent 1.5px),
        radial-gradient(circle at 65% 28%, #fff 0 1px, transparent 1.5px),
        radial-gradient(circle at 88% 76%, #fff 0 1px, transparent 1.5px);
      background-size: 190px 190px, 270px 270px, 230px 230px, 310px 310px;
      animation: vhub-stars 30s linear infinite;
    }
    html[data-vhub-effect="matrix"] body::after {
      inset: 0;
      opacity: .12;
      background:
        repeating-linear-gradient(90deg, transparent 0 18px, rgba(90,255,130,.2) 18px 19px),
        repeating-linear-gradient(180deg, transparent 0 24px, rgba(90,255,130,.13) 24px 25px);
      animation: vhub-matrix 10s linear infinite;
    }
    html[data-vhub-effect="rain"] body::before {
      inset: -20%;
      opacity: .2;
      background: repeating-linear-gradient(110deg, transparent 0 28px, rgba(180,225,255,.5) 29px 30px, transparent 31px 56px);
      animation: vhub-rain 1.4s linear infinite;
    }
    html[data-vhub-effect="pulse"] body::before {
      opacity: .38;
      background: radial-gradient(circle, color-mix(in srgb, var(--accent) 36%, transparent), transparent 40%);
      animation: vhub-pulse 5s ease-in-out infinite;
    }
    html[data-vhub-effect="haze"] body::before {
      opacity: .5;
      background: radial-gradient(ellipse at 30% 40%, rgba(255,255,255,.55), transparent 42%),
                  radial-gradient(ellipse at 70% 65%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 40%);
      filter: blur(65px);
      animation: vhub-drift 16s ease-in-out infinite alternate;
    }
    html[data-vhub-effect="grid"] body::after {
      inset: 0;
      opacity: .16;
      background-image:
        linear-gradient(color-mix(in srgb, var(--accent) 55%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in srgb, var(--accent) 55%, transparent) 1px, transparent 1px);
      background-size: 24px 24px;
    }

    html[data-vhub-layout="cards"] .app { max-width: 650px; }
    html[data-vhub-layout="cards"] .app-row {
      padding: 8px 10px;
      margin: 4px 0;
      border: 1px solid color-mix(in srgb, var(--ink) 12%, transparent);
      border-radius: 10px;
      background: color-mix(in srgb, var(--bg) 88%, transparent);
    }
    html[data-vhub-layout="cards"] .bookmark-group {
      padding: 7px 10px;
      margin: 4px 0;
      border-radius: 10px;
      background: color-mix(in srgb, var(--bg) 86%, transparent);
    }

    html[data-vhub-layout="bento"] .app { max-width: 780px; }
    html[data-vhub-layout="bento"] .list {
      grid-template-columns: repeat(2,minmax(0,1fr));
      gap: 8px;
    }
    html[data-vhub-layout="bento"] .app-row {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      min-height: 86px;
      padding: 12px;
      border-radius: 14px;
      background: color-mix(in srgb, var(--bg) 82%, transparent);
      border: 1px solid color-mix(in srgb, var(--ink) 10%, transparent);
    }
    html[data-vhub-layout="bento"] .actions { margin-top: auto; justify-content: flex-start; }
    html[data-vhub-layout="bento"] .bookmarks { grid-template-columns: repeat(2,minmax(0,1fr)); gap:8px; }
    html[data-vhub-layout="bento"] .bookmark-group { padding:10px; border-radius:14px; background:color-mix(in srgb,var(--bg) 82%,transparent); }

    html[data-vhub-layout="terminal"] body,
    html[data-vhub-layout="terminal"] button,
    html[data-vhub-layout="terminal"] a { font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; }
    html[data-vhub-layout="terminal"] .brand-button { font-family: "SFMono-Regular", Consolas, monospace; font-size: 30px; letter-spacing:.08em; }
    html[data-vhub-layout="terminal"] .app { max-width: 720px; }
    html[data-vhub-layout="terminal"] .app-row { border-bottom:1px dashed color-mix(in srgb,var(--ink) 18%,transparent); padding:5px 0; }
    html[data-vhub-layout="terminal"] .section-title::before { content:'> '; color:var(--accent); }

    html[data-vhub-layout="dashboard"] .app { max-width: 900px; }
    html[data-vhub-layout="dashboard"] .list { grid-template-columns:repeat(2,minmax(0,1fr)); gap:1px 24px; }
    html[data-vhub-layout="dashboard"] .bookmarks { grid-template-columns:repeat(2,minmax(0,1fr)); gap:2px 24px; }
    html[data-vhub-layout="dashboard"] .section-title { border-bottom:1px solid color-mix(in srgb,var(--ink) 14%,transparent); padding-bottom:5px; }

    html[data-vhub-layout="poster"] .app { max-width: 700px; padding-top:80px; }
    html[data-vhub-layout="poster"] .brand-button { font-size:72px; line-height:.85; }
    html[data-vhub-layout="poster"] .topbar { margin-bottom:80px; }
    html[data-vhub-layout="poster"] .section-title { font-size:14px; letter-spacing:.22em; }
    html[data-vhub-layout="poster"] .app-row { padding:5px 0; }

    html[data-vhub-layout="editorial"] body,
    html[data-vhub-layout="editorial"] button,
    html[data-vhub-layout="editorial"] a { font-family: Georgia, "Times New Roman", serif; }
    html[data-vhub-layout="editorial"] .brand-button { font-family: Georgia, "Times New Roman", serif; font-size:54px; font-weight:700; }
    html[data-vhub-layout="editorial"] .app { max-width:700px; }
    html[data-vhub-layout="editorial"] .section-title { border-top:1px solid var(--ink); padding-top:7px; letter-spacing:.12em; }
    html[data-vhub-layout="editorial"] .app-row { padding:4px 0; }

    html[data-vhub-layout="brutal"] .app { max-width:680px; }
    html[data-vhub-layout="brutal"] .topbar { border:3px solid var(--ink); padding:12px; }
    html[data-vhub-layout="brutal"] .app-row,
    html[data-vhub-layout="brutal"] .bookmark-group { border:2px solid var(--ink); margin:5px 0; padding:7px 9px; }
    html[data-vhub-layout="brutal"] .brand-button { font-family:Arial Black,Arial,sans-serif; }

    html[data-vhub-layout="glass"] .app { max-width:680px; }
    html[data-vhub-layout="glass"] .topbar,
    html[data-vhub-layout="glass"] .app-row,
    html[data-vhub-layout="glass"] .bookmark-group {
      background: color-mix(in srgb, var(--bg) 48%, transparent);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border:1px solid rgba(255,255,255,.42);
      box-shadow:0 10px 30px rgba(20,30,40,.06);
      border-radius:14px;
    }
    html[data-vhub-layout="glass"] .topbar { padding:12px 14px; }
    html[data-vhub-layout="glass"] .app-row,
    html[data-vhub-layout="glass"] .bookmark-group { margin:5px 0; padding:8px 10px; }

    html[data-vhub-layout="wide"] .app { max-width:920px; }
    html[data-vhub-layout="wide"] .app-row { grid-template-columns:minmax(0,1fr) 120px; }
    html[data-vhub-layout="wide"] .bookmark-group { grid-template-columns:140px minmax(0,1fr); }

    html[data-vhub-layout="dense"] .app { max-width:620px; padding-top:28px; }
    html[data-vhub-layout="dense"] .topbar { margin-bottom:26px; }
    html[data-vhub-layout="dense"] .section-spaced { margin-top:18px; }
    html[data-vhub-layout="dense"] .app-row { padding:0; line-height:1.55; }
    html[data-vhub-layout="dense"] .bookmark-group { min-height:20px; }
    html[data-vhub-layout="dense"] .bookmark-icons { padding:1px 0; gap:7px; }

    html[data-vhub-layout="bluegrid"] .app { max-width:760px; }
    html[data-vhub-layout="bluegrid"] .app-row,
    html[data-vhub-layout="bluegrid"] .bookmark-group { border-left:2px solid var(--accent); padding-left:10px; margin:4px 0; }

    html[data-vhub-layout="wire"] .app { max-width:760px; }
    html[data-vhub-layout="wire"] .app-row,
    html[data-vhub-layout="wire"] .bookmark-group {
      border:1px solid color-mix(in srgb,var(--accent) 55%,transparent);
      box-shadow:0 0 14px color-mix(in srgb,var(--accent) 13%,transparent);
      padding:7px 9px;
      margin:5px 0;
      border-radius:7px;
      background:rgba(0,0,0,.12);
    }

    html[data-vhub-layout="cards"] .app-row:hover,
    html[data-vhub-layout="bento"] .app-row:hover,
    html[data-vhub-layout="glass"] .app-row:hover,
    html[data-vhub-layout="wire"] .app-row:hover { transform:translateY(-2px); }

    @media (max-width:620px) {
      html[data-vhub-layout="bento"] .list,
      html[data-vhub-layout="bento"] .bookmarks,
      html[data-vhub-layout="dashboard"] .list,
      html[data-vhub-layout="dashboard"] .bookmarks { grid-template-columns:1fr; }
      html[data-vhub-layout="poster"] .brand-button { font-size:54px; }
    }
    @media (prefers-reduced-motion: reduce) {
      body::before, body::after { animation:none !important; }
      .app-row, .bookmark-group { transition:none !important; }
    }
    @keyframes vhub-drift { from{transform:translate3d(-3%,-2%,0) scale(1)} to{transform:translate3d(4%,3%,0) scale(1.08)} }
    @keyframes vhub-scan { from{transform:translateY(-20px)} to{transform:translateY(20px)} }
    @keyframes vhub-stars { from{transform:translateY(0)} to{transform:translateY(-190px)} }
    @keyframes vhub-matrix { from{transform:translateY(-25px)} to{transform:translateY(25px)} }
    @keyframes vhub-rain { from{transform:translate3d(-5%,-8%,0)} to{transform:translate3d(5%,8%,0)} }
    @keyframes vhub-pulse { 0%,100%{transform:scale(.8);opacity:.18} 50%{transform:scale(1.15);opacity:.5} }
  `;

  let styleEl = document.getElementById('vhub-theme-runtime');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'vhub-theme-runtime';
    styleEl.textContent = runtimeCSS;
    document.head.append(styleEl);
  }

  function get(id) { return themeMap.get(id) || null; }

  function initial() {
    const saved = localStorage.getItem('vhub-theme');
    if (themeMap.has(saved)) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function apply(id, options = {}) {
    const theme = themeMap.get(id) || themeMap.get('light');
    const persist = options.persist !== false;
    const root = document.documentElement;

    root.dataset.theme = theme.id;
    root.dataset.vhubLayout = theme.layout || 'classic';
    root.dataset.vhubEffect = theme.effect || 'none';
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--ink', theme.ink);
    root.style.setProperty('--sub', theme.sub);
    root.style.setProperty('--muted', theme.muted);
    root.style.setProperty('--accent', theme.accent || theme.ink);
    root.style.setProperty('--scene', theme.scene || theme.bg);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme.bg);

    if (persist) localStorage.setItem('vhub-theme', theme.id);
    return theme;
  }

  if (!window.__VHUB_POINTER_EFFECT__) {
    window.__VHUB_POINTER_EFFECT__ = true;
    window.addEventListener('pointermove', event => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    }, { passive: true });
  }

  window.VHUBTheme = { themes, get, initial, apply };
  apply(initial(), { persist: false });
})();
