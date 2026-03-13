import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 1,
    technologies: ['TypeScript', 'Rollup', 'Turborepo', 'WhatsApp'],
    liveUrl: 'https://ws-cloud-api.lexuil.com',
    githubUrl: 'https://github.com/Lexuil/ws-cloud-api',
    screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    screenshotMobile:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop',
    locales: {
      es: {
        title: 'Ws Cloud API',
        description:
          'WhatsApp API para node.js que permite enviar mensajes, mensajes interactivos, imágenes, videos y documentos, con una interfaz fácil de usar y documentación completa.'
      },
      en: {
        title: 'Ws Cloud API',
        description:
          'WhatsApp API for node.js that allows sending messages, interactive messages, images, videos and documents, with an easy-to-use interface and complete documentation.'
      }
    }
  }
]
