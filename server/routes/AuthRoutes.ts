import { Signin, Signup } from "../controller/AuthController"

const AuthRouter = require('express').Router()

AuthRouter.post('/signin', Signin)
AuthRouter.post('/signup', Signup)

export default AuthRouter