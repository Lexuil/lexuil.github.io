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
      title: 'Desarrollador Full Stack',
      tagline: 'Construyendo experiencias digitales que son de otro mundo.',
      bio: 'Soy un desarrollador apasionado que ama crear soluciones elegantes para problemas complejos. Mi trabajo se encuentra en la intersección del diseño y la ingeniería, creando experiencias que no solo son funcionales sino también agradables de usar.',
      extendedBio:
        'Con más de 3 años de experiencia en desarrollo web, he tenido la oportunidad de trabajar en proyectos que van desde pequeñas startups hasta grandes empresas. Creo en escribir código limpio y mantenible y en aprender continuamente nuevas tecnologías.'
    },
    en: {
      title: 'Full Stack Developer',
      tagline: 'Building digital experiences that are out of this world.',
      bio: "I'm a passionate developer who loves crafting elegant solutions to complex problems. My work lies at the intersection of design and engineering, creating experiences that are not only functional but also delightful to use.",
      extendedBio:
        "With over 3 years of experience in web development, I've had the opportunity to work on projects ranging from small startups to large enterprises. I believe in writing clean, maintainable code and continuously learning new technologies."
    }
  }
}
