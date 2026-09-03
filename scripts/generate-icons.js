/* eslint-disable */
/**
 * Generates the favicon set (SVG, PNG, ICO, Apple touch, maskable PWA icons) and the
 * Open Graph images in public/. All text is converted to vector paths with opentype.js,
 * so the rasterizer needs no system fonts.
 *
 * One-time setup (dev dependencies are intentionally not added to package.json):
 *   npm i --no-save @resvg/resvg-js@2 opentype.js@1 png-to-ico@2 @fontsource/space-grotesk
 * Run:
 *   node scripts/generate-icons.js
 */
const fs = require('fs')
const path = require('path')
const opentype = require('opentype.js')
const { Resvg } = require('@resvg/resvg-js')
const pngToIco = require('png-to-ico')

const ROOT = process.argv[2] || path.join(__dirname, '..')
const FAVICON_DIR = path.join(ROOT, 'public', 'static', 'favicons')
const IMAGES_DIR = path.join(ROOT, 'public', 'static', 'images')

const fontFile = (weight) =>
  require.resolve(`@fontsource/space-grotesk/files/space-grotesk-latin-${weight}-normal.woff`)
const fonts = {
  bold: opentype.loadSync(fontFile(700)),
  medium: opentype.loadSync(fontFile(500)),
  regular: opentype.loadSync(fontFile(400)),
}

// ---- colour helpers: OKLCH -> sRGB hex (same values as css/tailwind.css) ----
function oklchToHex(L, C, hDeg) {
  const h = (hDeg * Math.PI) / 180
  const a = C * Math.cos(h)
  const b = C * Math.sin(h)
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b
  const s_ = L - 0.0894841775 * a - 1.291485548 * b
  const l = l_ ** 3
  const m = m_ ** 3
  const s = s_ ** 3
  const lin = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ]
  const toSrgb = (v) => {
    const c = Math.min(1, Math.max(0, v))
    const g = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055
    return Math.round(g * 255)
  }
  return '#' + lin.map((v) => toSrgb(v).toString(16).padStart(2, '0')).join('')
}

const color = {
  p400: oklchToHex(0.7, 0.18, 240),
  p500: oklchToHex(0.58, 0.22, 240),
  p600: oklchToHex(0.48, 0.22, 240),
  p700: oklchToHex(0.4, 0.2, 240),
  gray950: oklchToHex(0.13, 0.028, 261.692),
  gray300: oklchToHex(0.872, 0.01, 258.338),
  gray400: oklchToHex(0.707, 0.022, 261.325),
}

// ---- text helpers ----
// Path data for a text run with its baseline at (x, y). letterSpacing is in em.
function textPath(font, text, x, y, size, letterSpacing = 0) {
  return font.getPath(text, x, y, size, { kerning: true, letterSpacing }).toPathData(2)
}

// "SC" centred in a size x size box, scaled so the glyph run is widthFraction wide.
function monogram(size, widthFraction) {
  const p = fonts.bold.getPath('SC', 0, 0, 1000, { kerning: true, letterSpacing: -0.035 })
  const bb = p.getBoundingBox()
  const w = bb.x2 - bb.x1
  const h = bb.y2 - bb.y1
  const s = (size * widthFraction) / w
  const tx = (size - w * s) / 2 - bb.x1 * s
  const ty = (size - h * s) / 2 - bb.y1 * s
  return {
    d: p.toPathData(3),
    transform: `translate(${tx.toFixed(3)} ${ty.toFixed(3)}) scale(${s.toFixed(5)})`,
  }
}

function gradientDefs(id) {
  return `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${color.p500}"/>
      <stop offset="1" stop-color="${color.p700}"/>
    </linearGradient>`
}

