import { GetResult, Preferences } from '@capacitor/preferences'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { RootState } from '.'
import { FilterQuery, UpdateOrderData } from '../shared/interfaces/order.interface'
import {
    PreferencesAuthenticateData,
    PreferencesData,
    SignInData,
    SignUpData,
} from '../shared/interfaces/services.interface'
import { LoginState } from '../shared/interfaces/user.interface'
import { getUrl } from '../utils/getUrl'

// Define a service using a base URL and expected endpoints
export const MunchiApi = createApi({
    reducerPath: 'businessApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API__URL_DEV}`,
        async prepareHeaders(headers, { getState }) {
            // If we have a token set in state, let's assume that we should be passing it.
            const authenticateData: GetResult = await Preferences.get({ key: 'loginState' })
            const data: LoginState = JSON.parse(authenticateData.value!)
            var verifyToken: string
            const loginState = (getState() as RootState).auth.loginState
            if (!data) {
                verifyToken = loginState.verifyToken as string
                headers.set('authorization', `Bearer ${verifyToken}`)
            } else {
                verifyToken = data.verifyToken as string
                headers.set('authorization', `Bearer ${verifyToken}`)
            }
            return headers
        },
    }),
    tagTypes: ['Business', 'User', 'Order'],
    endpoints: (builder) => ({
        signInUser: builder.mutation({
            query: (signInData: SignInData) => ({
                url: `auth/signin`,
                method: 'POST',
                body: {
                    email: signInData.email,
                    password: signInData.password,
                },
            }),
        }),
        signUpUser: builder.mutation({
            query: (signUpData: SignUpData) => ({
                url: `auth/signup`,
                method: 'POST',
                body: {
                    firstName: signUpData.firstName,
                    lastName: signUpData.lastName,
                    role: signUpData.role,        
                    email: signUpData.email,
                    password: signUpData.password,
                },
            }),
        }),
        getBusinessByName: builder.query({
            query: (publicUserId) => ({
                url: `business/allbusiness`,
                method: 'POST',
                body: {
                    publicUserId: publicUserId,
                },
            }),
        }),
        editBusinessOnline: builder.mutation({
            query: (id, ...patch) => ({
                url: `business/${id}/getBusinessOnline`,
                method: 'POST',
            }),
        }),
        editBusinessOffline: builder.mutation({
            query: (id, ...patch) => ({
                url: `business/${id}/getBusinessOffline`,
                method: 'POST',
            }),
        }),
        getAllOrder: builder.query({
            query: (name) => ({
                url: `orders/${name}`,
                method: 'GET',
            }),
            providesTags: ['Order'],
        }),
        getFilterOrder: builder.query({
            query: (filterQuery: FilterQuery) => ({
                url: `orders/filteredOrders?query=${filterQuery.query}&paramsQuery=${filterQuery.paramsQuery}`,
                method: 'GET',
            }),
            providesTags: ['Order'],
        }),
        getOrderById: builder.query({
            query: (id) => ({
                url: `orders/${id}`,
                method: 'GET',
            }),
        }),
        updateOrder: builder.mutation({
            query: (data: UpdateOrderData) => ({
                url: getUrl('orders', data.orderId),
                method: 'PUT',
                body: {
                    preparedIn: data.newPrepTime,
                    orderStatus: data.orderStatus,
                },
            }),
            invalidatesTags: ['Order'],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetBusinessByNameQuery,
    useGetAllOrderQuery,
    useGetOrderByIdQuery,
    useEditBusinessOfflineMutation,
    useEditBusinessOnlineMutation,
    useUpdateOrderMutation,
    useGetFilterOrderQuery,
    useSignInUserMutation,
    useSignUpUserMutation,
} = MunchiApi
