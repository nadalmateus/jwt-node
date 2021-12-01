import 'express-async-errors'
import expres, { NextFunction, Request, Response } from 'express'
import routes from '../routes'

const server = expres()

server.use(expres.json())
server.use(routes)
server.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  return response.json({
    status: 'Error',
    message: error.message
  })
})

server.listen(3333, () => { console.log('Server running on http://localhost:3333/') })
