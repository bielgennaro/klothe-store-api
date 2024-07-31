import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { Category } from '#models/enums/category'

export default class extends BaseSeeder {
  async run() {
    await Product.create({
      name: 'Nike Air Max 90',
      description: 'The Nike Air Max 90 is a classic sneaker that has stood the test of time.',
      price: 120,
      stock: 10,
      image: new URL(
        'https://www.shutterstock.com/pt/image-photo/mexico-city-january-29-2022-nike-2117753072'
      ),
      category: Category.SNEAKERS,
      size: '10',
      colorway: 'White/Black',
      has_stock_x_tag: true,
      has_goat_tag: false,
    })

    await Product.create({
      name: 'Adidas Superstar',
      description: 'The Adidas Superstar is a classic sneaker that has stood the test of time.',
      price: 100,
      stock: 5,
      image: new URL(
        'https://www.shutterstock.com/pt/image-photo/ivanofrankivsk-ukraine-may-16-2020-adidas-2367802391'
      ),
      category: Category.SNEAKERS,
      size: '9',
      colorway: 'White/Black',
      has_stock_x_tag: true,
      has_goat_tag: false,
    })
  }
}
