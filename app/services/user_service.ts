import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export class UserService {
  //* Vou verificar esse any aqui mais tarde, to morrendo de sono :)
  static async createUser(userData: any) {
    userData.password = await hash.make(userData.password)

    const emailExists = await User.findBy('email', userData.email)
    if (emailExists) {
      throw new Error('Email already exists')
    }

    const user = await User.create(userData)
    return user
  }
}
