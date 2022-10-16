import { z } from 'zod'

const product_name = z.string().min(2)
const bar_code = z.string().min(7)
const product_price = z.number().min(100)
const stock_quantity = z.number().positive()
const status = z.boolean()
const other_details = z.string().min(2)
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
  other_details: other_details.optional(),
  category,
})

export const updateProductSchema = z.object({
  product_name: product_name.optional(),
  bar_code: bar_code.optional(),
  product_price: product_price.optional(),
  stock_quantity: stock_quantity.optional(),
  status: status.optional(),
  other_details: other_details.optional(),
  category: category.optional(),
})