import Product from '#models/product'

export default class ProductService {
  static async listProducts() {
    return await Product.all()
  }

  static async createProduct(productData: any) {
    const product = await Product.create(productData)
    return product
  }

  static async listById(params: Product) {
    if (!params || !params.id) {
      throw new Error('Invalid parameters: id is required')
    }
    return await Product.findOrFail(params.id)
  }

  static async updateProduct(params: Product) {
    if (!params || !params.id) {
      throw new Error('Invalid parameters: id is required')
    }
    const product = await Product.findOrFail(params.id)
    product.merge(product)
    await product.save()
    return product
  }

  static async deleteProduct(params: Product) {
    if (!params || !params.id) {
      throw new Error('Invalid parameters: id is required')
    }
    const product = await Product.findOrFail(params.id)
    return await product.delete()
  }

  static async findProductById(id: number) {
    return await Product.findOrFail(id)
  }
}
