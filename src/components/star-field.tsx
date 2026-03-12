'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  layer: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let stars: Star[] = []
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * 2
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      const numStars = Math.floor((canvas.width * canvas.height) / 6000)
      stars = []
      for (let i = 0; i < numStars; i++) {
        const layer = Math.random() < 0.3 ? 0 : Math.random() < 0.6 ? 1 : 2
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5 + layer * 0.3,
          opacity: Math.random() * 0.6 + 0.2,
          twinkleSpeed: Math.random() * 0.002 + 0.001,
          layer
        })
      }
    }

    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }

    const animate = () => {
      time += 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const baseHorizontalOffset = time * 0.15
      const scrollParallax = scrollRef.current

      stars.forEach((star) => {
        const layerSpeed = (star.layer + 1) * 0.5
        const horizontalOffset = (baseHorizontalOffset * layerSpeed) % canvas.width
        const parallaxOffset = (scrollParallax * (star.layer + 1) * 0.1) % canvas.height

        let drawX = star.x - horizontalOffset
        let drawY = star.y + parallaxOffset

        if (drawX < 0) drawX += canvas.width
        if (drawY > canvas.height) drawY -= canvas.height
        if (drawY < 0) drawY += canvas.height

        const twinkle = Math.sin(time * star.twinkleSpeed + star.x) * 0.3 + 0.7
        const currentOpacity = star.opacity * twinkle

        ctx.beginPath()
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 220, 255, ${currentOpacity})`
        ctx.fill()

        if (drawX < canvas.width / 2) {
          ctx.beginPath()
          ctx.arc(drawX + canvas.width, drawY, star.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(200, 220, 255, ${currentOpacity})`
          ctx.fill()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('scroll', handleScroll, { passive: true })
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
  )
}
