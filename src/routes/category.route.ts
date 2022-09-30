import { Router } from 'express'
import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from '../controllers/category.controller'

export const categoryRoute = Router()

categoryRoute.get('/categories/:id', getCategory)

categoryRoute.get('/categories', getAllCategories)

categoryRoute.post('/categories', createCategory)

categoryRoute.put('/categories/:id', updateCategory)

categoryRoute.delete('/categories/:id', deleteCategory)