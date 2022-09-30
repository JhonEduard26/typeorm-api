import express from 'express'
import cors from 'cors'
import categoryRoute from './routes/category.route'

const app = express()
app.use(cors())
app.use(express.json())

app.use(categoryRoute)

export default app