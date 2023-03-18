import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { createServer } from 'http'
import { DEVELOPMENT, PORT } from './utils/constants'
import AuthRouter from './routes/AuthRoutes'
import mongoose from 'mongoose'
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

main().catch(err => console.log(err));

async function main() {
	await mongoose.connect('mongodb+srv://coderboyakash:VYwlnVRKNceVxe8x@codegram.bk6jedd.mongodb.net/codegram')
}

httpServer.listen(PORT, () => {
    console.log(
        `App is running at ${
            DEVELOPMENT ? 'Development' : 'Production'
        } Mode at ${PORT}`
    )
})
