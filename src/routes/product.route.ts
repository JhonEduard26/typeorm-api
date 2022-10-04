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

export const productRoute = Router()

productRoute.get('/products/:id', getProduct)

productRoute.get('/products', getAllProducts)

productRoute.post(
  '/products',
  schemaValidator(createProductSchema, "body"),
  createProduct
)

productRoute.patch(
  '/products/:id',
  schemaValidator(updateProductSchema, "body"),
  updateProduct
)

productRoute.delete(
  '/products/:id',
  deleteProduct
)