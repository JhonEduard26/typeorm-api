import { Request, Response } from 'express'
import { Product } from '../models'

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findOneBy({
      product_id: Number(id),
    })

    if (product) {
      return res.json({
        ok: true,
        product,
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Product doesn\'t exists',
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

export const getAllProducts = async (req: Request, res: Response) => {

  try {
    const products = await Product.find()
    return res.json({
      ok: true,
      products,
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

export const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      product_name,
      bar_code,
      product_price,
      stock_quantity,
      status,
      other_details,
      category,
    } = req.body

    const product = new Product()
    product.product_name = product_name
    product.bar_code = bar_code
    product.product_price = product_price
    product.stock_quantity = stock_quantity
    product.status = status
    product.other_details = other_details
    product.category = category

    await product.save()

    return res.status(201).json({
      ok: true,
      product,
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

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findOneBy({
      product_id: Number(id),
    })

    if (product) {
      await Product.update({ product_id: Number(id) }, req.body)

      return res.json({
        ok: true,
        message: 'updated',
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Product doesn\'t exists',
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

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findOneBy({
      product_id: Number(id),
    })

    if (product) {
      await Product.remove(product)
      return res.json({
        ok: true,
        message: product,
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Product doesn\'t exists',
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