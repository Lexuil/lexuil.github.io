import type { SkillCategory } from '@/types/skills'

export const skills: { categories: SkillCategory[] } = {
  categories: [
    {
      locales: {
        en: {
          name: 'Languages'
        },
        es: {
          name: 'Lenguajes'
        }
      },
      skills: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS']
    },
    {
      locales: {
        en: {
          name: 'Frameworks'
        },
        es: {
          name: 'Frameworks'
        }
      },
      skills: ['React', 'Next.js', 'Node.js', 'Vue.js', 'Express']
    },
    {
      locales: {
        en: {
          name: 'Tools & Platforms'
        },
        es: {
          name: 'Herramientas y plataformas'
        }
      },
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma']
    },
    {
      locales: {
        en: {
          name: 'Databases'
        },
        es: {
          name: 'Bases de datos'
        }
      },
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase']
    }
  ]
}
