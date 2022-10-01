import { z } from 'zod'

const name = z.string().min(2)
const address = z.string().min(2)
const phone = z.string().min(7)
const email = z.string().email()
const other_details = z.string().min(2).optional()

export const createSupplierSchema = z.object({
  name,
  address,
  phone,
  email,
  other_details,
})

export const updateSupplierSchema = z.object({
  name: name.optional(),
  address: address.optional(),
  phone: phone.optional(),
  email: email.optional(),
  other_details: other_details.optional(),
})