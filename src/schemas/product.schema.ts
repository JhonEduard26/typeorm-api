import { z } from 'zod'

const product_name = z.string().min(2)
const bar_code = z.string().min(7)
const product_price = z.number().min(100)
const stock_quantity = z.number().positive()
const status = z.boolean()
const image_url = z.string().min(5).optional()
const other_details = z.string().min(2).optional()
const category = z.number().positive()

export const getProductSchema = z.object({
  id: z.number()
})

export const createProductSchema = z.object({
  product_name,
  bar_code,
  product_price,
  stock_quantity,
  status,
  image_url,
  other_details,
  category,
})

export const updateProductSchema = z.object({
  product_name: product_name.optional(),
  bar_code: bar_code.optional(),
  product_price: product_price.optional(),
  stock_quantity: stock_quantity.optional(),
  status: status.optional(),
  image_url,
  other_details,
  category: category.optional(),
})