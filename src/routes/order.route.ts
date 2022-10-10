import { Router } from 'express'
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrder,
  updateOrder
} from '../controllers/order.controller'
import { schemaValidator } from '../middlewares/schemaValidator'
import { createOrderSchema, updateOrderSchema } from '../schemas/order.schema'

export const orderRoute = Router()

orderRoute.get('/orders/:id', getOrder)

orderRoute.get('/orders', getAllOrders)

orderRoute.post(
  '/orders',
  schemaValidator(createOrderSchema, "body"),
  createOrder
)

orderRoute.patch(
  '/orders/:id',
  schemaValidator(updateOrderSchema, "body"),
  updateOrder
)

orderRoute.delete(
  '/orders/:id',
  deleteOrder
)