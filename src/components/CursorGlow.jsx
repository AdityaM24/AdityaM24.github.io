import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    let cx = 0, cy = 0, tx = 0, ty = 0, animId

    const onMouseMove = (e) => { tx = e.clientX; ty = e.clientY }

    const loop = () => {
      cx += (tx - cx) * 0.12
      cy += (ty - cy) * 0.12
      if (glow) {
        glow.style.left = cx + 'px'
        glow.style.top = cy + 'px'
      }
      animId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMouseMove)
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" />
}
