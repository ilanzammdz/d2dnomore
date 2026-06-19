'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode, CSSProperties } from 'react'
import { motion } from 'framer-motion'

export const ELECTRIC_CONFIG = {
  timeClampSec: 0.05,
  svg: {
    strokes: {
      outer: { width: 3, color: 'rgba(173,216,230,0.75)' },
      mid: { width: 2.2, color: 'rgba(135,206,250,0.55)' },
      core: { width: 1.2, opacity: 0.95, color: 'white' },
    },
    glowBlur: 0.9,
  },
  speeds: [-1.32, 0.42, 0.95],
  shimmer: { speed: 4.2, freq: 8.5, amp: 0.25 },
  segments: 48,
  freqs: [0.7, 2.7, 3.9],
  easeStiffness: 6,
  clipOffset: 25,
  amps: [0.4, -0.8, 0.6],
} as const

interface DiagonalSliderProps {
  leftComponent?: ReactNode
  rightComponent?: ReactNode
  height?: string
}

function ShaderCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { premultipliedAlpha: false, alpha: true })
    if (!gl) return

    const vertSrc = `attribute vec2 a_position; void main(){gl_Position=vec4(a_position,0.0,1.0);}`
    const fragSrc = `
      precision highp float;
      uniform float iTime; uniform vec2 iResolution;
      vec3 random3(vec3 c){float j=4096.0*sin(dot(c,vec3(17.0,59.4,15.0)));vec3 r;r.z=fract(512.0*j);j*=.125;r.x=fract(512.0*j);j*=.125;r.y=fract(512.0*j);return r-0.5;}
      const float F3=0.3333333; const float G3=0.1666667;
      float simplex3d(vec3 p){vec3 s=floor(p+dot(p,vec3(F3)));vec3 x=p-s+dot(s,vec3(G3));vec3 e=step(vec3(0.0),x-x.yzx);vec3 i1=e*(1.0-e.zxy);vec3 i2=1.0-e.zxy*(1.0-e);vec3 x1=x-i1+G3;vec3 x2=x-i2+2.0*G3;vec3 x3=x-1.0+3.0*G3;vec4 w,d;w.x=dot(x,x);w.y=dot(x1,x1);w.z=dot(x2,x2);w.w=dot(x3,x3);w=max(0.6-w,0.0);d.x=dot(random3(s),x);d.y=dot(random3(s+i1),x1);d.z=dot(random3(s+i2),x2);d.w=dot(random3(s+1.0),x3);w*=w;w*=w;d*=w;return dot(d,vec4(52.0));}
      float noise(vec3 m){return 0.5333333*simplex3d(m)+0.2666667*simplex3d(2.0*m)+0.1333333*simplex3d(4.0*m)+0.0666667*simplex3d(8.0*m);}
      void main(){vec2 fragCoord=gl_FragCoord.xy;vec4 fragColor;vec2 uv=fragCoord.xy/iResolution.xy;uv=uv*2.-1.;vec2 p=fragCoord.xy/iResolution.x;vec3 p3=vec3(p,iTime*0.25);float intensity=noise(vec3(p3*12.0+12.0));float t=clamp((uv.x*-uv.x*0.16)+0.15,0.,1.);float y=abs(intensity*-t+uv.y);float g=pow(y,0.14);vec3 col=vec3(2.0,2.1,2.3);col=col*-g+col;col=col*col;col=col*col;fragColor.rgb=col;fragColor.w=dot(col,vec3(0.299,0.587,0.114));gl_FragColor=fragColor;}
    `

    const glCtx = gl

    function mkShader(type: number, src: string) {
      const s = glCtx.createShader(type)!
      glCtx.shaderSource(s, src); glCtx.compileShader(s)
      if (!glCtx.getShaderParameter(s, glCtx.COMPILE_STATUS)) { glCtx.deleteShader(s); return null }
      return s
    }

    const vs = mkShader(glCtx.VERTEX_SHADER, vertSrc)
    const fs = mkShader(glCtx.FRAGMENT_SHADER, fragSrc)
    if (!vs || !fs) return

    const prog = glCtx.createProgram()!
    glCtx.attachShader(prog, vs); glCtx.attachShader(prog, fs); glCtx.linkProgram(prog)
    if (!glCtx.getProgramParameter(prog, glCtx.LINK_STATUS)) return

    const posLoc = glCtx.getAttribLocation(prog, 'a_position')
    const timeLoc = glCtx.getUniformLocation(prog, 'iTime')
    const resLoc = glCtx.getUniformLocation(prog, 'iResolution')
    const buf = glCtx.createBuffer()
    glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf)
    glCtx.bufferData(glCtx.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), glCtx.STATIC_DRAW)

    function render(time: number) {
      if (!canvas) return
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight
      }
      glCtx.viewport(0, 0, canvas.width, canvas.height)
      glCtx.clearColor(0,0,0,0); glCtx.clear(glCtx.COLOR_BUFFER_BIT)
      glCtx.enable(glCtx.BLEND); glCtx.blendFunc(glCtx.SRC_ALPHA, glCtx.ONE_MINUS_SRC_ALPHA)
      glCtx.useProgram(prog)
      glCtx.enableVertexAttribArray(posLoc)
      glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf)
      glCtx.vertexAttribPointer(posLoc, 2, glCtx.FLOAT, false, 0, 0)
      glCtx.uniform1f(timeLoc, time * 0.001)
      glCtx.uniform2f(resLoc, canvas.width, canvas.height)
      glCtx.drawArrays(glCtx.TRIANGLES, 0, 6)
      animationFrameRef.current = requestAnimationFrame(render)
    }

    animationFrameRef.current = requestAnimationFrame(render)
    return () => cancelAnimationFrame(animationFrameRef.current)
  }, [])

  return <canvas ref={canvasRef} className={`${className} pointer-events-none bg-transparent`} style={{ display: 'block' }} />
}

