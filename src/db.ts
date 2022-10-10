import { DataSource } from 'typeorm'
import { Category, Customer, Product, Supplier, Order } from './models'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'inventory',
  synchronize: true,
  logging: false,
  entities: [Category, Supplier, Product, Customer, Order],
  subscribers: [],
  migrations: [],
})