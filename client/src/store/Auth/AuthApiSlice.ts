import { api } from '../api'
import { SignupPayload, SignupResponse } from './Auth'

// Define a service using a base URL and expected endpoints
export const AuthApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation<SignupResponse, SignupPayload>({
            query: (body) => ({
                url: '/auth/signup',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const { useSignupMutation } = AuthApiSlice