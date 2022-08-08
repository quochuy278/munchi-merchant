import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import OrderSlice from "./OrderSlice";

import thunk from "redux-logger";

export const store = configureStore({
  reducer: { order: OrderSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// app/store.ts

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
