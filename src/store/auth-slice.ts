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
    signin: (state) => {
      state.isAuthenticated = true;
      // console.log(current(state))
    },
    setUser: (state, { payload }: any) => {
      state.userInfo.push(payload);
      console.log("set user succeed");
    },
    signout: (state, payload) => {
      state.isAuthenticated = true;

      // console.log(current(state))
    },
  },
});

export const { signin, setUser, signout } = AuthSlice.actions;

export default AuthSlice.reducer;
