import { defineCollection } from "astro:content";
import { blogSchema } from "./_schemas";
import { blogerSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
});

export const collections = { blog };

const bloger = defineCollection({
  schema: blogerSchema,
});

export const collections = { bloger };
