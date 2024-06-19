import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import embeds from "astro-embed/integration";
import rehypePrettyCode from "rehype-pretty-code";
import moonlightTheme from "./src/assets/themes/moonlight.json";
import { transformerCopyButton } from "@rehype-pretty/transformers";

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
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: moonlightTheme,
          transformers: [
            transformerCopyButton({
              visibility: "hover",
              feedbackDuration: 2_500,
            }),
          ],
        },
      ],
    ],
  },
});