export function LightningSplit({ leftComponent, rightComponent, height }: DiagonalSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(60)
  const [displayPos, setDisplayPos] = useState(60)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let raf = 0, last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(ELECTRIC_CONFIG.timeClampSec, (now - last) / 1000)
      last = now
      setTime(t => t + dt)
      setDisplayPos(p => {
        const stiffness = ELECTRIC_CONFIG.easeStiffness
        return p + (position - p) * (1 - Math.exp(-stiffness * dt))
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [position])

  const getPositionFromX = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setPosition(x < 50 ? 110 : 10)
  }

  const handleMouseMove = (e: React.MouseEvent) => getPositionFromX(e.clientX)
  const handleMouseLeave = () => setPosition(60)

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    getPositionFromX(e.touches[0].clientX)
  }
  const handleTouchEnd = () => setPosition(60)

  const clamp = (v: number) => Math.max(0, Math.min(100, v))

  const { polyPointsStr, clipPolygonStr } = useMemo(() => {
    const { segments: SEG, amps: AMPS, freqs: FREQS, speeds: SPEEDS } = ELECTRIC_CONFIG
    const topX = clamp(displayPos)
    const bottomX = clamp(displayPos - ELECTRIC_CONFIG.clipOffset)
    const pts: { x: number; y: number }[] = []
    for (let i = 0; i <= SEG; i++) {
      const tNorm = i / SEG
      const y = tNorm * 100
      const base = topX * (1 - tNorm) + bottomX * tNorm
      let off = 0
      for (let k = 0; k < AMPS.length; k++) {
        off += AMPS[k] * Math.sin(2 * Math.PI * (FREQS[k] * tNorm + SPEEDS[k] * time) + k * 1.3)
      }
      off += ELECTRIC_CONFIG.shimmer.amp * Math.sin(2 * Math.PI * (ELECTRIC_CONFIG.shimmer.freq * tNorm + ELECTRIC_CONFIG.shimmer.speed * time))
      pts.push({ y, x: clamp(base + off) })
    }
    const polyPointsStr = pts.map(p => `${p.x},${p.y}`).join(' ')
    const edgePoints = pts.map(p => `${p.x}% ${p.y}%`).join(', ')
    return { polyPointsStr, clipPolygonStr: `polygon(0% 0%, ${edgePoints}, 0% 100%)` }
  }, [displayPos, time])

  const leftClipStyle: CSSProperties & { WebkitClipPath?: string } = {
    WebkitClipPath: clipPolygonStr,
    clipPath: clipPolygonStr,
  }

  const defaultLeft = (
    <div className="flex h-full w-full items-center justify-center" style={{ background: '#04081A' }}>
      <h1 className="text-6xl font-bold text-white">A</h1>
    </div>
  )
  const defaultRight = (
    <div className="flex h-full w-full items-center justify-center" style={{ background: '#120808' }}>
      <h1 className="text-6xl font-bold text-white">B</h1>
    </div>
  )

  // Shader positioning (cosmetic — based on window size)
  const cW = typeof window !== 'undefined' ? window.innerWidth : 1920
  const cH = typeof window !== 'undefined' ? window.innerHeight : 1080
  const x1 = position, x2 = Math.max(0, Math.min(100, position - 25))
  const rX1 = (x1 / 100) * cW, rX2 = (x2 / 100) * cW
  const angle = Math.atan2(cH, rX2 - rX1) * (180 / Math.PI)
  const lineLength = Math.sqrt(Math.pow(rX2 - rX1, 2) + Math.pow(cH, 2))

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none ${height ?? 'h-screen'}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Right layer — base */}
      <div className="pointer-events-auto absolute inset-0 overflow-hidden">
        <div className="h-full w-full">{rightComponent ?? defaultRight}</div>
      </div>

      {/* Left layer — clipped */}
      <div className="pointer-events-auto absolute inset-0 overflow-hidden" style={leftClipStyle}>
        <div className="h-full w-full">{leftComponent ?? defaultLeft}</div>
      </div>

      {/* Electric arc */}
      <svg className="pointer-events-none absolute inset-0 z-30" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <filter id="electric-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={ELECTRIC_CONFIG.svg.glowBlur} result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <polyline points={polyPointsStr} fill="none" stroke={ELECTRIC_CONFIG.svg.strokes.mid.color} strokeWidth={ELECTRIC_CONFIG.svg.strokes.mid.width} vectorEffect="non-scaling-stroke" filter="url(#electric-glow)" />
        <polyline points={polyPointsStr} fill="none" stroke={ELECTRIC_CONFIG.svg.strokes.core.color} strokeOpacity={ELECTRIC_CONFIG.svg.strokes.core.opacity} strokeWidth={ELECTRIC_CONFIG.svg.strokes.core.width} vectorEffect="non-scaling-stroke" />
        <polyline points={polyPointsStr} fill="none" stroke={ELECTRIC_CONFIG.svg.strokes.outer.color} strokeWidth={ELECTRIC_CONFIG.svg.strokes.outer.width} vectorEffect="non-scaling-stroke" filter="url(#electric-glow)" />
      </svg>

      {/* Shader overlay */}
      <motion.div
        className="absolute z-20 select-none"
        animate={{ y: 0, x: rX1, rotate: angle }}
        transition={{ type: 'spring', stiffness: 120, restSpeed: 0.001, restDelta: 0.001, mass: 1.2, damping: 20 }}
        style={{ width: `${lineLength}px`, transformOrigin: 'left center' }}
      >
        <div className="h-8 w-[120vw] -translate-x-16 translate-y-2">
          <div className="pointer-events-none relative h-screen w-screen opacity-90">
            <div className="pointer-events-none absolute inset-0 z-20 h-screen w-[100vw] translate-x-[10%] -translate-y-[48%] scale-150 lg:w-screen lg:translate-x-0">
              <ShaderCanvas className="pointer-events-none h-[100vh] w-[200vw]" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
