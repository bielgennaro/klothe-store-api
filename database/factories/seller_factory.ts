import factory from '@adonisjs/lucid/factories'
import Seller from '#models/seller'

export const SellerFactory = factory
  .define(Seller, async ({ faker }) => {
    return {}
  })
  .build()