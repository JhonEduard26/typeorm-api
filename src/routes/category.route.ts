import { Router } from 'express'
import { createCategory, deleteCategory, getAllCategories, updateCategory } from '../controllers/category.controller'

const router = Router()

router.get('/categories', getAllCategories)

router.post('/categories', createCategory)

router.put('/categories/:id', updateCategory)

router.delete('/categories/:id', deleteCategory)

export default router