'use client'

import { useEffect, useState } from 'react'

export function Planets() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large ringed planet - top right */}
      <div
        className={`absolute top-[10%] right-[8%] transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-float"
        >
          {/* Planet body */}
          <circle
            cx="60"
            cy="60"
            r="35"
            fill="rgba(140, 180, 200, 0.04)"
            stroke="rgba(140, 180, 200, 0.15)"
            strokeWidth="1"
          />
          {/* Inner circle detail */}
          <circle
            cx="60"
            cy="60"
            r="25"
            fill="none"
            stroke="rgba(140, 180, 200, 0.08)"
            strokeWidth="0.5"
          />
          {/* Ring - back */}
          <ellipse
            cx="60"
            cy="60"
            rx="55"
            ry="14"
            fill="none"
            stroke="rgba(140, 180, 200, 0.12)"
            strokeWidth="1"
            strokeDasharray="2 3"
            transform="rotate(-15 60 60)"
          />
          {/* Ring - front */}
          <ellipse
            cx="60"
            cy="60"
            rx="48"
            ry="11"
            fill="none"
            stroke="rgba(140, 180, 200, 0.08)"
            strokeWidth="0.5"
            transform="rotate(-15 60 60)"
          />
        </svg>
      </div>

      {/* Medium planet - bottom left */}
      <div
        className={`absolute bottom-[20%] left-[8%] transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        <svg
          viewBox="0 0 80 80"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-float-slow"
        >
          {/* Planet body */}
          <circle
            cx="40"
            cy="40"
            r="28"
            fill="rgba(160, 140, 180, 0.03)"
            stroke="rgba(160, 140, 180, 0.12)"
            strokeWidth="1"
          />
          {/* Surface line details */}
          <path
            d="M 20 35 Q 40 32 60 38"
            fill="none"
            stroke="rgba(160, 140, 180, 0.08)"
            strokeWidth="0.5"
          />
          <path
            d="M 22 45 Q 40 48 58 43"
            fill="none"
            stroke="rgba(160, 140, 180, 0.06)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Small moon - middle right */}
      <div
        className={`absolute top-[45%] right-[20%] transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{ transitionDelay: '600ms' }}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 animate-float-reverse"
        >
          {/* Moon body */}
          <circle
            cx="20"
            cy="20"
            r="12"
            fill="rgba(200, 200, 210, 0.03)"
            stroke="rgba(200, 200, 210, 0.15)"
            strokeWidth="1"
          />
          {/* Craters */}
          <circle
            cx="16"
            cy="18"
            r="3"
            fill="none"
            stroke="rgba(200, 200, 210, 0.1)"
            strokeWidth="0.5"
          />
          <circle
            cx="24"
            cy="22"
            r="2"
            fill="none"
            stroke="rgba(200, 200, 210, 0.08)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Tiny moon - top left */}
      <div
        className={`absolute top-[25%] left-[25%] transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 md:w-6 md:h-6 animate-float"
          style={{ animationDelay: '1s' }}
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            fill="rgba(180, 200, 220, 0.03)"
            stroke="rgba(180, 200, 220, 0.12)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Extra small distant planet - bottom right */}
      <div
        className={`absolute bottom-[35%] right-[35%] transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        <svg
          viewBox="0 0 20 20"
          className="w-4 h-4 md:w-5 md:h-5 animate-float-slow"
          style={{ animationDelay: '0.5s' }}
        >
          <circle
            cx="10"
            cy="10"
            r="6"
            fill="rgba(170, 180, 200, 0.02)"
            stroke="rgba(170, 180, 200, 0.1)"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  )
}
