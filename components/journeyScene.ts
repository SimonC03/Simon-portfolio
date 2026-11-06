// three.js scene for the home-page journey: one cloud of particles that morphs between shapes.
// Loaded on demand by Journey.tsx, so three.js never sits in the main bundle.
import * as THREE from 'three'

export type Shape = 'cloud' | 'signal' | 'gears' | 'growth' | 'bus' | 'network'

export interface JourneySceneOptions {
  small: boolean
  // Scroll progress, 0 (first shape) to shapes.length - 1 (last); read once per frame.
  getTarget: () => number
  // Called when the nearest whole step changes (0 = intro, k = chapter k).
  onStep: (step: number) => void
}

const W = 640
const H = 400
type Draw = (c: CanvasRenderingContext2D) => void

const gear = (c: CanvasRenderingContext2D, x: number, y: number, r: number, teeth: number) => {
  c.beginPath()
  for (let i = 0; i < teeth * 2; i++) {
    const a0 = (i / (teeth * 2)) * Math.PI * 2
    const a1 = ((i + 1) / (teeth * 2)) * Math.PI * 2
    const rr = i % 2 ? r * 0.82 : r
    c.lineTo(x + Math.cos(a0) * rr, y + Math.sin(a0) * rr)
    c.lineTo(x + Math.cos(a1) * rr, y + Math.sin(a1) * rr)
  }
  c.closePath()
  c.moveTo(x + r * 0.36, y)
  c.arc(x, y, r * 0.36, 0, Math.PI * 2)
  c.fill('evenodd')
}

// Each shape is drawn on a 640×400 canvas; particles are scattered over the drawn pixels.
const DRAW: Record<Exclude<Shape, 'cloud'>, Draw> = {
  signal: (c) => {
    c.lineWidth = 7
    c.beginPath()
    c.moveTo(320, 175)
    c.lineTo(320, 350)
    c.moveTo(285, 350)
    c.lineTo(320, 250)
    c.lineTo(355, 350)
    c.stroke()
    c.beginPath()
    c.arc(320, 170, 12, 0, Math.PI * 2)
    c.fill()
    for (const r of [55, 100, 145, 190]) {
      c.lineWidth = 6
      c.beginPath()
      c.arc(320, 170, r, -0.6, 0.6)
      c.stroke()
      c.beginPath()
      c.arc(320, 170, r, Math.PI - 0.6, Math.PI + 0.6)
      c.stroke()
    }
  },
  gears: (c) => {
    gear(c, 255, 215, 125, 12)
    gear(c, 440, 150, 82, 9)
  },
  growth: (c) => {
    c.lineWidth = 6
    ;[70, 105, 140, 190, 240, 290].forEach((h, i) => c.strokeRect(130 + i * 66, 340 - h, 40, h))
    c.lineWidth = 9
    c.beginPath()
    c.moveTo(120, 300)
    c.lineTo(300, 210)
    c.lineTo(390, 230)
    c.lineTo(530, 70)
    c.stroke()
    c.beginPath()
    c.moveTo(530, 70)
    c.lineTo(492, 82)
    c.moveTo(530, 70)
    c.lineTo(522, 110)
    c.stroke()
  },
  bus: (c) => {
    c.lineWidth = 9
    c.beginPath()
    c.roundRect(80, 110, 480, 175, 30)
    c.stroke()
    c.lineWidth = 6
    for (let i = 0; i < 6; i++) {
      c.beginPath()
      c.roundRect(112 + i * 62, 138, 48, 58, 6)
      c.stroke()
    }
    c.strokeRect(495, 138, 40, 120)
    c.lineWidth = 16
    for (const x of [185, 455]) {
      c.beginPath()
      c.arc(x, 290, 34, 0, Math.PI * 2)
      c.stroke()
    }
    c.lineWidth = 3
    c.beginPath()
    c.moveTo(40, 335)
    c.lineTo(600, 335)
    c.stroke()
  },
  network: (c) => {
    const layers = [4, 6, 6, 3].map((count, li) =>
      Array.from({ length: count }, (_, i) => [140 + li * 120, 200 + (i - (count - 1) / 2) * 56])
    )
    c.lineWidth = 2
    for (let l = 0; l < layers.length - 1; l++)
      for (const [x0, y0] of layers[l])
        for (const [x1, y1] of layers[l + 1]) {
          c.beginPath()
          c.moveTo(x0, y0)
          c.lineTo(x1, y1)
          c.stroke()
        }
    for (const layer of layers)
      for (const [x, y] of layer) {
        c.beginPath()
        c.arc(x, y, 13, 0, Math.PI * 2)
        c.fill()
      }
  },
}

