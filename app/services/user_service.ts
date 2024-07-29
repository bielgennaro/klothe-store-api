import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import { generateKey } from 'node:crypto'

export class UserService {
  static async listUsers() {
    return await User.all()
  }

  //* Vou verificar esse any aqui mais tarde, to morrendo de sono :)
  static async createUser(userData: any) {
    userData.password = await hash.make(userData.password)

    const emailExists = await User.findBy('email', userData.email)
    if (emailExists) {
      throw new Error('Email already exists')
    }
    const usernameExists = await User.findBy('username', userData.username)
    if (usernameExists) {
      throw new Error('Username already exists')
    }

    // TODO - Ainda não testei xD
    if (userData.isAdmin) {
      generateKey('hmac', { length: 256 }, (err, key) => {
        err ? console.log(err) : console.log(key)
      })
    }

    const user = await User.create(userData)
    return user
  }

  static async listById(params: User) {
    if (!params || !params.id) {
      throw new Error('Invalid parameters: id is required')
    }
    return await User.findOrFail(params.id)
  }

  static async updateUser(params: User, userData: any) {
    if (!params || !params.id) {
      throw new Error('Invalid parameters: id is required')
    }
    const user = await User.findOrFail(params.id)
    user.merge(userData)
    await user.save()
    return user
  }
  static async deleteUser(params: User) {
    if (!params || !params.id) {
      throw new Error('Invalid parameters: id is required')
    }
    const user = await User.findOrFail(params.id)
    return await user.delete()
  }

  static async findUserById(id: number) {
    return await User.findOrFail(id)
  }
}
