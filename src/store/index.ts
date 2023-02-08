import { TypedUseSelectorHook, useSelector } from "react-redux";
import OrderSlice from "./order-slice";
import AuthSlice from "./auth-slice";
import { configureStore } from "@reduxjs/toolkit";
import BusinessSlice from "./business-slice";
import { MunchiApi } from "./services-slice";

export const store = configureStore({
  reducer: {
    order: OrderSlice,
    auth: AuthSlice,
    business: BusinessSlice,
    [MunchiApi.reducerPath]: MunchiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:true}).concat(MunchiApi.middleware),

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// app/store.ts

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
