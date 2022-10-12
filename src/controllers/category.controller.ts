import { Request, Response } from 'express'
import { Category } from '../models/category.model'

export const getCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const category = await Category.findOneBy({
      category_id: Number(id),
    })

    if (category) {
      return res.json({
        ok: true,
        category,
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Category doesn\'t exists',
      })
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        ok: false,
        message: error.message,
      })
    }
  }
}

export const getAllCategories = async (req: Request, res: Response) => {

  try {
    const categories = await Category.find()
    return res.json({
      ok: true,
      categories,
    })

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        ok: false,
        message: error.message,
      })
    }
  }

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

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const category = await Category.findOneBy({
      category_id: Number(id),
    })

    if (category) {
      await Category.update({ category_id: Number(id) }, req.body)
      return res.json({
        ok: true,
        message: 'updated',
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Category doesn\'t exists',
      })
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        ok: false,
        message: error.message,
      })
    }
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const category = await Category.findOneBy({
      category_id: Number(id),
    })

    if (category) {
      await Category.remove(category)
      return res.json({
        ok: true,
        category,
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Category doesn\'t exists',
      })
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        ok: false,
        message: error.message,
      })
    }
  }
}