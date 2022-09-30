import { Router } from 'express'
import { createCategory, getAllCategories } from '../controllers/category.controller'

const router = Router()

router.get('/categories', getAllCategories)

router.post('/categories', createCategory)

export default router