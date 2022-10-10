import { Router } from 'express'
import {
  createOrderDetail,
  getAllOrderDetails,
  getOrderDetail,
  updateOrderDetail
} from '../controllers/orderdetail.controller'

import { schemaValidator } from '../middlewares/schemaValidator'
import {
  createOrderDetailSchema,
  updateOrderDetailSchema
} from '../schemas/orderdetail.schema'

export const orderDetailRoute = Router()

orderDetailRoute.get('/orderdetails/:id', getOrderDetail)

orderDetailRoute.get('/orderdetails', getAllOrderDetails)

orderDetailRoute.post(
  '/orderdetails',
  schemaValidator(createOrderDetailSchema, "body"),
  createOrderDetail
)

orderDetailRoute.patch(
  '/orderdetails/:id',
  schemaValidator(updateOrderDetailSchema, "body"),
  updateOrderDetail
)