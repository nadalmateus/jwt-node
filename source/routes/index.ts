import { Router } from 'express'
import AuthenticateUserController from '../controllers/authenticate.user.controller'
import CreateUserController from '../controllers/user.controller'
import { EnsureAuthenticate } from '../middlewares/ensure.authenticate.middleware'

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

routes.post('/users', createUserController.handle)
routes.post('/login', authenticateUserController.handle)
routes.get('/courses', EnsureAuthenticate, (request, response) => {
  return response.json([
    { id: 1, name: 'node' },
    { id: 2, name: 'react' },
    { id: 3, name: 'react native' }
  ])
})

export default routes
