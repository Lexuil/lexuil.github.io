import {
  defineConfig,
  squooshImageService
} from 'astro/config';

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind(), icon()]
});