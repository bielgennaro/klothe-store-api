import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import { generateKey } from 'node:crypto'
import hash from '@adonisjs/core/services/hash'
import { UserService } from '#services/user_service'

export class UsersController {
  async index({ response }: HttpContext) {
    try {
      const user = await User.all()
      return response.ok(user)
    } catch (e) {
      console.log(e)
      response.badRequest()
    }
  }

  async create({ request, response }: HttpContext) {
    try {
      const userData = request.only([
        'firstName',
        'lastName',
        'username',
        'email',
        'password',
        'is_admin',
        'phone',
      ])

      await UserService.createUser(userData)
      return response.ok({ message: 'User created' })
    } catch (error) {
      console.log(error)
      return response.badRequest({ error: error.message })
    }
  }

  async getById({ params, response }: HttpContext) {
    try {
      const user = await User.findOrFail(params.id)
      if (!user) {
        return response.notFound({ message: 'User not found' })
      }

      // TODO - Ainda não testei xD
      if (user.isAdmin) {
        generateKey('hmac', { length: 256 }, (err, key) => {
          err ? console.log(err) : console.log(key)
        })
        return response.ok(user)
      }
      return response.ok(user)
    } catch (e) {
      console.log(e)
      response.badRequest()
    }
  }

  async updateUser({ params, request, response }: HttpContext) {
    const userData = request.only(['firstName', 'lastName', 'username', 'email', 'password'])

    const user = await User.findOrFail(params.id)

    user.merge(userData)

    await user.save()

    response.ok(user)
  }

  async deleteUser({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)

    await user.delete()

    response.noContent()
  }
}
