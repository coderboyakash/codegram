import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AuthState } from './Auth'

// Define the initial state using that type
const initialState: AuthState = {
    name: '',
    email: '',
    token: '',
    mobile: '',
    username: ''
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            const { payload } = action
            state.name = payload.name
            state.email = payload.email
            state.token = payload.token
            state.mobile = payload.mobile
            state.username = payload.username
        },
        logout: (state) => {
            state.name = ""
            state.email = ""
            state.token = ""
            state.mobile = ""
            state.username = ""
        }
    },
})

export const { setAuth, logout } = AuthSlice.actions

export const selectToken = (state: RootState) => state.auth.token

export default AuthSlice.reducer