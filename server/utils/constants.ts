require('dotenv').config()
export const DEVELOPMENT = process.env.DEVELOPMENT === 'true' ? true : false
export const { PORT, MONGODB_URL, JWT_SECRET } = process.env