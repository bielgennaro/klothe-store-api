import { HttpContext } from '@adonisjs/core/http'
import { UserService } from '#services/user_service'

export class UsersController {
  async index({ response }: HttpContext) {
    try {
      const user = await UserService.listUsers()

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
      const user = await UserService.listById(params.id)

      if (!user) {
        return response.notFound({ message: 'User not found' })
      }

      return response.ok(user)
    } catch (e) {
      console.log(e)
      response.badRequest()
    }
  }

  async updateUser({ params, request, response }: HttpContext) {
    try {
      const userData = request.only(['firstName', 'lastName', 'username', 'email', 'password'])

      const user = await UserService.updateUser(params.id, userData)
      if (!user) {
        return response.notFound({ message: 'User not found' })
      }

      user.merge(userData)
      await user.save()

      return response.ok(user)
    } catch (e) {
      console.log(e)
      return response.badRequest({ message: 'Could not update user' })
    }
  }

  async deleteUser({ response, params }: HttpContext) {
    try {
      const user = await UserService.findUserById(params.id)
      if (!user) {
        return response.notFound({ message: 'User not found' })
      }
      await UserService.deleteUser(params.id)

      return response.noContent()
    } catch (e) {
      console.log(e)
      return response.badRequest({ message: 'Could not delete user' })
    }
  }
}
