'use client'
import { LazyMotion, domAnimation } from 'framer-motion'
import Planets from '@/components/planets'
import Presentation from '@/components/presentation'

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden relative">
        <Presentation />
        <Planets />
      </main>
    </LazyMotion>
  )
}
