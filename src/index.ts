import 'reflect-metadata'
import app from './app'
import { AppDataSource } from './db'
import { PORT } from './config'

const main = async () => {
  try {
    await AppDataSource.initialize()

    console.log('Database connected!')
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })

  } catch (error) {
    console.error(error)
  }
}

main()
