import { Request, Response } from 'express'
import { Category } from '../models/category.model'

export const getAllCategories = (req: Request, res: Response) => {
  return res.json({
    ok: true,
    message: 'All categories',
  })
}

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { category_name, description } = req.body

    const category = new Category()
    category.category_name = category_name
    category.description = description

    await category.save()

    return res.status(201).json({
      ok: true,
      message: category,
    })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        ok: false,
        error: error.message
      })
    }
  }
}