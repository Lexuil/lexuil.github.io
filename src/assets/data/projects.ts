import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 1,
    technologies: ['TypeScript', 'Rollup', 'Turborepo', 'WhatsApp'],
    liveUrl: 'https://ws-cloud-api.lexuil.com',
    githubUrl: 'https://github.com/Lexuil/ws-cloud-api',
    screenshot: '/images/projects/ws-cloud-api.webp',
    screenshotMobile: '/images/projects/ws-cloud-api-mobile.webp',
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
