import type { Locales } from "src/types/locales"

export type PageData = Record<Locales, {
  title: string
  presentation: {
    greeting: string
    projectsButton: string
    experienceButton: string
  }
  experience: {
    subtitle: string
    title: string
  }
  projects: {
    subtitle: string
    title: string
    currently: string
  }
  footer: {
    developedBy: string
  }
  alt: {
    avatar: string
    projectScreenshot: string
  }
}>