/* eslint-disable @adonisjs/prefer-lazy-controller-import */
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { UsersController } from '#controllers/Http/users_controller'
import ProductsController from '#controllers/Http/products_controller'
import { ShoppingCartsController } from '#controllers/Http/shopping_carts_controller'
router
  .group(() => {
    router.get('/users', [UsersController, 'index'])
    router.get('/users/:id', [UsersController, 'getById'])
    router.post('/users/create', [UsersController, 'create'])
    router.put('/users/:id', [UsersController, 'updateUser'])
    router.delete('/users/:id', [UsersController, 'deleteUser'])
  })
  .prefix('/api')

router
  .group(() => {
    router.get('/products', [ProductsController, 'index'])
    router.get('/products/:id', [ProductsController, 'getById'])
    router.post('/products/create', [ProductsController, 'create'])
    router.put('/products/:id', [ProductsController, 'update'])
    router.delete('/products/:id', [ProductsController, 'delete'])
  })
  .prefix('/api')

router
  .group(() => {
    router.get('/shopping_cart', [ShoppingCartsController, 'index'])
    router.get('/shopping_cart/:id', [ShoppingCartsController, 'getById'])
    router.post('/shopping_cart', [ShoppingCartsController, 'create'])
    router.put('/shopping_cart/:id', [ShoppingCartsController, 'update'])
    router.delete('/shopping_cart/:id', [ShoppingCartsController, 'delete'])
  })
  .prefix('/api')
