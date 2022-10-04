import { DataSource } from 'typeorm'
import { Category, Customer, Product, Role, Supplier } from './models'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'inventory',
  synchronize: true,
  logging: false,
  entities: [Category, Supplier, Product, Role, Customer],
  subscribers: [],
  migrations: [],
})

AppDataSource
  .createQueryBuilder()
  .insert()
  .into(Role)
  .values([{
    role_name: "admin"
  }])
  .execute()
