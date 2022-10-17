import { z } from 'zod'

const category_name = z.string().min(2)

export const createCategorySchema = z.object({
  category_name,
})

export const updateCategorySchema = z.object({
  category_name: category_name.optional(),
})