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

productRouter.get('/products/:id', getProduct)

productRouter.get('/products', getAllProducts)

productRouter.post(
  '/products',
  schemaValidator(createProductSchema, "body"),
  createProduct
)

productRouter.patch(
  '/products/:id',
  schemaValidator(updateProductSchema, "body"),
  updateProduct
)

productRouter.delete(
  '/products/:id',
  deleteProduct
)