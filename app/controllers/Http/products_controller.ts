import Product from '#models/product'
import { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ response }: HttpContext) {
    const products = await Product.all()
    return response.ok(products)
  }

  async getById({ params, response }: HttpContext) {
    const product = await Product.find(params.id)
    return response.ok(product)
  }

  async create({ request, response }: HttpContext) {
    const productData = request.only([
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
    const product = await Product.create(productData)
    return response.created(product)
  }

  async update({ params, request, response }: HttpContext) {
    const productData = request.only([
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
    const product = await Product.findOrFail(params.id)
    product.merge(productData)
    await product.save()
    return response.ok(product)
  }

  async delete({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
    return response.noContent()
  }
}
