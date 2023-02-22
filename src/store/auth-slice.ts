import { createSlice } from '@reduxjs/toolkit'
import { LoginState, UserObject } from '../shared/interfaces/user.interface'

const initialState = {
    loading: false,
    loginState: {
        businessName: null,
        isAuthenticated: false,
        publicBusinessId: null,
        publicUserId: null,
        verifyToken: null,
    } as LoginState,
    error: null,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, { payload }: any) => {
            console.log(payload)
            if (payload) {
                state.loginState.isAuthenticated = payload
            } else {
                state.loginState.isAuthenticated = false
            }
        },
        setLoginState: (state, { payload }: any) => {
            state.loginState.isAuthenticated = true
            state.loginState = { ...payload }
        },
        setLogoutState: (state, { payload }) => {
            state.loginState.isAuthenticated = true
            state.loginState = payload
        },
        tokenReceived(state, { payload }: any) {
            state.loginState.verifyToken = payload
        },
    },
})

export const { setAuthenticated, setLoginState, setLogoutState ,tokenReceived} = AuthSlice.actions

export default AuthSlice.reducer
