import { Router } from 'express'
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct
} from '../controllers/product.controller'

import { schemaValidator } from '../middlewares/schemaValidator'
import { createProductSchema, updateProductSchema } from '../schemas/product.schema'

export const productRouter = Router()

productRouter.get('/categories/:id', getProduct)

productRouter.get('/categories', getAllProducts)

productRouter.post(
  '/categories',
  schemaValidator(createProductSchema, "body"),
  createProduct
)

productRouter.patch(
  '/categories/:id',
  schemaValidator(updateProductSchema, "body"),
  updateProduct
)

productRouter.delete(
  '/categories/:id',
  deleteProduct
)