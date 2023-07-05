import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string("my first blog"),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string("welcome to my blog page"),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;

export const blogerSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string("my first blog"),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string("welcome to my blog page"),
  })
  .strict();

export type blogerFrontmatter = z.infer<typeof blogerSchema>;

