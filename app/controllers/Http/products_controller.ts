import ProductService from '#services/products_service'
import { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ response }: HttpContext) {
    try {
      const products = await ProductService.listProducts()
      return response.ok({ products })
    } catch (e) {
      console.log(e)
      response.badRequest({ error: e.message })
    }
  }

  async getById({ params, response }: HttpContext) {
    try {
      const product = await ProductService.listById(params.id)
      return response.ok({ product })
    } catch (e) {
      console.log(e)
      response.badRequest({ error: e.message })
    }
  }

  async create({ request, response }: HttpContext) {
    try {
      const productData = request.only([
        'name',
        'description',
        'price',
        'stock',
        'image',
        'category',
        'size',
        'colorway',
        'has_stock_x_tag',
        'has_goat_tag',
      ])
      await ProductService.createProduct(productData)
      return response.created({ message: 'Product created' })
    } catch (e) {
      console.log(e)
      return response.badRequest({ error: e.message })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      request.only([
        'name',
        'description',
        'price',
        'stock',
        'image',
        'category',
        'size',
        'colorway',
        'has_stockX_tag',
        'has_goat_tag',
      ])
      const product = await ProductService.updateProduct(params.id)
      return response.ok(product)
    } catch (e) {
      console.log(e)
      return response.badRequest({ error: e.message })
    }
  }

  async delete({ params, response }: HttpContext) {
    try {
      await ProductService.deleteProduct(params.id)
      return response.noContent()
    } catch (e) {
      console.log(e)
      return response.badRequest({ error: e.message })
    }
  }
}
