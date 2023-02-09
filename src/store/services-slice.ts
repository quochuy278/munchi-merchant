import { GetResult, Preferences } from '@capacitor/preferences'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { RootState } from '.'
import { PreferencesData, SignInData, SignUpData } from '../shared/interfaces/services.interface'
import { getEnvironment } from '../utils/getEnv'
import { setUser } from './auth-slice'

export const signInUser = createAsyncThunk(
    'auth/signin',
    async (signInData: SignInData, { dispatch, rejectWithValue }) => {
        try {
            const options = {
                url: getEnvironment('auth/signin'),
                method: 'POST',
                data: JSON.stringify({
                    email: signInData.email,
                    password: signInData.password,
                }),
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                },
            }
            const result = await axios(options)
            dispatch(setUser(result.data))
            await Preferences.set({
                key: 'authenticateData',
                value: JSON.stringify({
                    publicUserId: result.data.publicId,
                    verifyToken: result.data.verifyToken,
                } as PreferencesData),
            })
            console.log(result.data)
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
export const signUpUser = createAsyncThunk(
    'auth/signup',
    async (signUpData: SignUpData, { dispatch, rejectWithValue }) => {
        try {
            const options = {
                url: getEnvironment('auth/signup'),
                method: 'POST',
                data: JSON.stringify({
                    firstName: signUpData.firstName,
                    lastName: signUpData.lastName,
                    role: signUpData.role,
                    email: signUpData.email,
                    password: signUpData.password,
                }),
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                },
            }
            const result = await axios(options)
            dispatch(setUser(result.data))
            await Preferences.set({
                key: 'authenticateData',
                value: JSON.stringify({
                    publicUserId: result.data.publicId,
                    verifyToken: result.data.verifyToken,
                } as PreferencesData),
            })
            console.log(result.data)
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

// Define a service using a base URL and expected endpoints
export const MunchiApi = createApi({
    reducerPath: 'businessApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API__URL_DEV}`,
        async prepareHeaders(headers, { getState }) {
            // If we have a token set in state, let's assume that we should be passing it.
            const authenticateData: GetResult = await Preferences.get({ key: 'authenticateData' })
            const data: PreferencesData = JSON.parse(authenticateData.value!)
            const verifyToken = data.verifyToken
            if (verifyToken) {
                headers.set('authorization', `Bearer ${verifyToken}`)
            }
            return headers
        },
    }),
    tagTypes: ['Business', 'User'],
    endpoints: (builder) => ({
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
        }),
        getOrderById: builder.query({
            query: (id) => ({
                url: `orders/${id}`,
                method: 'GET',
            }),
        }),
        updateOrder: builder.mutation({
            query: (id, ...patch) => ({
                url: `orders/${id}`,
                method: 'PUT',
                body: patch,
            }),
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
} = MunchiApi
