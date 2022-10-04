import 'reflect-metadata'
import app from './app'
import { AppDataSource } from './db'
import { setDefaultRole } from './services/setDefaultRole'

const main = async () => {
  try {
    const port = 3000

    await AppDataSource.initialize()

    await setDefaultRole()

    console.log('Database connected!')
    app.listen(port, () => {
      console.log(`Listening on port ${port}`)
    })

  } catch (error) {
    console.error(error)
  }
}

main()
