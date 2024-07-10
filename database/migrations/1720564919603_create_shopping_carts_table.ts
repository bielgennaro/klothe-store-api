import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'shopping_carts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user')
      table.integer('products')
      table.integer('quantity').notNullable()
      table.decimal('total').notNullable()
      table.enum('status', ['active', 'inactive']).notNullable()
      table.boolean('is_checked_out').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
