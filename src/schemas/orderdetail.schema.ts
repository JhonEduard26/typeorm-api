import { z } from 'zod'

//  todo: probar numeros decimales
const quantity = z.number().positive()
const product = z.number().positive()
const order = z.number().positive()

export const createOrderDetailSchema = z.object({
  quantity,
  product,
  order,
})

export const updateOrderDetailSchema = z.object({
  quantity: quantity.optional(),
  product: product.optional(),
  order: order.optional(),
})