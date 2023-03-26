import { RequestHandler } from "express"
import bcrypt from 'bcrypt'
import { User } from "../models/User";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../utils/constants";

export const Signup: RequestHandler = async (req ,res) => {
    const { name, email, username, mobile, password } = req.body
    console.log(name, email, username, mobile, password);
    const user = new User();
    user.name = name;
    user.email = email;
    user.mobile = mobile;
    user.username = username;
    user.password = await bcrypt.hash(password, 12);
    const token = jwt.sign({ foo: 'bar' }, JWT_SECRET || 'secret');
    try {
        await user.save()
        res.json({ message: 'User registration Successsfull!!', success: true,  result: {
            token: token,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            username: user.username,
        }})
    } catch (error) {
        res.json({ message: 'User registration failed!', success: false, error: error.message })
    }
}

export const Signin: RequestHandler = async (_req ,res) => {
    const user = new User();
    user.name = "Akash Chowdhury";
    await user.save()
    res.json({ message: "Login Successsfuly" })
}