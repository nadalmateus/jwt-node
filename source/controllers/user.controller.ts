import { Request, Response } from 'express'
import CreateUserRepository from '../repositories/user.repository'

export default class CreateUserController {
  async handle (request: Request, response: Response) {
    const { username, password } = request.body

    const createUserRepository = new CreateUserRepository()
    const user = await createUserRepository.execute({
      username,
      password
    })
    return response.json(user)
  }
}
