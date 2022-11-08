import { createSlice, current } from "@reduxjs/toolkit";
import {  useNavigate } from "react-router-dom";

const initialState = {
  isAuthenticated: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      // console.log(current(state))
     
   
    },
  },
});

export const { login } = AuthSlice.actions;

export default AuthSlice.reducer;
