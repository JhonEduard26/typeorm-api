import { z } from 'zod'

const details = z.string().min(2).optional()
const customer = z.number().positive()

export const createOrderSchema = z.object({
  details,
  customer,
})

export const updateOrderSchema = z.object({
  details,
  customer: customer.optional(),
})