import { z } from 'zod'

//  todo: probar numeros decimales

const unit_price = z.number().positive()
const quantity = z.number().positive()
const product = z.number().positive()
const order = z.number().positive()

export const createOrderDetailSchema = z.object({
  unit_price,
  quantity,
  product,
  order,
})

export const updateOrderDetailSchema = z.object({
  unit_price: unit_price.optional(),
  quantity: quantity.optional(),
  product: product.optional(),
  order: order.optional(),
})