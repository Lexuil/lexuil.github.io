'use client'
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'
import Planets from '@/components/planets'
import Presentation from '@/components/presentation'
import Projects from '@/components/projects'
import { ViewContext } from '@/context'
import { useState } from 'react'

export default function Home() {
  const [viewProjects, setViewProjects] = useState(false)

  return (
    <ViewContext.Provider value={setViewProjects}>
      <LazyMotion features={domAnimation}>
          <main className="min-h-screen overflow-hidden relative">
            <AnimatePresence>
              {!viewProjects && <Presentation key={'presentation'} />}
              {viewProjects && <Projects key={'projects'} />}
              <Planets key={'planets'} />
            </AnimatePresence>
          </main>
      </LazyMotion>
    </ViewContext.Provider>
  )
}
