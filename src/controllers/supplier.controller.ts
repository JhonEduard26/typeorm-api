import { Request, Response } from 'express'
import { Supplier } from '../models'

export const getSupplier = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const supplier = await Supplier.findOneBy({
      supplier_id: Number(id),
    })

    if (supplier) {
      return res.json({
        ok: true,
        supplier,
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Supplier doesn\'t exists',
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

export const getAllSuppliers = async (req: Request, res: Response) => {

  try {
    const suppliers = await Supplier.find()
    return res.json({
      ok: true,
      suppliers,
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

export const createSupplier = async (req: Request, res: Response) => {
  try {
    const { name, address, phone, email } = req.body

    const supplier = new Supplier()
    supplier.name = name
    supplier.address = address
    supplier.phone = phone
    supplier.email = email

    await supplier.save()

    return res.status(201).json({
      ok: true,
      supplier,
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

export const updateSupplier = async (req: Request, res: Response) => {
  try {
    // const { name, address, phone, email } = req.body
    const { id } = req.params
    const supplier = await Supplier.findOneBy({
      supplier_id: Number(id),
    })

    if (supplier) {

      await Supplier.update({ supplier_id: Number(id) }, req.body)

      return res.json({
        ok: true,
        message: 'updated',
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Supplier doesn\'t exists',
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

export const deleteSupplier = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const supplier = await Supplier.findOneBy({
      supplier_id: Number(id),
    })

    if (supplier) {
      await Supplier.remove(supplier)
      return res.json({
        ok: true,
        supplier,
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Supplier doesn\'t exists',
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