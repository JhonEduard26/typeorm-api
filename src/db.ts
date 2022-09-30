import { DataSource } from 'typeorm'
import { Category, Supplier } from './models'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'inventory',
  synchronize: true,
  logging: false,
  entities: [Category, Supplier],
  subscribers: [],
  migrations: [],
})