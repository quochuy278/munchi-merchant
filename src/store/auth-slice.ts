import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { UserObject } from '../shared/interfaces/user.interface'
import { Preferences } from '@capacitor/preferences'

const initialState = {
  isAuthenticated: false,
  userInfo: [] as Array<UserObject>,
}

export const signIn = createAsyncThunk('auth/signIn', async (arg, { getState }) => {
  const { value } = await Preferences.get({ key: 'isAuthenticated' })
  const state:any = getState()
  if (value !== 'true' || value === null) {
    console.log('value not existed')
     const isAuthenticated = await Preferences.set({
    key: 'isAuthenticated',
    value: 'true',
     })
  }
  console.log('running')
  console.log(value)
  console.log(state.auth.isAuthenticated) 
  return state.auth.isAuthenticated = !state.auth.isAuthenticated
})

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }: any) => {
      if (state.userInfo.length == 1) {
        return
      } else {
        state.userInfo.push(payload)
      }
    },
    signout: (state, payload) => {
      state.isAuthenticated = false

      // console.log(current(state))
    },
     signin: (state) => {
      state.isAuthenticated = true

      // console.log(current(state))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(current(state))
    })
    // builder.addCase(signIn.pending, (state, action) => {
    //   // Add user to the state array
    //   console.log('Loading')
    // })
    // builder.addCase(signIn.rejected, (state, action) => {
    //   // Add user to the state array
    //   console.log('Something wrong happened')
    // })
  },
})

export const { signin,setUser, signout } = AuthSlice.actions

export default AuthSlice.reducer
