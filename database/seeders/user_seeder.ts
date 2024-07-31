import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      email: 'john@gmail.com',
      password: '123456ABC',
      isAdmin: true,
      phone: '1234567890',
    })

    await User.create({
      firstName: 'Jane',
      lastName: 'Doe',
      username: 'janedoe',
      email: 'janedoe@gmail.com',
      password: '123456ABC',
      isAdmin: false,
    })
  }
}
