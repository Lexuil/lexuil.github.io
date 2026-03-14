import type { Profile } from '@/types/profile'

export const profile: Profile = {
  name: 'Oscar Umaña',
  email: 'dev@lexuil.com',
  location: 'Bogotá, Colombia',
  social: {
    github: 'https://github.com/Lexuil',
    linkedin: 'https://linkedin.com/in/lexuil'
  },
  locales: {
    es: {
      title: 'Full Stack Developer & AI Solutions Architect',
      tagline: 'Transformando arquitecturas complejas en experiencias digitales de alto impacto.',
      bio: 'Ingeniero Electrónico y desarrollador Full Stack especializado en el ecosistema de TypeScript y AWS. Me apasiona cerrar la brecha entre la ingeniería de sistemas robustos y la creación de interfaces intuitivas impulsadas por Inteligencia Artificial.',
      extendedBio:
        'Con más de 3 años de experiencia, he diseñado soluciones escalables que van desde motores de e-commerce personalizados hasta plataformas omnicanal que gestionan miles de conversaciones automatizadas. Mi enfoque se centra en la arquitectura de software, monorepos y la integración estratégica de LLMs para optimizar procesos de negocio y mejorar la experiencia del usuario.'
    },
    en: {
      title: 'Full Stack Developer & AI Solutions Architect',
      tagline: 'Engineering the bridge between complex architecture and seamless user experiences.',
      bio: 'Electronics Engineer and Full Stack Developer expert in TypeScript and the AWS ecosystem. I thrive at the intersection of robust backend engineering and AI-driven frontend experiences.',
      extendedBio:
        "With 3+ years of experience, I've built everything from high-volume messaging microservices to complex e-commerce engines. I specialize in architecting scalable solutions using AWS (Bedrock, Lambda, ECS) and modern web technologies. My track record includes leading the development of platforms handling 16k+ monthly interactions and contributing to open-source tools for the WhatsApp Cloud API."
    }
  }
}
