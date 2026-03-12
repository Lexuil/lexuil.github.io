import type { Locales } from '@/types/locales'

export interface Experience {
  id: number
  company: string
  companyUrl: string
  period: string
  technologies: string[]
  locales: Record<
    Locales,
    {
      description: string
      role: string
    }
  >
}
