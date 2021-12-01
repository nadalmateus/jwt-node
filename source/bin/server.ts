import expres from 'express'

const server = expres()

server.listen(3333, () => { console.log('Server running on http://localhost:3333/') })