function sample(draw: Draw, n: number, rand: () => number) {
  const cv = document.createElement('canvas')
  cv.width = W
  cv.height = H
  const c = cv.getContext('2d', { willReadFrequently: true })!
  c.fillStyle = c.strokeStyle = '#fff'
  c.lineCap = c.lineJoin = 'round'
  draw(c)
  const px = c.getImageData(0, 0, W, H).data
  const hits: number[] = []
  for (let i = 0; i < W * H; i++) if (px[i * 4 + 3] > 128) hits.push(i)
  const out = new Float32Array(n * 3)
  for (let k = 0; k < n; k++) {
    const i = hits[Math.floor(rand() * hits.length)]
    out[k * 3] = ((i % W) / W - 0.5) * 3.2
    out[k * 3 + 1] = -(Math.floor(i / W) / H - 0.5) * 2
    out[k * 3 + 2] = (rand() - 0.5) * 0.3
  }
  return out
}

function cloud(n: number, rand: () => number) {
  const out = new Float32Array(n * 3)
  for (let k = 0; k < n; k++) {
    const u = rand() * 2 - 1
    const a = rand() * Math.PI * 2
    const r = 1.15 * Math.cbrt(rand())
    const s = Math.sqrt(1 - u * u)
    out[k * 3] = r * s * Math.cos(a) * 1.4
    out[k * 3 + 1] = r * u * 0.9
    out[k * 3 + 2] = r * s * Math.sin(a) * 0.6
  }
  return out
}

const vertexShader = /* glsl */ `
  attribute vec3 aTo;
  attribute float aSeed;
  attribute vec3 aColor;
  uniform float uMix;
  uniform float uTime;
  uniform float uSize;
  uniform vec2 uMouse;
  uniform float uAspect;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    // particles leave at slightly different moments
    float m = smoothstep(0.0, 1.0, clamp((uMix - aSeed * 0.3) / 0.7, 0.0, 1.0));
    float wave = sin(m * 3.14159);
    // on the way: arc outwards, twist around the vertical axis, grow and warm up
    vec3 dir = normalize(vec3(sin(aSeed * 91.7), cos(aSeed * 47.3), sin(aSeed * 13.1)) + 1e-4);
    vec3 p = mix(position, aTo, m) + dir * wave * 0.3;
    float ang = wave * (0.35 + aSeed * 0.45);
    p.xz = vec2(p.x * cos(ang) - p.z * sin(ang), p.x * sin(ang) + p.z * cos(ang));
    p += vec3(sin(uTime * 0.7 + aSeed * 40.0), cos(uTime * 0.6 + aSeed * 30.0), sin(uTime * 0.5 + aSeed * 20.0)) * 0.012;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vec4 clip = projectionMatrix * mv;
    // a small ripple away from the cursor
    vec2 d = clip.xy / clip.w - uMouse;
    float dist = length(d * vec2(uAspect, 1.0));
    clip.xy += normalize(d + 1e-5) * smoothstep(0.13, 0.0, dist) * 0.035 * clip.w;
    gl_Position = clip;
    gl_PointSize = uSize * (0.5 + aSeed) * (1.0 + wave * 0.7) / -mv.z;
    vColor = mix(aColor, vec3(1.0, 0.42, 0.2), wave * 0.35);
    vAlpha = 0.35 + 0.5 * aSeed;
  }
`
const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float r = length(gl_PointCoord - 0.5);
    gl_FragColor = vec4(vColor, smoothstep(0.5, 0.05, r) * vAlpha);
  }