// rounded: transparent rounded corners (browser tabs). Otherwise full-bleed square (iOS / maskable).
function iconSvg({ size, rounded, glyphWidth }) {
  const r = rounded ? size * 0.225 : 0
  const g = monogram(size, glyphWidth)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    ${gradientDefs('bg')}
  </defs>
  <rect width="${size}" height="${size}" rx="${r}" fill="url(#bg)"/>
  <path d="${g.d}" transform="${g.transform}" fill="#ffffff"/>
</svg>
`
}

function renderPng(svg, width) {
  return new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng()
}

function write(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, data)
  console.log('wrote', path.relative(ROOT, file), `${data.length} bytes`)
}

// ---- 1. scalable favicon (paths only, no font dependency) ----
write(
  path.join(FAVICON_DIR, 'favicon.svg'),
  iconSvg({ size: 512, rounded: true, glyphWidth: 0.66 })
)

// ---- 2. browser PNG favicons (rounded, transparent corners) ----
const pngs = {}
for (const s of [16, 32, 48, 96, 192, 512]) {
  pngs[s] = renderPng(iconSvg({ size: s, rounded: true, glyphWidth: 0.7 }), s)
  if (s !== 48) write(path.join(FAVICON_DIR, `favicon-${s}x${s}.png`), pngs[s])
}

// ---- 3. favicon.ico (16/32/48): in the favicons folder and at the site root (used for PDF tabs etc.) ----
const icoPromise = pngToIco([pngs[16], pngs[32], pngs[48]]).then((ico) => {
  write(path.join(FAVICON_DIR, 'favicon.ico'), ico)
  write(path.join(ROOT, 'public', 'favicon.ico'), ico)
})

// ---- 4. apple touch icon: full-bleed square, iOS rounds the corners itself ----
write(
  path.join(FAVICON_DIR, 'apple-touch-icon.png'),
  renderPng(iconSvg({ size: 180, rounded: false, glyphWidth: 0.62 }), 180)
)

// ---- 5. maskable PWA icons: full-bleed, glyph inside the 80% safe zone ----
for (const s of [192, 512]) {
  write(
    path.join(FAVICON_DIR, `web-app-manifest-${s}x${s}.png`),
    renderPng(iconSvg({ size: s, rounded: false, glyphWidth: 0.52 }), s)
  )
}

// ---- 6. Open Graph images, one per locale (1200 x 630) ----
function ogSvg({ subtitle, tagline }) {
  const W = 1200
  const H = 630
  const mark = 132
  const g = monogram(mark, 0.66)
  const name = textPath(fonts.bold, 'Simon Carlén', 96, 378, 92, -0.02)
  const sub = textPath(fonts.medium, subtitle, 96, 440, 31)
  const tag = textPath(fonts.regular, tagline, 96, 486, 27)
  const url = textPath(fonts.medium, 'simon-portfolio-wine.vercel.app', 96, 566, 23)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    ${gradientDefs('mark')}
    <radialGradient id="glow" cx="0.86" cy="0.08" r="0.62">
      <stop offset="0" stop-color="${color.p500}" stop-opacity="0.55"/>
      <stop offset="0.55" stop-color="${color.p700}" stop-opacity="0.18"/>
      <stop offset="1" stop-color="${color.gray950}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${color.p400}"/>
      <stop offset="1" stop-color="${color.p400}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${color.gray950}"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <g transform="translate(96 96)">
    <rect width="${mark}" height="${mark}" rx="${(mark * 0.225).toFixed(1)}" fill="url(#mark)"/>
    <path d="${g.d}" transform="${g.transform}" fill="#ffffff"/>
  </g>
  <path d="${name}" fill="#ffffff"/>
  <path d="${sub}" fill="${color.gray300}"/>
  <path d="${tag}" fill="${color.gray400}"/>
  <rect x="96" y="522" width="260" height="3" rx="1.5" fill="url(#rule)"/>
  <path d="${url}" fill="${color.p400}"/>
</svg>
`
}
write(
  path.join(IMAGES_DIR, 'og-en.png'),
  renderPng(
    ogSvg({
      subtitle: 'M.Sc. Data Science & AI  ·  CEO & Co-Founder, CampusLyan',
      tagline: 'Engineer & entrepreneur across AI, software and business',
    }),
    1200
  )
)
write(
  path.join(IMAGES_DIR, 'og-sv.png'),
  renderPng(
    ogSvg({
      subtitle: 'M.Sc. Data Science & AI  ·  VD & medgrundare, CampusLyan',
      tagline: 'Ingenjör & entreprenör inom AI, mjukvara och affärer',
    }),
    1200
  )
)

icoPromise.then(() => console.log('colours', JSON.stringify(color)))
