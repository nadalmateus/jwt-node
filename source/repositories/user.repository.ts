import client from '../services/prisma.client'
import { hash } from 'bcryptjs'

interface IUserRequest {
    username: string,
    password: string
}

export default class CreateUserRepository {
  async execute ({ username, password }: IUserRequest) {
    const userAlreadyExists = await client.user.findFirst({
      where: {
        username
      }
    })
    if (userAlreadyExists) {
      throw new Error('User already exists')
    }
    const hashPassword = await hash(password, 15)

    const createUser = await client.user.create({
      data: {
        username,
        password: hashPassword
      }
    })
    return createUser
  }
}
