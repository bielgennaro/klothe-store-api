import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

enum ICategory {
  'Tshirts',
  'Pants',
  'Accessories',
  'Sneakers',
  'Jackets',
  'Shirts',
  'Shorts',
  'Hoodies',
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
  declare category: ICategory

  @column()
  declare size: string

  @column()
  declare colorway: string

  @column()
  declare has_stockX_tag: boolean

  @column()
  declare has_goat_tag: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
