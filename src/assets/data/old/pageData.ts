import type { PageData } from "src/types/pageData";

export const pageData: PageData = {
  en: {
    title: "Projects",
    presentation: {
      greeting: "Hello, I'm",
      projectsButton: "Projects",
      experienceButton: "Experience",
      cv: 'CV'
    },
    experience: {
      subtitle: "This is my",
      title: "Experience"
    },
    projects: {
      subtitle: "These are my",
      title: "Projects",
      currently: "Currently"
    },
    footer: {
      developedBy: "Developed by"
    },
    alt: {
      avatar: "Oscar Umaña",
      projectScreenshot: "Screenshot of project"
    }
  },
  es: {
    title: "Proyectos",
    presentation: {
      greeting: "Hola, soy",
      projectsButton: "Proyectos",
      experienceButton: "Experiencia",
      cv: 'CV'
    },
    experience: {
      subtitle: "Esta es mi",
      title: "Experiencia"
    },
    projects: {
      subtitle: "Estos son mis",
      title: "Proyectos",
      currently: "Actualidad"
    },
    footer: {
      developedBy: "Desarrollado por"
    },
    alt: {
      avatar: "Foto de Oscar Umaña",
      projectScreenshot: "Captura de pantalla del proyecto"
    }
  }
}