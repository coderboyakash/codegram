import { Login } from "../controller/AuthController"

const AuthRouter = require('express').Router()

AuthRouter.post('/login', Login)

export default AuthRouter