import { AppDataSource } from '../db'
import { Role } from '../models'

export const setDefaultRole = async () => {
  try {

    await AppDataSource
      .createQueryBuilder()
      .insert()
      .into(Role)
      .values([{
        role_name: "admin"
      }])
      .execute()
  } catch (error) {
    console.error(error)
  }
}


