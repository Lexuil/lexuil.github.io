import type { Experience } from '@/types/experience'

export const experience: Experience[] = [
  {
    id: 1,
    company: 'Biosuministros',
    companyUrl: 'https://biosuministros.lexuil.com',
    period: '2025',
    technologies: ['Nuxt', 'Cloudflare', 'Shopify'],
    locales: {
      es: {
        role: 'Desarrollador Fullstack',
        description:
          'Herramientas personalizadas para la gestión de inventarios y ventas con Shopify y Word Office'
      },
      en: {
        role: 'Fullstack Developer',
        description: 'Custom tools for inventory and sales management with Shopify and Word Office'
      }
    }
  },
  {
    id: 2,
    company: 'Chatbot Presupuestos para la igualdad - ONU Mujeres',
    companyUrl: 'https://wa.me/573016697206',
    period: '2024 - 2025',
    technologies: [
      'AWS',
      'Terraform',
      'Next.js',
      'Tailwind CSS',
      'DynamoDB',
      'S3',
      'Docker',
      'WhatsApp'
    ],
    locales: {
      es: {
        role: 'Desarrollador Fullstack',
        description:
          'Chatbot diseñado para mejorar la accesibilidad sobre los proyectos para la equidad de la mujer'
      },
      en: {
        role: 'Fullstack Developer',
        description: "Chatbot designed to improve accessibility about projects for women's equity"
      }
    }
  },
  {
    id: 3,
    company: 'Chatbot Universidad ECCI',
    companyUrl: 'https://wa.me/573162862300',
    period: '2023',
    currentActive: true,
    technologies: [],
    technologiesByYear: [
      {
        year: '2023',
        technologies: ['IBM Cloud', 'Docker', 'WhatsApp', 'React', 'Express', 'MongoDB']
      },
      {
        year: '2024',
        technologies: ['IBM Cloud', 'Docker', 'WhatsApp', 'Next.js', 'Tailwind CSS']
      },
      {
        year: '2025',
        technologies: [
          'AWS',
          'Terraform',
          'Next.js',
          'Nest.js',
          'Turborepo',
          'Tailwind CSS',
          'DynamoDB',
          'Redis',
          'S3',
          'Docker',
          'WhatsApp'
        ]
      },
      {
        year: '2025',
        technologies: [
          'AWS',
          'Terraform',
          'Next.js',
          'Nest.js',
          'Turborepo',
          'Tailwind CSS',
          'DynamoDB',
          'Redis',
          'S3',
          'Docker',
          'WhatsApp',
          'Strapi',
          'Twenty'
        ]
      }
    ],
    locales: {
      es: {
        role: 'Desarrollador Fullstack',
        description: 'Plataforma de atención al cliente para la Universidad ECCI'
      },
      en: {
        role: 'Fullstack Developer',
        description: 'Customer service platform for ECCI University'
      }
    }
  },
  {
    id: 4,
    company: 'Mangaline',
    companyUrl: 'https://mangaline.com.co/',
    period: '2023',
    technologies: ['Wordpress', 'Woocommerce'],
    locales: {
      es: {
        role: 'Desarrollador Web',
        description: 'Tienda online - Editorial de manga en español en Colombia'
      },
      en: {
        role: 'Web Developer',
        description: 'Online store - Manga publisher in Spanish in Colombia'
      }
    }
  },
  {
    id: 5,
    company: 'Mangaline',
    companyUrl: '#',
    period: '2023',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    locales: {
      es: {
        role: 'Desarrollador Frontend',
        description: 'Presentación - Editorial de manga en español en Colombia'
      },
      en: {
        role: 'Frontend Developer',
        description: 'Presentation - Manga publisher in Spanish in Colombia'
      }
    }
  },
  {
    id: 6,
    company: 'Mangalianza',
    companyUrl: 'https://mangalianza.com/',
    period: '2022',
    currentActive: true,
    technologies: [],
    technologiesByYear: [
      {
        year: '2022',
        technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'S3', 'MySql', 'Docker']
      },
      {
        year: '2026',
        technologies: ['Nuxt', 'Tailwind CSS', 'SQLite', 'Cloudflare']
      }
    ],
    locales: {
      es: {
        role: 'Desarrollador Fullstack',
        description: 'Tienda online - Distribuidora de manga en español en Colombia'
      },
      en: {
        role: 'Fullstack Developer',
        description: 'Online store - Distributor of manga in Spanish in Colombia'
      }
    }
  }
]
