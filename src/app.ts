import express from 'express'
import cors from 'cors'
import { categoryRoute, productRouter, supplierRoute } from './routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use(categoryRoute)
app.use(supplierRoute)
app.use(productRouter)

export default app