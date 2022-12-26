import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { RootState } from ".";
import { UserObject } from "../shared/interfaces/user.interface";

const initialState = {
  isAuthenticated: false,
  userInfo: [] as Array<UserObject>,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state, payload) => {
      state.isAuthenticated = true;

      // console.log(current(state))
    },
    setUser: (state, { payload }: any) => {
      console.log(payload);
      state.userInfo.push(payload)
      state.isAuthenticated = true;
    },
    signout: (state, payload) => {
      console.log(payload);
      state.isAuthenticated = true;

      // console.log(current(state))
    },
  },
});
export const userInfo = (state: RootState) => state.auth.userInfo[0];
export const { signin, setUser, signout } = AuthSlice.actions;

export default AuthSlice.reducer;
