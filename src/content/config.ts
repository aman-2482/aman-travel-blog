import { defineCollection } from "astro:content";
import { blogSchema, blogerSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
 
});

export const collections = { blog };

const bloger = defineCollection({
  schema: blogerSchema,
 
});

export const collections = { bloger };
