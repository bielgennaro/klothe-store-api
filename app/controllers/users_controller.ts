import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index({ response }: HttpContext) {
    var users = User.all()
    response.status(200).json(users)
  }
}
