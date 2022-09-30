import { z } from 'zod'

const category_name = z.string().min(2)
const description = z.string().min(2)

export const getCategorySchema = z.object({
  id: z.number()
})

export const createCategorySchema = z.object({
  category_name,
  description,
})

export const updateCategorySchema = z.object({
  category_name: category_name.optional(),
  description: description.optional(),
})