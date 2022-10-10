import express from 'express'
import cors from 'cors'
import {
  categoryRoute,
  customerRoute,
  productRoute,
  supplierRoute,
  orderRoute,
  orderDetailRoute
} from './routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use(categoryRoute)
app.use(supplierRoute)
app.use(productRoute)
app.use(customerRoute)
app.use(orderRoute)
app.use(orderDetailRoute)

export default app