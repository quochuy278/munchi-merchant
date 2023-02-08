import { createSlice } from "@reduxjs/toolkit";
import { UserObject } from "../shared/interfaces/user.interface";
import { signInUser, signUpUser } from "./services-slice";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  userInfo: [] as Array<UserObject>,
  error: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }: any) => {
      if (state.userInfo.length == 1) {
        return;
      } else {
        state.userInfo.push(payload);
      }
    },
    setAuthenticated: (state, { payload }: any) => {
      if (payload) {
        state.isAuthenticated = payload;
      } else {
        state.isAuthenticated = false;
      }
    },
  },
    
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signInUser.fulfilled, (state, { payload }: any) => {
      // Add user to the state array
      state.isAuthenticated = true
      state.isLoading = false;
    });
    builder.addCase(signInUser.pending, (state, { payload }: any) => {
      // Add user to the state array
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signInUser.rejected, (state, { payload }: any) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }: any) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(signUpUser.pending, (state, { payload }: any) => {
      // Add user to the state array
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }: any) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { setUser, setAuthenticated } = AuthSlice.actions;

export default AuthSlice.reducer;
