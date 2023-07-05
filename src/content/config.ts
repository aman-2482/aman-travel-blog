import { defineCollection } from "astro:content";
import { blogSchema, blogerSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
 
});



const bloger = defineCollection({
  schema: blogerSchema,
 
});

export const collections = { bloger,blog };
