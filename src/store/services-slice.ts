import { Preferences } from "@capacitor/preferences";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { RootState } from ".";
import {
  SignInData,
  SignUpData,
} from "../shared/interfaces/services.interface";
import { getEnvironment } from "../utils/getEnv";
import { setUser } from "./auth-slice";

export const signInUser = createAsyncThunk(
  "auth/signin",
  async (signInData: SignInData, { dispatch, rejectWithValue }) => {
    try {
      const options = {
        url: getEnvironment("auth/signin"),
        method: "POST",
        data: JSON.stringify({
          email: signInData.email,
          password: signInData.password,
        }),
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      };
      const result = await axios(options);
      dispatch(setUser(result.data));
      await Preferences.set({key:"verifyToken", value: result.data.verifyToken})
      console.log(result.data);
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const signUpUser = createAsyncThunk(
  "auth/signup",
  async (signUpData: SignUpData, { dispatch, rejectWithValue }) => {
    try {
      const options = {
        url: getEnvironment("auth/signup"),
        method: "POST",
        data: JSON.stringify({
          firstName: signUpData.firstName,
          lastName: signUpData.lastName,
          role: signUpData.role,
          email: signUpData.email,
          password: signUpData.password,
        }),
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      };
      const result = await axios(options);
      dispatch(setUser(result.data));
      await Preferences.set({key:"verifyToken", value: result.data.verifyToken})
      console.log(result.data);
      
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Define a service using a base URL and expected endpoints
export const MunchiApi = createApi({
  reducerPath: "businessApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API__URL_DEV}`,
    prepareHeaders(headers, { getState }) {
      const token = (getState() as RootState).auth.userInfo[0].verifyToken;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBusinessByName: builder.query({
      query: (publicUserId) => (
        {
          url: `business/allbusiness`,
          method: "POST",
          body: {
            publicUserId: publicUserId,
          },
        }
      ),
    }),
    editBusinessOnline: builder.mutation({
      query: (id, ...patch) => ({
        url: `business/${id}/getBusinessOnline`,
        method: "POST",
      }),
    }),
    editBusinessOffline: builder.mutation({
      query: (id, ...patch) => ({
        url: `business/${id}/getBusinessOffline`,
        method: "POST",
      }),
    }),
    getAllOrder: builder.query({
      query: (name) => ({
        url: `orders/${name}`,
        method: "GET",
      }),
    }),
    getOrderById: builder.query({
      query: (id) => ({
        url: `orders/${id}`,
        method: "GET",
      }),
    }),
    updateOrder: builder.mutation({
      query: (id, ...patch) => ({
        url: `orders/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBusinessByNameQuery,
  useGetAllOrderQuery,
  useGetOrderByIdQuery,
  useEditBusinessOfflineMutation,
  useEditBusinessOnlineMutation,
  useUpdateOrderMutation,
} = MunchiApi;
