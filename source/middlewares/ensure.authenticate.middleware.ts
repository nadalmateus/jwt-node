import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export function EnsureAuthenticate (request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization
  if (!authToken) {
    return response.status(401).json({
      message: 'Unauthorized'
    })
  }
  const [, token] = authToken.split(' ')

  try {
    verify(token, '123123123123123123123')
    return next()
  } catch (err) {
    return response.status(401).json({
      message: 'Token invalid'
    })
  }
}
