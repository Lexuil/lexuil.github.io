import type { Contact } from 'src/types/contact'

export const contact: Contact = {
  fullname: 'Oscar Umaña',
  email: 'dev@lexuil.com',
  linkedin: 'https://www.linkedin.com/in/lexuil/',
  github: 'https://github.com/Lexuil',
  locales: {
    en: {
      role: 'Full-stack Developer',
      description:
        'In my portfolio, you will find a variety of projects that reflect my experience as a developer. I have worked with technologies such as React, Nextjs, Vue, Nuxt, Laravel, AWS, Cloudflare, and Vercel.\n\nI also have experience in deploying and maintaining cloud services with AWS, using tools like Terraform, Docker, Serverless, and Github Actions.\n\nI invite you to explore my portfolio and discover how I can contribute to your next web project!'
    },
    es: {
      role: 'Desarrollador full-stack',
      description:
        'En mi portafolio, encontrarás una variedad de proyectos que reflejan mi experiencia como desarrollador. He trabajado con tecnologías como React, Nextjs, Vue, Nuxt, Laravel, AWS, Cloudflare y Vercel.\n\nTambién tengo experiencia en despliegue y mantenimiento de servicios en la nube con AWS, usando herramientas como Terraform, Docker, Serverless y Github Actions.\n\n¡Te invito a explorar mi portafolio y descubrir cómo puedo contribuir a tu próximo proyecto web!'
    }
  }
}
