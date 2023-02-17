import { createSlice } from '@reduxjs/toolkit'
import { LoginState, UserObject } from '../shared/interfaces/user.interface'

const initialState = {
    loading: false,
    isAuthenticated: false,
    loginState: {} as LoginState,
    error: null,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, { payload }: any) => {
            console.log(payload)
            if (payload) {
                state.isAuthenticated = payload
            } else {
                state.isAuthenticated = false
            }
        },
        setLoginState: (state, { payload }: any) => {
            state.isAuthenticated = true
            state.loginState = {...payload}
        },
        setLogoutState: (state, { payload }) => {
            state.isAuthenticated = false
            state.loginState = payload
        },
    },
})

export const { setAuthenticated, setLoginState, setLogoutState } = AuthSlice.actions

export default AuthSlice.reducer
