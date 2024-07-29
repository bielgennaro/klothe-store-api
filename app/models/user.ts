import ShoppingCart from '#models/shopping_cart'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare username: string

  @column()
  declare phone: string

  @column()
  declare shopping_cart: ShoppingCart

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare rememberMeToken: string | null

  @column()
  declare emailVerified: boolean

  @column()
  declare adminVerificationKey: string | null

  @column()
  declare isAdmin: boolean
}
