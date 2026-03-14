import type { Locales } from '@/types/locales'

type NavItem = {
  label: string
  href: string
}

type SectionTexts = {
  hero: {
    greeting: string
    downloadCv: string
    socialAriaLabels: {
      downloadCv: string
      github: string
      linkedin: string
      email: string
    }
  }
  navigation: {
    items: NavItem[]
    toggleMenuAriaLabel: string
  }
  sectionHeadings: {
    experience: string
    projects: string
    skills: string
  }
  experienceItem: {
    present: string
    activeStatus: string
  }
  projectCard: {
    viewProject: string
    featuredProject: string
    code: string
    live: string
    screenshotAlt: (title: string) => string
    mobileScreenshotAlt: (title: string) => string
    githubAriaLabel: (title: string) => string
    liveDemoAriaLabel: (title: string) => string
  }
  footer: {
    title: string
    description: string
    builtWithAstro: string
  }
}

export const sectionTexts: Record<Locales, SectionTexts> = {
  en: {
    hero: {
      greeting: 'Hi, I am',
      downloadCv: 'Download CV',
      socialAriaLabels: {
        downloadCv: 'Download CV (PDF)',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Email'
      }
    },
    navigation: {
      items: [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' }
      ],
      toggleMenuAriaLabel: 'Toggle menu'
    },
    sectionHeadings: {
      experience: 'Experience',
      projects: 'Selected Work',
      skills: 'Technologies'
    },
    experienceItem: {
      present: 'Present',
      activeStatus: 'Active'
    },
    projectCard: {
      viewProject: 'View Project',
      featuredProject: 'FEATURED PROJECT',
      code: 'Code',
      live: 'Live',
      screenshotAlt: (title) => `${title} screenshot`,
      mobileScreenshotAlt: (title) => `${title} mobile screenshot`,
      githubAriaLabel: (title) => `GitHub repository for ${title}`,
      liveDemoAriaLabel: (title) => `Live demo for ${title}`
    },
    footer: {
      title: "Let's work together",
      description:
        "I'm currently open to new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.",
      builtWithAstro: 'Built with Astro 🚀'
    }
  },
  es: {
    hero: {
      greeting: 'Hola, soy',
      downloadCv: 'Descargar CV',
      socialAriaLabels: {
        downloadCv: 'Descargar CV (PDF)',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Correo'
      }
    },
    navigation: {
      items: [
        { label: 'Acerca', href: '#about' },
        { label: 'Experiencia', href: '#experience' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Habilidades', href: '#skills' }
      ],
      toggleMenuAriaLabel: 'Alternar menú'
    },
    sectionHeadings: {
      experience: 'Experiencia',
      projects: 'Proyectos destacados',
      skills: 'Tecnologías'
    },
    experienceItem: {
      present: 'Actualidad',
      activeStatus: 'Activo'
    },
    projectCard: {
      viewProject: 'Ver proyecto',
      featuredProject: 'PROYECTO DESTACADO',
      code: 'Código',
      live: 'Demo',
      screenshotAlt: (title) => `captura de ${title}`,
      mobileScreenshotAlt: (title) => `captura móvil de ${title}`,
      githubAriaLabel: (title) => `Repositorio en GitHub de ${title}`,
      liveDemoAriaLabel: (title) => `Demo en vivo de ${title}`
    },
    footer: {
      title: 'Trabajemos juntos',
      description:
        'Ahora mismo estoy abierto a nuevas oportunidades. Si tienes un proyecto en mente o simplemente quieres conectar, escríbeme con confianza.',
      builtWithAstro: 'Hecho con Astro 🚀'
    }
  }
}
