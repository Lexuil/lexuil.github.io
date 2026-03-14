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
          'Desarrollé e integré herramientas personalizadas para automatizar la sincronización de inventarios y ventas entre Shopify y Word Office, optimizando la eficiencia operativa.'
      },
      en: {
        role: 'Fullstack Developer',
        description:
          'Developed and integrated custom tools to automate inventory and sales synchronization between Shopify and Word Office, streamlining operational efficiency.'
      }
    }
  },
  {
    id: 2,
    company: 'ONU Mujeres Colombia',
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
          'Lideré el desarrollo de un chatbot automatizado con AWS Lex y Lambda para facilitar el acceso a presupuestos de igualdad de género, incluyendo la generación dinámica de estadísticas visuales y dashboards de análisis.'
      },
      en: {
        role: 'Fullstack Developer',
        description:
          'Led the development of an automated chatbot using AWS Lex and Lambda to provide access to gender equality budgets, featuring dynamic statistics image generation and custom analytics dashboards.'
      }
    }
  },
  {
    id: 3,
    company: 'Universidad ECCI',
    companyUrl: 'https://wa.me/573162862300',
    period: '2023 - Presente',
    currentActive: true,
    technologies: [],
    technologiesByYear: [
      {
        year: '2023',
        technologies: ['IBM Cloud', 'Docker', 'WhatsApp', 'MongoDB', 'React', 'Express']
      },
      {
        year: '2024',
        technologies: ['IBM Cloud', 'Docker', 'WhatsApp', 'MongoDB', 'Next.js', 'Tailwind CSS']
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
          'PostgreSQL',
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
          'PostgreSQL',
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
        description:
          'Diseñé una plataforma omnicanal que gestiona más de 16k conversaciones mensuales, implementando una infraestructura de monorepo (Turborepo) e integrando LLMs a través de AWS Bedrock para atención automatizada ademas de un dashboard para comunicación en tiempo real entre usuarios y agentes humanos.'
      },
      en: {
        role: 'Fullstack Developer',
        description:
          'Architected an omni-channel platform handling 16k+ monthly interactions, implementing a monorepo structure (Turborepo) and integrating LLMs via AWS Bedrock for automated customer service, along with a real-time dashboard for seamless communication between users and human agents.'
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
        description:
          'Implementé y personalicé soluciones de e-commerce sobre WooCommerce para optimizar la distribución nacional de contenido editorial.'
      },
      en: {
        role: 'Web Developer',
        description:
          'Implemented and customized e-commerce solutions on WooCommerce to optimize national editorial content distribution.'
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
        description:
          'Diseñé y construí una landing page de precentación de la marca, introduciendo animaciones personalizadas y optimizando la experiencia móvil para aumentar la retención de visitantes.'
      },
      en: {
        role: 'Frontend Developer',
        description:
          'Designed and built a brand presentation landing page, introducing custom animations and optimizing the mobile experience to increase visitor retention.'
      }
    }
  },
  {
    id: 6,
    company: 'Mangalianza',
    companyUrl: 'https://mangalianza.com/',
    period: '2022 - Presente',
    currentActive: true,
    technologies: [],
    technologiesByYear: [
      {
        year: '2022',
        technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'Minio', 'MySql', 'Docker', 'Coolify']
      },
      {
        year: '2026',
        technologies: ['Nuxt', 'Tailwind CSS', 'SQLite', 'Cloudflare']
      }
    ],
    locales: {
      es: {
        role: 'Desarrollador Fullstack',
        description:
          'Diseñé un motor de e-commerce personalizado con Laravel y Vue.js para la gestión de catálogos multiregión, automatizando el despliegue y la orquestación de servidores con Coolify y Docker.'
      },
      en: {
        role: 'Fullstack Developer',
        description:
          'Engineered a custom Laravel/Vue.js e-commerce engine for multi-region catalog management, automating server orchestration and deployment using Coolify and Docker.'
      }
    }
  }
]
