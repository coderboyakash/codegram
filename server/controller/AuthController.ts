import { RequestHandler } from "express"

export const Login: RequestHandler = async (_req ,res) => {
    res.json({ message: "Login Successsfuly" })
}