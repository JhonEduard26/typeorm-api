import { Request, Response } from 'express'
import { OrderDetail } from '../models'

export const getOrderDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const orderdetail = await OrderDetail.findOneBy({
      id: Number(id),
    })

    if (orderdetail) {
      return res.json({
        ok: true,
        orderdetail,
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'OrderDetail doesn\'t exists',
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

export const getAllOrderDetails = async (req: Request, res: Response) => {
  try {
    const orderdetails = await OrderDetail.find({
      relations: {
        product: true,
        order: true,
      }
    })
    return res.json({
      ok: true,
      orderdetails,
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

export const createOrderDetail = async (req: Request, res: Response) => {
  try {
    const { quantity, product, order } = req.body

    const orderdetail = new OrderDetail()

    orderdetail.quantity = quantity
    orderdetail.product = product
    orderdetail.order = order

    await orderdetail.save()

    return res.status(201).json({
      ok: true,
      orderdetail,
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

export const updateOrderDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const orderdetail = await OrderDetail.findOneBy({
      id: Number(id),
    })

    if (orderdetail) {

      await OrderDetail.update({ id: Number(id) }, req.body)

      return res.json({
        ok: true,
        message: 'updated',
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'OrderDetail doesn\'t exists',
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