import express from 'express'
import cors from 'cors'
import {
  categoryRoute,
  customerRoute,
  productRoute,
  orderRoute,
  orderDetailRoute
} from './routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use(categoryRoute)
app.use(productRoute)
app.use(customerRoute)
app.use(orderRoute)
app.use(orderDetailRoute)

export default app