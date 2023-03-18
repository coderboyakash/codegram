import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { createServer } from 'http'
import { DEVELOPMENT, PORT } from './utils/constants'
import AuthRouter from './routes/AuthRoutes'
const app = express()
app.use(helmet())
app.use(
    cors({
        origin: DEVELOPMENT ? ['http://localhost:3000'] : ['*'],
    })
)
app.use(morgan('common'))
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use('/auth', AuthRouter);

const httpServer = createServer(app)
httpServer.listen(PORT, () => {
    console.log(
        `App is running at ${
            DEVELOPMENT ? 'Development' : 'Production'
        } Mode at ${PORT}`
    )
})
