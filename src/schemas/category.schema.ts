import { z } from 'zod'

const category_name = z.string().min(2)
const image_url = z.string().url()

export const createCategorySchema = z.object({
  category_name,
  image_url,
})

export const updateCategorySchema = z.object({
  category_name: category_name.optional(),
  image_url: image_url.optional(),
})