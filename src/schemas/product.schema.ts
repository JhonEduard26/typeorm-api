import { z } from 'zod'

const product_name = z.string().min(2)
const product_description = z.string().min(2)
const product_unit = z.string().min(2)
const product_price = z.number()
const product_quantity = z.number().min(1)
const product_status = z.boolean()
const other_details = z.string().min(2)
const category = z.string().min(2)

export const getProductSchema = z.object({
  id: z.number()
})

export const createProductSchema = z.object({
  product_name,
  product_description,
  product_unit,
  product_price,
  product_quantity,
  product_status,
  other_details,
  category,
})

export const updateProductSchema = z.object({
  product_name: product_name.optional(),
  product_description: product_description.optional(),
  product_unit: product_unit.optional(),
  product_price: product_price.optional(),
  product_quantity: product_quantity.optional(),
  product_status: product_status.optional(),
  other_details: other_details.optional(),
  category: category.optional(),
})