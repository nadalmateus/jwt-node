import { Request, Response } from 'express'
import { AutheticateUserRepository } from '../repositories/authenticate.user.repository'

export default class AuthenticateUserController {
  async handle (request: Request, response: Response) {
    const { username, password } = request.body
    const authenticateUserRepository = new AutheticateUserRepository()
    const token = await authenticateUserRepository.execute({
      username,
      password
    })

    return response.json(token)
  }
}
