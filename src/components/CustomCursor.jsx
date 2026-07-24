import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const textRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const activeRef = useRef(false)
  const rafRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const cursor = cursorRef.current
    const text = textRef.current
    if (!cursor) return

    const paint = () => {
      const { x, y } = posRef.current
      const scale = activeRef.current ? 1 : 0
      cursor.style.transform =
        `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`
      cursor.style.opacity = activeRef.current ? '1' : '0'
      if (text) text.style.opacity = activeRef.current ? '1' : '0'
    }

    const schedulePaint = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(paint)
    }

    const isOverImageLink = (target) =>
      target instanceof Element && !!target.closest('.image-link')

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      activeRef.current = isOverImageLink(e.target)
      schedulePaint()
    }

    const onLeave = () => {
      activeRef.current = false
      schedulePaint()
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="cursor" ref={cursorRef} aria-hidden="true">
      <div className="cursor-text-view" ref={textRef}>
        View
        <br />
        More
      </div>
    </div>
  )
}
