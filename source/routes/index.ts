import { Router } from 'express'
import AuthenticateUserController from '../controllers/authenticate.user.controller'
import CreateUserController from '../controllers/user.controller'

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

routes.post('/users', createUserController.handle)
routes.post('/login', authenticateUserController.handle)

export default routes
