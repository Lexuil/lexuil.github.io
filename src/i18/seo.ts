import type { Locales } from '@/types/locales'

type SeoTexts = {
  title: string
  description: string
}

export const seoTexts: Record<Locales, SeoTexts> = {
  en: {
    title: 'Oscar Umaña | Full Stack Developer',
    description:
      'Portfolio of Oscar Umaña, full stack developer focused on building modern and scalable digital experiences.'
  },
  es: {
    title: 'Oscar Umaña | Desarrollador Full Stack',
    description:
      'Portafolio de Oscar Umaña, desarrollador full stack enfocado en crear experiencias digitales modernas y escalables.'
  }
}
