import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name')
      table.string('last_name')
      table.string('username').unique()
      table.string('phone')
      table.string('shopping_cart')
      table.string('email').unique()
      table.string('password')
      table.string('remember_me_token').defaultTo(false)
      table.boolean('email_verified').defaultTo(false)
      table.string('email_verification_token').nullable()
      table.boolean('is_admin').defaultTo(false)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
