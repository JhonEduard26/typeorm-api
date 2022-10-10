import { Request, Response } from 'express'
import { Customer } from '../models'

// TODO: Encriptar password

export const getCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const customer = await Customer.findOneBy({
      customer_id: Number(id),
    })

    if (customer) {
      return res.json({
        ok: true,
        customer
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Customer doesn\'t exists',
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

export const getAllCustomers = async (req: Request, res: Response) => {

  try {
    const customers = await Customer.find()
    return res.json({
      ok: true,
      customers,
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

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const { full_name, address, phone, email, password } = req.body

    const customer = new Customer()
    customer.full_name = full_name
    customer.address = address
    customer.phone = phone
    customer.email = email
    customer.password = password

    await customer.save()

    return res.status(201).json({
      ok: true,
      customer,
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

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const { full_name, address, phone, email, password } = req.body
    const { id } = req.params
    const customer = await Customer.findOneBy({
      customer_id: Number(id),
    })

    if (customer) {
      customer.full_name = full_name
      customer.address = address
      customer.phone = phone
      customer.email = email
      customer.password = password

      await customer.save()
      return res.json({
        ok: true,
        customer,
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Customer doesn\'t exists',
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

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const customer = await Customer.findOneBy({
      customer_id: Number(id),
    })

    if (customer) {
      await Customer.remove(customer)
      return res.json({
        ok: true,
        customer,
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Customer doesn\'t exists',
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