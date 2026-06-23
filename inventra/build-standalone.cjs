/*
 * Build fully self-contained poster HTML files for HTML→PDF conversion.
 *
 * Reads each poster in marketing/posters/, inlines the web fonts (as base64
 * woff2 data URIs) and every SVG asset (as data URIs), and writes a
 * dependency-free copy to marketing/posters/print/. No CDN, no relative files —
 * each output is a single HTML file any converter (headless Chrome, etc.) can
 * render identically.
 *
 *   node marketing/build-standalone.cjs
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const POSTERS_DIR = path.join(__dirname, 'posters');
const OUT_DIR = path.join(POSTERS_DIR, 'print');
const ASSETS_DIR = path.join(__dirname, 'assets');

const FONT = {
  inter: 'node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
  interExt: 'node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2',
  anek: 'node_modules/@fontsource-variable/anek-tamil/files/anek-tamil-latin-wght-normal.woff2',
  anekExt: 'node_modules/@fontsource-variable/anek-tamil/files/anek-tamil-latin-ext-wght-normal.woff2',
};

const b64 = (p) => fs.readFileSync(path.join(ROOT, p)).toString('base64');
const woff2 = (p) => `url(data:font/woff2;base64,${b64(p)}) format("woff2")`;

// @font-face block: primary (latin) + fallback (latin-ext) per family, so any
// French accent missing from the base subset is picked up from the ext face.
const fontCss = `
<style>
@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:swap;src:${woff2(FONT.inter)}}
@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:swap;src:${woff2(FONT.interExt)}}
@font-face{font-family:"Anek Tamil";font-style:normal;font-weight:100 900;font-display:swap;src:${woff2(FONT.anek)}}
@font-face{font-family:"Anek Tamil";font-style:normal;font-weight:100 900;font-display:swap;src:${woff2(FONT.anekExt)}}
</style>`;

// SVG assets → data URIs (base64 keeps it safe regardless of inner markup).
const svgDataUri = (file) => {
  const raw = fs.readFileSync(path.join(ASSETS_DIR, file)).toString('base64');
  return `data:image/svg+xml;base64,${raw}`;
};
const ASSET_MAP = {
  '../assets/logo.svg': svgDataUri('logo.svg'),
  '../assets/sovereign.svg': svgDataUri('sovereign.svg'),
  '../assets/qr-website.svg': svgDataUri('qr-website.svg'),
  '../assets/icon.svg': svgDataUri('icon.svg'),
};

// Strip the three Google-Fonts <link> lines (preconnect + stylesheet).
const stripGoogleFonts = (html) =>
  html
    .replace(/\s*<link rel="preconnect"[^>]*>/g, '')
    .replace(/\s*<link href="https:\/\/fonts\.googleapis\.com[^>]*>/g, '');

fs.mkdirSync(OUT_DIR, { recursive: true });

const posters = fs.readdirSync(POSTERS_DIR).filter((f) => f.endsWith('.html'));
for (const file of posters) {
  let html = fs.readFileSync(path.join(POSTERS_DIR, file), 'utf8');
  html = stripGoogleFonts(html);
  // inject embedded fonts right before </head>
  html = html.replace('</head>', `${fontCss}\n</head>`);
  // swap every external asset reference for its data URI
  for (const [ref, uri] of Object.entries(ASSET_MAP)) {
    html = html.split(ref).join(uri);
  }
  fs.writeFileSync(path.join(OUT_DIR, file), html);
  console.log('built', path.relative(ROOT, path.join(OUT_DIR, file)));
}
console.log('\nDone. Self-contained posters are in marketing/posters/print/');
