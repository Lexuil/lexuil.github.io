import { frameworkIcons } from "@assets/data/projects-icons";
import type { Locales } from "src/types/locales";

// extract keys types from the frameworkIcons object
export type FrameworkIcons = keyof typeof frameworkIcons;

export interface Project {
  name: string
  date: string
  image: string
  smallImage: string
  active?: boolean
  link?: string
  frameworks: FrameworkIcons[]
  locales: Record<Locales, {
    description: string
  }>
}