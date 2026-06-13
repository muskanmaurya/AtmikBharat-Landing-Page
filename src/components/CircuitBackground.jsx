import { useEffect, useRef } from 'react'

const GRID_SIZE = 40
const TRACK_COUNT = 25

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateOrthogonalPath(cols, rows, gridSize, maxSegments = 12) {
  // start somewhere away from edges
  let x = randInt(1, cols - 2)
  let y = randInt(1, rows - 2)
  const points = [{ x: x * gridSize, y: y * gridSize }]
  let lastDir = null
  const steps = randInt(6, maxSegments)

  for (let i = 0; i < steps; i++) {
    // choose orthogonal direction not immediately reversing
    const dirs = ['N', 'S', 'E', 'W'].filter(d => {
      if (!lastDir) return true
      if (lastDir === 'N' && d === 'S') return false
      if (lastDir === 'S' && d === 'N') return false
      if (lastDir === 'E' && d === 'W') return false
      if (lastDir === 'W' && d === 'E') return false
      return true
    })

    const dir = dirs[randInt(0, dirs.length - 1)]
    lastDir = dir
    // step length in grid units
    const step = randInt(1, 4)
    if (dir === 'N') y = Math.max(1, y - step)
    if (dir === 'S') y = Math.min(rows - 2, y + step)
    if (dir === 'E') x = Math.min(cols - 2, x + step)
    if (dir === 'W') x = Math.max(1, x - step)

    points.push({ x: x * gridSize, y: y * gridSize })
  }

  return points
}

function computeLengths(points) {
  const segLengths = []
  let total = 0
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i]
    const b = points[i + 1]
    const dx = b.x - a.x
    const dy = b.y - a.y
    const len = Math.hypot(dx, dy)
    segLengths.push(len)
    total += len
  }
  return { segLengths, total }
}

function pointAt(points, segLengths, total, t) {
  // t in [0,1]
  let dist = t * total
  for (let i = 0; i < segLengths.length; i++) {
    if (dist <= segLengths[i]) {
      const a = points[i]
      const b = points[i + 1]
      const ratio = segLengths[i] === 0 ? 0 : dist / segLengths[i]
      const x = a.x + (b.x - a.x) * ratio
      const y = a.y + (b.y - a.y) * ratio
      return { x, y }
    }
    dist -= segLengths[i]
  }
  // fallback last point
  const last = points[points.length - 1]
  return { x: last.x, y: last.y }
}

const CircuitBackground = () => {
  const containerRef = useRef(null)
  const baseCanvasRef = useRef(null)
  const animCanvasRef = useRef(null)
  const rafRef = useRef(null)
  const pathsRef = useRef([])
  const pulsesRef = useRef([])
  const dprRef = useRef(1)

  useEffect(() => {
    const baseCanvas = baseCanvasRef.current
    const animCanvas = animCanvasRef.current
    const container = containerRef.current
    if (!baseCanvas || !animCanvas || !container) return

    const ctxBase = baseCanvas.getContext('2d')
    const ctxAnim = animCanvas.getContext('2d')

    let rafId = null

    function resize() {
      const rect = container.getBoundingClientRect()
      const w = Math.max(300, Math.floor(rect.width))
      const h = Math.max(200, Math.floor(rect.height))
      const dpr = Math.max(1, window.devicePixelRatio || 1)
      dprRef.current = dpr

      baseCanvas.width = Math.floor(w * dpr)
      baseCanvas.height = Math.floor(h * dpr)
      baseCanvas.style.width = `${w}px`
      baseCanvas.style.height = `${h}px`
      ctxBase.setTransform(dpr, 0, 0, dpr, 0, 0)

      animCanvas.width = Math.floor(w * dpr)
      animCanvas.height = Math.floor(h * dpr)
      animCanvas.style.width = `${w}px`
      animCanvas.style.height = `${h}px`
      ctxAnim.setTransform(dpr, 0, 0, dpr, 0, 0)

      // regenerate grid-aligned paths
      const cols = Math.max(4, Math.floor(w / GRID_SIZE))
      const rows = Math.max(4, Math.floor(h / GRID_SIZE))
      const paths = []
      for (let i = 0; i < TRACK_COUNT; i++) {
        const pts = generateOrthogonalPath(cols, rows, GRID_SIZE)
        const { segLengths, total } = computeLengths(pts)
        paths.push({ pts, segLengths, total })
      }
      pathsRef.current = paths

      // prepare pulses: for each path, create a couple moving nodes
      const pulses = []
      for (let i = 0; i < paths.length; i++) {
        const p = paths[i]
        const pulseCount = 2
        for (let j = 0; j < pulseCount; j++) {
          pulses.push({
            pathIndex: i,
            t: (j / pulseCount) * 1.0,
            speed: 0.02 + Math.random() * 0.03 // fraction per second
          })
        }
      }
      pulsesRef.current = pulses

      // draw static base tracks
      drawBase()
    }

    function drawBase() {
      const ctx = ctxBase
      const canvas = baseCanvas
      ctx.clearRect(0, 0, canvas.width / dprRef.current, canvas.height / dprRef.current)
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'
      ctx.strokeStyle = 'rgba(99,102,241,0.07)'
      ctx.lineWidth = 2

      const paths = pathsRef.current
      for (let i = 0; i < paths.length; i++) {
        const { pts } = paths[i]
        if (!pts || pts.length < 2) continue
        ctx.beginPath()
        ctx.moveTo(pts[0].x + 0.5, pts[0].y + 0.5)
        for (let k = 1; k < pts.length; k++) ctx.lineTo(pts[k].x + 0.5, pts[k].y + 0.5)
        ctx.stroke()
      }
    }

    let last = performance.now()
    function loop(now) {
      const dt = Math.min(60, now - last) / 1000
      last = now

      const ctx = ctxAnim
      const canvas = animCanvas

      // fade previous frame slightly to create trails
      ctx.fillStyle = 'rgba(250,250,250,0.12)'
      ctx.fillRect(0, 0, canvas.width / dprRef.current, canvas.height / dprRef.current)

      // draw pulses
      const pulses = pulsesRef.current
      const paths = pathsRef.current
      for (let i = 0; i < pulses.length; i++) {
        const pu = pulses[i]
        const path = paths[pu.pathIndex]
        if (!path) continue
        // advance along path
        pu.t += pu.speed * dt
        if (pu.t > 1) pu.t -= 1

        const pos = pointAt(path.pts, path.segLengths, path.total, pu.t)

        // draw glowing node
        ctx.beginPath()
        ctx.fillStyle = '#4f46e5'
        ctx.shadowBlur = 18
        ctx.shadowColor = '#4f46e5'
        ctx.globalCompositeOperation = 'lighter'
        ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2)
        ctx.fill()
        // small solid center
        ctx.shadowBlur = 0
        ctx.globalCompositeOperation = 'source-over'
        ctx.beginPath()
        ctx.fillStyle = '#4f46e5'
        ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      rafId = requestAnimationFrame(loop)
      rafRef.current = rafId
    }

    // initialize
    resize()

    // use ResizeObserver to handle container size changes
    const ro = new ResizeObserver(() => {
      // throttle via rAF
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      resize()
    })
    ro.observe(container)

    rafId = requestAnimationFrame(loop)
    rafRef.current = rafId

    return () => {
      // cleanup
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      pathsRef.current = []
      pulsesRef.current = []
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full bg-[#fafafa] relative" style={{ minHeight: 260 }}>
      <canvas ref={baseCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <canvas ref={animCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  )
}

export default CircuitBackground
