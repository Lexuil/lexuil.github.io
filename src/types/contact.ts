import type { Locales } from "src/types/locales"

export interface Contact {
  fullname: string
  email: string
  linkedin: string
  github: string
  locales: Record<Locales, {
    role: string
    description: string
  }>
}
