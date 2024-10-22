const palettes = [
  { primary: '#C6D5E2', background: '#7199AC' },
  { primary: '#9EE9FF', background: '#449BD1' },
  { primary: '#378769', background: '#D1E6CA' },
];

export function applyRandomPalette() {
  const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
  document.documentElement.style.setProperty('--primary', randomPalette.primary);
  document.documentElement.style.setProperty('--background', randomPalette.background);
}
