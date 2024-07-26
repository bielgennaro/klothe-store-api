import ShoppingCart from '#models/shopping_cart'
import { HttpContext } from '@adonisjs/core/http'

export class ShoppingCartsController {
  async index({ response }: HttpContext) {
    const shoppingCarts = await ShoppingCart.all()

    response.ok(shoppingCarts)
  }

  async create({ request, response }: HttpContext) {
    const shoppingCarts = await ShoppingCart.create(request.body())

    response.created(shoppingCarts.toJSON())
  }

  async getById({ params, response }: HttpContext) {
    const shoppingCarts = await ShoppingCart.findOrFail(params.id)

    response.ok(shoppingCarts)
  }

  async update({ params, request, response }: HttpContext) {
    const shoppingCarts = await ShoppingCart.findOrFail(params.id)

    shoppingCarts.merge(request.body())

    await shoppingCarts.save()

    response.ok(shoppingCarts)
  }

  async delete({ params, response }: HttpContext) {
    const shoppingCarts = await ShoppingCart.findOrFail(params.id)

    await shoppingCarts.delete()

    response.noContent()
  }
}
