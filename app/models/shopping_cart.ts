import { BaseModel, column } from '@adonisjs/lucid/orm'

enum Status {
  ACTIVE,
  INACTIVE,
}

export default class ShoppingCart extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column()
  declare product_id: number

  @column()
  declare quantity: number

  @column()
  declare total: number

  @column()
  declare status: Status

  @column()
  declare is_checked_out: boolean
}
