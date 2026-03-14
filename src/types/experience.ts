import type { Locales } from '@/types/locales'

export interface ExperienceTechnologiesByYear {
  year: string
  technologies: string[]
}

export interface Experience {
  id: number
  company: string
  companyUrl: string
  period: string
  currentActive?: boolean
  technologies: string[]
  technologiesByYear?: ExperienceTechnologiesByYear[]
  locales: Record<
    Locales,
    {
      description: string
      role: string
    }
  >
}
