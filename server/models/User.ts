import { model, Schema } from "mongoose";

const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    mobile: { type: String, required: false },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

export const User = model('User', schema);