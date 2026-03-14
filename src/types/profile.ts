import type { Locales } from '@/types/locales'

export interface Profile {
  name: string
  email: string
  location: string
  social: {
    github: string
    linkedin: string
  }
  locales: Record<
    Locales,
    {
      title: string
      tagline: string
      bio: string
      extendedBio: string
    }
  >
}
