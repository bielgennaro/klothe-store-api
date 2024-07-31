import User from '#models/user'
import { createUserValidator, loginUserValidator } from '#validators/user_validator'
import hash from '@adonisjs/core/services/hash'
import { generateKey } from 'node:crypto'

export class UserService {
  static async listUsers() {
    return await User.all()
  }

  //! Vai ser any aqui mesmo e foda-se :)
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

    if (userData.isAdmin) {
      generateKey('hmac', { length: 256 }, (err, key) => {
        err ? console.log(err) : (userData.adminVerificationKey = key)
      })
    }

    await createUserValidator.validate(userData)

    const user = await User.create(userData)
    return user
  }

  static async listById(params: User) {
    if (!params || !params.id) {
      throw new Error('Invalid parameters: id is required')
    }
    if (params.id === 0) {
      throw new Error('Invalid parameters: id cannot be 0')
    }
    if (params.id < 0) {
      throw new Error('Invalid parameters: id cannot be negative')
    }
    return await User.findOrFail(params.id)
  }

  static async updateUser(params: User, userData: any) {
    if (!params || !params.id) {
      throw new Error('Invalid parameters: id is required')
    }
    if (params.id === 0) {
      throw new Error('Invalid parameters: id cannot be 0')
    }
    if (params.id < 0) {
      throw new Error('Invalid parameters: id cannot be negative')
    }
    const user = await User.findOrFail(params.id)
    user.merge(userData)
    await createUserValidator.validate(user)
    await user.save()
    return user
  }

  static async findUserById(id: number) {
    return await User.findOrFail(id)
  }

  static async deleteUser(params: User) {
    if (!params || !params.id) {
      throw new Error('Invalid parameters: id is required')
    }
    if (params.id === 0) {
      throw new Error('Invalid parameters: id cannot be 0')
    }
    if (params.id < 0) {
      throw new Error('Invalid parameters: id cannot be negative')
    }

    const user = await User.findOrFail(params.id)
    return await user.delete()
  }

  static async login(email: string, password: string) {
    const user = await User.findBy('email', email)
    if (!user) {
      throw new Error('User not found')
    }
    const isPasswordValid = await hash.verify(user.password, password)
    if (!isPasswordValid) {
      throw new Error('Invalid password')
    }

    await loginUserValidator.validate({ email, password })
    return user
  }
}
