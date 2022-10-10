import { z } from 'zod'

const full_name = z.string().min(2)
const address = z.string().min(2)
const phone = z.string().min(7)
const email = z.string().email()
const password = z.string().min(6)

export const createCustomerSchema = z.object({
  full_name,
  address,
  phone,
  email,
  password,
})

export const updateCustomerSchema = z.object({
  full_name: full_name.optional(),
  address: address.optional(),
  phone: phone.optional(),
  email: email.optional(),
  password: password.optional(),
})