import { TypedUseSelectorHook, useSelector } from "react-redux";
import OrderSlice from "./order-slice";
import AuthSlice from "./auth-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { order: OrderSlice, auth: AuthSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// app/store.ts

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
