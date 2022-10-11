import { DataSource } from 'typeorm'
import { Category, Customer, Product, Supplier, Order, OrderDetail } from './models'
import {
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_HOST
} from './config'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Category, Supplier, Product, Customer, Order, OrderDetail],
  subscribers: [],
  migrations: [],
})