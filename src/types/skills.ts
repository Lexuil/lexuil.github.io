import type { Locales } from '@/types/locales'

export interface SkillCategory {
  skills: string[]
  locales: Record<
    Locales,
    {
      name: string
    }
  >
}

export interface SkillsSectionProps {
  skillCategories: SkillCategory[]
}
