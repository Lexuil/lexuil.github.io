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
          name: 'Frameworks & Web'
        },
        es: {
          name: 'Frameworks y web'
        }
      },
      skills: [
        'React',
        'Next.js',
        'Nuxt',
        'Vue.js',
        'Nest.js',
        'Express',
        'Laravel',
        'Wordpress',
        'Woocommerce'
      ]
    },
    {
      locales: {
        en: {
          name: 'Tools'
        },
        es: {
          name: 'Herramientas'
        }
      },
      skills: [
        'Vite',
        'Vitest',
        'Oxc',
        'Tailwind CSS',
        'Turborepo',
        'Tanstack',
        'Git',
        'Eslint',
        'Prettier'
      ]
    },
    {
      locales: {
        en: {
          name: 'Cloud & Infrastructure'
        },
        es: {
          name: 'Cloud e infraestructura'
        }
      },
      skills: ['AWS', 'Cloudflare', 'Terraform', 'SST', 'Docker', 'S3', 'Coolify', 'Vercel']
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
      skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'MySql', 'SQLite']
    },
    {
      locales: {
        en: {
          name: 'Platforms & Integrations'
        },
        es: {
          name: 'Plataformas e integraciones'
        }
      },
      skills: ['Shopify', 'WhatsApp', 'Strapi', 'Twenty', 'Resend']
    }
  ]
}
