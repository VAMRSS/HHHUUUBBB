(() => {
  const themes = [
    { id: 'light', label: 'LIGHT', bg: '#f8f9f9', ink: '#111714', sub: '#68736f', muted: '#9aa5a1', dark: false },
    { id: 'dark', label: 'DARK', bg: '#101312', ink: '#edf1ef', sub: '#a4aeaa', muted: '#707b77', dark: true },
    { id: 'mono', label: 'MONO', bg: '#ffffff', ink: '#000000', sub: '#555555', muted: '#929292', dark: false },
    { id: 'oled', label: 'OLED', bg: '#000000', ink: '#ffffff', sub: '#b5b5b5', muted: '#707070', dark: true },
    { id: 'fog', label: 'FOG', bg: '#eef1f0', ink: '#202624', sub: '#69736f', muted: '#98a19d', dark: false },
    { id: 'graphite', label: 'GRAPHITE', bg: '#1b1f1d', ink: '#f0f3f1', sub: '#a6b0ab', muted: '#727c77', dark: true },
    { id: 'slate', label: 'SLATE', bg: '#e9edef', ink: '#172026', sub: '#64737a', muted: '#929da2', dark: false },
    { id: 'midnight', label: 'MIDNIGHT', bg: '#0d1117', ink: '#e6edf3', sub: '#9da7b3', muted: '#66717c', dark: true },
    { id: 'blueprint', label: 'BLUEPRINT', bg: '#edf3f6', ink: '#10212b', sub: '#5e7380', muted: '#91a1aa', dark: false },
    { id: 'navy', label: 'NAVY', bg: '#111923', ink: '#edf2f6', sub: '#a5b3bf', muted: '#6f7d88', dark: true },
    { id: 'ice', label: 'ICE', bg: '#f1f6f7', ink: '#132126', sub: '#61757d', muted: '#93a4aa', dark: false },
    { id: 'sage', label: 'SAGE', bg: '#edf1ed', ink: '#18231d', sub: '#63756a', muted: '#95a39a', dark: false },
    { id: 'moss', label: 'MOSS', bg: '#121a15', ink: '#edf3ef', sub: '#a5b5aa', muted: '#6d7d72', dark: true },
    { id: 'lilac', label: 'LILAC', bg: '#f1f0f5', ink: '#221f29', sub: '#706b79', muted: '#9e99a7', dark: false },
    { id: 'plum', label: 'PLUM', bg: '#1a151d', ink: '#f1edf2', sub: '#b2a7b5', muted: '#7c7180', dark: true },
    { id: 'concrete', label: 'CONCRETE', bg: '#e6e8e7', ink: '#1d2220', sub: '#656e6a', muted: '#929996', dark: false },
    { id: 'steel', label: 'STEEL', bg: '#dfe5e8', ink: '#162128', sub: '#5e6d75', muted: '#8b989e', dark: false },
    { id: 'cloud', label: 'CLOUD', bg: '#f4f6f6', ink: '#1a201e', sub: '#6b7571', muted: '#a0a8a5', dark: false }
  ];

  const themeMap = new Map(themes.map(theme => [theme.id, theme]));

  function get(id) {
    return themeMap.get(id) || null;
  }

  function initial() {
    const saved = localStorage.getItem('vhub-theme');
    if (themeMap.has(saved)) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function apply(id, options = {}) {
    const theme = themeMap.get(id) || themeMap.get('light');
    const persist = options.persist !== false;
    const root = document.documentElement;

    root.dataset.theme = theme.id;
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--ink', theme.ink);
    root.style.setProperty('--sub', theme.sub);
    root.style.setProperty('--muted', theme.muted);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme.bg);

    if (persist) localStorage.setItem('vhub-theme', theme.id);
    return theme;
  }

  window.VHUBTheme = { themes, get, initial, apply };
  apply(initial(), { persist: false });
})();
