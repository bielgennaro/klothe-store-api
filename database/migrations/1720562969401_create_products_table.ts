import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.decimal('price').notNullable()
      table.integer('stock').notNullable()
      table.string('image').notNullable()
      table
        .enum('category', [
          'TSHIRT',
          'HOODIE',
          'JACKET',
          'PANTS',
          'SHORTS',
          'SHOES',
          'HAT',
          'BAG',
          'ACCESSORY',
          'WATCH',
        ])
        .notNullable()
      table.string('size').notNullable()
      table.string('colorway').notNullable()
      table.boolean('has_stock_x_tag').notNullable()
      table.boolean('has_goat_tag').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
