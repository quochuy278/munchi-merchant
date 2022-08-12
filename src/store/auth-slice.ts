import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
        state.isAuthenticated = true
        // console.log(current(state))
    }
  }
});

export const { login } = AuthSlice.actions;

export default AuthSlice.reducer;