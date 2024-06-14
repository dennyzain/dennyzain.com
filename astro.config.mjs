import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import embeds from "astro-embed/integration"

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["res.cloudinary"],
    remotePatterns: [{ protocol: "https" }],
  },
  site: "https://dennyzain.com",
  integrations: [
    embeds(),
    mdx(),
    sitemap(),
    tailwind(),
    icon({ iconDir: "src/assets/icons" }),
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      langs: [],
      wrap: true,
      transformers: [],
    },
  },
});
