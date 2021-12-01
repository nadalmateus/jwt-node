import client from '../services/prisma.client'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IRequest {
    username: string,
    password: string
}

export class AutheticateUserRepository {
  async execute ({ username, password }:IRequest) {
    const userAlreadyExists = await client.user.findFirst({
      where: {
        username
      }
    })

    if (!userAlreadyExists) {
      throw new Error('User or password incorrect')
    }

    const passwordMatch = compare(password, userAlreadyExists.password)

    if (!passwordMatch) {
      throw new Error('User or password incorrect')
    }

    const token = sign({}, '123123123123123123123', {
      subject: userAlreadyExists.id,
      expiresIn: '120s'
    })

    return { token }
  }
}
