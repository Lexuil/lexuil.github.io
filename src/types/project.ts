import type { Locales } from '@/types/locales'

export interface Project {
  id: number
  technologies: string[]
  liveUrl: string
  githubUrl: string
  screenshot: string
  screenshotMobile: string
  locales: Record<
    Locales,
    {
      title: string
      description: string
    }
  >
}
