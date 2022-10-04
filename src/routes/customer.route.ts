import { Router } from 'express';
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomer,
  updateCustomer
} from '../controllers/customer.controller';
import { schemaValidator } from '../middlewares/schemaValidator';
import { createCustomerSchema, updateCustomerSchema } from '../schemas/customer.schema';
export const customerRoute = Router()

customerRoute.get('/customers/:id', getCustomer)

customerRoute.get('/customers', getAllCustomers)

customerRoute.post(
  '/customers',
  schemaValidator(createCustomerSchema, "body"),
  createCustomer
)

customerRoute.patch(
  '/customers/:id',
  schemaValidator(updateCustomerSchema, "body"),
  updateCustomer
)

customerRoute.delete('/customers/:id', deleteCustomer)