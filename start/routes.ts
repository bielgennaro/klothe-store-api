/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router
  .group(() => {
    router.get('/users', 'users_controller.index')
    router.get('/users/:id', 'users_controller.show')
    router.post('/users', 'users_controller.store')
    router.put('/users/:id', 'users_controller.update')
    router.delete('/users/:id', 'users_controller.destroy')
  })
  .prefix('/api')
