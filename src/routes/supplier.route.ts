import { Router } from 'express';
import {
  createSupplier,
  deleteSupplier,
  getAllSuppliers,
  getSupplier,
  updateSupplier
} from '../controllers/supplier.controller';
import { schemaValidator } from '../middlewares/schemaValidator';
import { createSupplierSchema, updateSupplierSchema } from '../schemas/supplier.schema';

export const supplierRoute = Router()

supplierRoute.get('/suppliers/:id', getSupplier)

supplierRoute.get('/suppliers', getAllSuppliers)

supplierRoute.post(
  '/suppliers',
  schemaValidator(createSupplierSchema, "body"),
  createSupplier
)

supplierRoute.patch(
  '/suppliers/:id',
  schemaValidator(updateSupplierSchema, "body"),
  updateSupplier
)

supplierRoute.delete('/suppliers/:id', deleteSupplier)