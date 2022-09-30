import { DataSource } from 'typeorm'
import { Category } from './models/category.model'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'inventory',
  synchronize: true,
  logging: false,
  entities: [Category],
  subscribers: [],
  migrations: [],
})