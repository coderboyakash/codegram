require('dotenv').config()
export const DEVELOPMENT = process.env.DEVELOPMENT === 'true' ? true : false
export const { PORT } = process.env
