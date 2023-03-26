export interface SignupResponse {
    message: string
    success: boolean
    result: {
        name: string
        email: string
        token: string
        mobile: string
        username: string
    }
}

export interface SignupPayload {
    name: string
    email?: string
    password: string
    mobile?: string
    username: string
}

export interface AuthState {
    name: string
    email: string
    token: string
    mobile: string
    username: string
}