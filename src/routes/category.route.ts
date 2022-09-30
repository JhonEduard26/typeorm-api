import { Router } from 'express'
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
  updateCategory
} from '../controllers/category.controller'
import { schemaValidator } from '../middlewares/schemaValidator'
import { createCategorySchema, updateCategorySchema } from '../schemas/category.schema'

export const categoryRoute = Router()

categoryRoute.get('/categories/:id', getCategory)

categoryRoute.get('/categories', getAllCategories)

categoryRoute.post(
  '/categories',
  schemaValidator(createCategorySchema, "body"),
  createCategory
)

categoryRoute.patch(
  '/categories/:id',
  schemaValidator(updateCategorySchema, "body"),
  updateCategory
)

categoryRoute.delete(
  '/categories/:id',
  deleteCategory
)