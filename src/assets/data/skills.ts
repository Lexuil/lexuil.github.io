import type { SkillCategory } from '@/types/skills'

export const skills: { categories: SkillCategory[] } = {
  categories: [
    {
      name: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS']
    },
    {
      name: 'Frameworks',
      skills: ['React', 'Next.js', 'Node.js', 'Vue.js', 'Express']
    },
    {
      name: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma']
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase']
    }
  ]
}
