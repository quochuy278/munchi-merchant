import { createSlice, current } from "@reduxjs/toolkit";
import {  useNavigate } from "react-router-dom";

const initialState = {
  isAuthenticated: false,
  token : "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state,payload) => {
      console.log(payload);
      state.isAuthenticated = true;
      state.token ="acdcas"
      // console.log(current(state))
    },
    setUser: () => {
      
    }
  },
});

export const { signin } = AuthSlice.actions;

export default AuthSlice.reducer;
