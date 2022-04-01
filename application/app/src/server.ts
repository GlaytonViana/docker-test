import express, { Request, Response, Router } from 'express'

const server = express()
server.use(express.json())

const router = Router()

router.get('/', async (request: Request, response: Response) => {
    response.status(200).json({ executing: 'executing' })
})

server.use(router)

server.listen(3000, () => {
    console.log('server executando')
})
