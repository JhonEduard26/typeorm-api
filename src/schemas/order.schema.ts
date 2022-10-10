import { z } from 'zod'

const order_details = z.string().min(2).optional()
const customer = z.number().positive()

export const createOrderSchema = z.object({
  order_details,
  customer,
})

export const updateOrderSchema = z.object({
  order_details,
  customer: customer.optional(),
})