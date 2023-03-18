import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { createServer } from 'http';
import { DEVELOPMENT, PORT } from '../utils/constants';
require('dotenv').config();
const app = express();

const httpServer = createServer(app)
httpServer.listen(PORT, () => {
    console.log(`App is running at ${DEVELOPMENT ? 'Development' : 'Production'} Mode`);
})