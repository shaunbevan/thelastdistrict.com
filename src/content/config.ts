import { defineCollection, z } from 'astro:content';

// Define the schema for the patch notes collection
const patchNotesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    version: z.string().optional(),
    date: z.string().optional(),
  })
});

export const collections = {
  'patch-notes': patchNotesCollection,
}; 