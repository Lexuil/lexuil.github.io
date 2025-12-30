import type { Project } from "src/types/project"

export const projects: Project[] = [
  {
    name: "Biosuministros",
    date: "2025",
    image: "biosuministros.webp",
    smallImage: "biosuministros-mobile.webp",
    link: "https://biosuministros.lexuil.com",
    active: false,
    frameworks: [
      "Nuxt",
      "Cloudflare",
      "Shopify"
    ],
    locales: {
      en: {
        description: "Custom tools for inventory and sales management with Shopify and Word Office"
      },
      es: {
        description: "Herramientas personalizadas para la gestión de inventarios y ventas con Shopify y Word Office"
      }
    }
  },
  {
    name: "Ws Cloud API (Open Source)",
    date: "2024",
    image: "ws-cloud-api.webp",
    smallImage: "ws-cloud-api-mobile.webp",
    link: "https://ws-cloud-api.lexuil.com",
    active: true,
    frameworks: [
      "Typescript",
      "Rollup",
      "Turborepo",
      "WhatsApp"
    ],
    locales: {
      en: {
        description: "Library to simplify the use of the WhatsApp Cloud API"
      },
      es: {
        description: "Librería para simplificar el uso de la Cloud API de WhatsApp"
      }
    }
  },
  {
    name: "Chatbot Presupuestos para la igualdad - ONU Mujeres",
    date: "2024",
    image: "onu.webp",
    smallImage: "onu-mobile.webp",
    link: "https://wa.me/573016697206",
    active: false,
    frameworks: [
      "AWS",
      "Terrafom",
      "Next.js",
      "Tailwind CSS",
      "DynamoDB",
      "S3",
      "Docker",
      "WhatsApp"
    ],
    locales: {
      en: {
        description: "Chatbot designed to improve accessibility about projects for women's equity"
      },
      es: {
        description: "Chatbot diseñado para mejorar la accesibilidad sobre los proyectos para la equidad de la mujer"
      }
    }
  },
  {
    name: "Chatbot Universidad ECCI",
    date: "2023",
    image: "ecci.webp",
    smallImage: "ecci-mobile.webp",
    link: "https://wa.me/573162862300",
    active: true,
    frameworks: [
      "AWS",
      "Terrafom",
      "Next.js",
      "Turborepo",
      "Tailwind CSS",
      "DynamoDB",
      "S3",
      "MongoDB",
      "Docker",
      "WhatsApp"
    ],
    locales: {
      en: {
        description: "Customer service platform for ECCI University"
      },
      es: {
        description: "Plataforma de atención al cliente para la Universidad ECCI"
      }
    }
  },
  {
    name: "Mangaline",
    date: "2023",
    image: "mangaline-shop.webp",
    smallImage: "mangaline-shop-mobile.webp",
    link: "https://mangaline.com.co/",
    frameworks: [
      "Wordpress",
      "Woocommerce"
    ],
    locales: {
      en: {
        description: "Online store - Manga publisher in Spanish in Colombia"
      },
      es: {
        description: "Tienda online - Editorial de manga en español en Colombia"
      }
    }
  },
  {
    name: "Mangaline",
    date: "2023",
    image: "mangaline.webp",
    smallImage: "mangaline-mobile.webp",
    frameworks: [
      "React.js",
      "Tailwind CSS"
    ],
    locales: {
      en: {
        description: "Presentation - Manga publisher in Spanish in Colombia"
      },
      es: {
        description: "Presentación - Editorial de manga en español en Colombia"
      }
    }
  },
  {
    name: "Mangalianza",
    date: "2022",
    image: "mangalianza.webp",
    smallImage: "mangalianza-mobile.webp",
    link: "https://mangalianza.com/",
    active: true,
    frameworks: [
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "S3",
      "MySql",
      "Docker"
    ],
    locales: {
      en: {
        description: "Online store - Distributor of manga in Spanish in Colombia"
      },
      es: {
        description: "Tienda online - Distribuidora de manga en español en Colombia"
      }
    }
  }
]