import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export class UsersController {
  async index({ response }: HttpContext) {
    const listUsers = User.all()

    response.ok(listUsers)
  }

  async create({ request, response }: HttpContext) {
    const userData = request.only(['firstName', 'lastName', 'username', 'email', 'password'])

    const user = await User.create(userData)

    response.created(user.toJSON())
  }

  async getById({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)

    response.ok(user)
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
