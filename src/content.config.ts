import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const imagePath = z.string().optional()
const tags = z.array(z.string()).optional().default([])
const editorialFields = {
  archived: z.boolean().optional().default(false),
  category: z.string().optional(),
  featuredHome: z.boolean().optional(),
  featuredIndex: z.boolean().optional(),
  featuredOrder: z.number().nullable().optional(),
}

const contentPattern = '**/*.{md,mdx}'

const blog = defineCollection({
  loader: glob({ pattern: contentPattern, base: './src/content/blog' }),
  schema: z.object({
    templateKey: z.string().optional(),
    title: z.string(),
    description: z.string().optional().default(''),
    date: z.coerce.date(),
    featuredpost: z.boolean().optional().default(false),
    featuredimage: imagePath,
    updatedDate: z.coerce.date().optional(),
    ...editorialFields,
    tags,
  }),
})

const work = defineCollection({
  loader: glob({ pattern: contentPattern, base: './src/content/work' }),
  schema: z.object({
    templateKey: z.string().optional(),
    title: z.string(),
    description: z.string().optional().default(''),
    date: z.coerce.date().optional(),
    workdate: z.string().optional(),
    featuredpost: z.boolean().optional().default(false),
    featuredimage: imagePath,
    cardimage: imagePath,
    cardcolor: z.string().optional(),
    ...editorialFields,
    summary: z.string().optional().default(''),
    roles: z.string().optional().default(''),
    learning: z.string().optional().default(''),
    showcase1: z.any().optional(),
    showcase2: z.any().optional(),
    tags,
  }),
})

const pages = defineCollection({
  loader: glob({ pattern: contentPattern, base: './src/content/pages' }),
  schema: z.object({
    templateKey: z.string().optional(),
    title: z.string(),
    image: imagePath,
    subheading: z.string().optional().default(''),
  }),
})

export const collections = { blog, work, pages }