`

// Frame-rate independent exponential approach: `lambda` per second.
const damp = (a: number, b: number, lambda: number, dt: number) =>
  a + (b - a) * (1 - Math.exp(-lambda * dt))

export function createJourneyScene(host: HTMLElement, shapes: Shape[], opts: JourneySceneOptions) {
  const renderer = new THREE.WebGLRenderer({
    antialias: false,
    alpha: false,
    powerPreference: 'high-performance',
  })
  renderer.setClearColor(0x111214, 1)
  const dpr = Math.min(window.devicePixelRatio, 1.5)
  renderer.setPixelRatio(dpr)
  host.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 20)
  camera.position.z = 4
  const group = new THREE.Group()
  scene.add(group)

  const n = opts.small ? 7000 : 14000
  let seed = 20260611
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647
  const targets = shapes.map((s) => (s === 'cloud' ? cloud(n, rand) : sample(DRAW[s], n, rand)))

  const seeds = new Float32Array(n)
  const colors = new Float32Array(n * 3)
  for (let k = 0; k < n; k++) {
    seeds[k] = rand()
    const accent = rand() < 0.09
    colors.set(accent ? [1, 0.29, 0.12] : [0.86, 0.88, 0.91], k * 3)
  }
  const from = new THREE.BufferAttribute(targets[0].slice(), 3)
  const to = new THREE.BufferAttribute(targets[Math.min(1, targets.length - 1)].slice(), 3)
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', from)
  geo.setAttribute('aTo', to)
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1))
  geo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3))

  const uniforms = {
    uMix: { value: 0 },
    uTime: { value: 0 },
    uSize: { value: (opts.small ? 26 : 22) * dpr },
    uMouse: { value: new THREE.Vector2(9, 9) },
    uAspect: { value: 1 },
  }
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })
  const points = new THREE.Points(geo, material)
  points.frustumCulled = false
  group.add(points)

  const resize = () => {
    const w = host.clientWidth || 1
    const h = host.clientHeight || 1
    renderer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    uniforms.uAspect.value = w / h
    // fit the 3.2-wide shapes; on wide screens sit to the right of the text, on phones above it
    const visibleW = 2 * Math.tan((35 * Math.PI) / 360) * camera.position.z * camera.aspect
    const wide = camera.aspect > 1.2
    group.scale.setScalar(Math.min(1, (visibleW * (wide ? 0.55 : 0.92)) / 3.2))
    group.position.set(wide ? visibleW * 0.17 : 0, wide ? 0.05 : 0.42, 0)
  }
  resize()

  let pointerX = 0
  let pointerY = 0
  const onPointer = (e: PointerEvent) => {
    const r = host.getBoundingClientRect()
    pointerX = ((e.clientX - r.left) / r.width) * 2 - 1
    pointerY = -((e.clientY - r.top) / r.height) * 2 + 1
    uniforms.uMouse.value.set(pointerX, pointerY)
  }
  window.addEventListener('pointermove', onPointer, { passive: true })
  window.addEventListener('resize', resize)

  // Scroll progress is eased towards its target every frame, so stepped wheel input
  // (and the segment swaps) never show as jumps.
  let p = opts.getTarget()
  let seg = -1
  let step = -1
  const apply = (value: number) => {
    const s = Math.max(0, Math.min(Math.floor(value), shapes.length - 2))
    if (s !== seg) {
      from.set(targets[s])
      to.set(targets[s + 1])
      from.needsUpdate = to.needsUpdate = true
      seg = s
    }
    // each step: hold a quarter, morph over the middle half, hold a quarter
    uniforms.uMix.value = Math.max(0, Math.min(1, (value - s - 0.25) / 0.5))
    const k = Math.round(value)
    if (k !== step) {
      step = k
      opts.onStep(k)
    }
  }
  apply(p)

  let raf = 0
  let visible = false
  const clock = new THREE.Clock()
  const frame = () => {
    const dt = Math.min(clock.getDelta(), 0.05)
    const t = clock.elapsedTime
    uniforms.uTime.value = t
    p = damp(p, opts.getTarget(), 9, dt)
    apply(p)
    group.rotation.y = damp(group.rotation.y, Math.sin(t * 0.25) * 0.18 + pointerX * 0.25, 3, dt)
    group.rotation.x = damp(group.rotation.x, -pointerY * 0.12, 3, dt)
    renderer.render(scene, camera)
    raf = visible ? requestAnimationFrame(frame) : 0
  }
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible && !raf) {
      // coming back after a while: start from where the scroll actually is
      p = opts.getTarget()
      clock.getDelta()
      raf = requestAnimationFrame(frame)
    }
  })
  io.observe(host)

  return {
    dispose() {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('resize', resize)
      geo.dispose()
      material.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    },
  }
}
