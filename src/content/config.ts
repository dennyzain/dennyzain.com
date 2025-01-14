import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.string().array(),
    minRead: z.number().optional(),
    authorOfBanner: z.string().optional(),
  }),
});

const project = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.string().array(),
    pubDate: z.coerce.date(),
    thumbnail: z.string(),
    link: z.string(),
  }),
});

export const collections = { blog, project };
