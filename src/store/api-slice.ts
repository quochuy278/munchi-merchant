import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from ".";

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
      query: (name: string) => ({
        url: `business/${name}`,
        method: "GET",
      }),
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
      query: (name: string) => ({
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
