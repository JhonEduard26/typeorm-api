import { Router } from 'express';
import {
  createSupplier,
  deleteSupplier,
  getAllSuppliers,
  getSupplier,
  updateSupplier
} from '../controllers/supplier.controller';

export const supplierRoute = Router()

supplierRoute.get('/suppliers/:id', getSupplier)

supplierRoute.get('/suppliers', getAllSuppliers)

supplierRoute.post('/suppliers', createSupplier)

supplierRoute.put('/suppliers/:id', updateSupplier)

supplierRoute.delete('/suppliers/:id', deleteSupplier)