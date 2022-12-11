import { Request, Response } from 'express'
import { Order } from '../models'

export const getOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const order = await Order.find({
      relations: {
        customer: true,
      },
      where: {
        id: Number(id),
      }
    })

    if (order) {
      return res.json({
        ok: true,
        order,
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Order doesn\'t exists',
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

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find()
    return res.json({
      ok: true,
      orders,
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

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { details, customer } = req.body

    const order = new Order()
    order.details = details
    order.customer = customer

    await order.save()

    return res.status(201).json({
      ok: true,
      order,
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

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const order = await Order.findOneBy({
      id: Number(id),
    })

    if (order) {
      await Order.update({ id: Number(id) }, req.body)

      return res.json({
        ok: true,
        message: 'updated',
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Order doesn\'t exists',
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

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const order = await Order.findOneBy({
      id: Number(id),
    })

    if (order) {
      await Order.remove(order)

      return res.json({
        ok: true,
        order,
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Order doesn\'t exists',
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