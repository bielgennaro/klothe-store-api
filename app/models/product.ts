import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

enum Category {
  TSHIRT = 'tshirt',
  HOODIE = 'hoodie',
  JACKET = 'jacket',
  PANTS = 'pants',
  SHORTS = 'shorts',
  SHOES = 'shoes',
  HAT = 'hat',
  BAG = 'bag',
  ACCESSORY = 'accessory',
  WATCH = 'watch',
}

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: number

  @column()
  declare stock: number

  @column()
  declare image: URL

  @column()
  declare category: Category

  @column()
  declare size: string

  @column()
  declare colorway: string

  @column()
  declare has_stock_x_tag: boolean

  @column()
  declare has_goat_tag: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
