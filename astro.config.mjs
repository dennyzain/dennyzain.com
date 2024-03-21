import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/dennyabbaszain.github.io',
  base: 'denny-abbas-zain',
  integrations: [mdx(), sitemap(), tailwind(),icon({iconDir: 'public/icons'})],
});