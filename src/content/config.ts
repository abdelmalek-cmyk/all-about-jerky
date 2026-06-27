import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      primaryKeyword: z.string(),
      image: image().optional(),
      imageAlt: z.string(),
      prepTime: z.string(),
      cookTime: z.string(),
      totalTime: z.string(),
      yield: z.string(),
      category: z.string(),
      cuisine: z.string(),
      ingredients: z.array(z.string()),
      instructions: z.array(z.string()),
      nutrition: z
        .object({
          calories: z.string().optional(),
          protein: z.string().optional(),
          fat: z.string().optional(),
          sodium: z.string().optional(),
          carbs: z.string().optional(),
        })
        .optional(),
      intro: z.string().optional(),
      faq: z.array(z.object({ question: z.string(), answer: z.string() })),
      relatedPillars: z.array(z.string()),
      relatedRecipes: z.array(z.string()),
      datePublished: z.string(),
      dateModified: z.string(),
    }),
});

const guides = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      primaryKeyword: z.string(),
      image: image().optional(),
      imageAlt: z.string(),
      faq: z.array(z.object({ question: z.string(), answer: z.string() })),
      relatedPages: z.array(z.string()),
      datePublished: z.string(),
      dateModified: z.string(),
    }),
});

const cuts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      primaryKeyword: z.string(),
      image: image().optional(),
      imageAlt: z.string(),
      faq: z.array(z.object({ question: z.string(), answer: z.string() })),
      relatedPages: z.array(z.string()),
      datePublished: z.string(),
      dateModified: z.string(),
    }),
});

export const collections = { recipes, guides, cuts };
