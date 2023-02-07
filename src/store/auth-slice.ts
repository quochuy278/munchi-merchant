import {
  createAsyncThunk,
  createSerializableStateInvariantMiddleware,
  createSlice,
  current,
  isPlain,
} from "@reduxjs/toolkit";
import { UserObject } from "../shared/interfaces/user.interface";
import { Preferences } from "@capacitor/preferences";
// async () => {
//   const initialToken = await Preferences.get({ key: "verifyToken" });
//   return !!initialToken;
// },
const initialState = {
  isAuthenticated: false,
  userInfo: [] as Array<UserObject>,
};
// Augment middleware to consider Immutable.JS iterables serializable

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
  },
});

export const { setUser } = AuthSlice.actions;

export default AuthSlice.reducer;
