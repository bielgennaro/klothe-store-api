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
router
  .group(() => {
    router.get('/users', [UsersController, 'index'])
    router.get('/users/:id', [UsersController, 'getById'])
    router.post('/users', [UsersController, 'create'])
    router.put('/users/:id', [UsersController, 'updateUser'])
    router.delete('/users/:id', [UsersController, 'deleteUser'])
  })
  .prefix('/api')
