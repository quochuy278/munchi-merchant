import { GetResult, Preferences } from '@capacitor/preferences'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
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
import { setLogoutState, tokenReceived } from './auth-slice'
export const logOut = createAsyncThunk(
    'auth/logout',
    async (data, { dispatch, rejectWithValue }) => {
        await Preferences.clear()
        dispatch(setLogoutState({}))
    }
)
const baseQuery = fetchBaseQuery({
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
})
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    // 
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        // try to get a new token
        const refreshResult = await baseQuery('/refreshToken', api, extraOptions)
        if (refreshResult.data) {
            // store the new token
            api.dispatch(tokenReceived(refreshResult.data))
            // retry the initial query
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
    // Define a service using a base URL and expected endpoints
}
export const MunchiApi = createApi({
    reducerPath: 'businessApi',
    baseQuery: baseQueryWithReauth,
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
            // async onQueryStarted(args, { dispatch, queryFulfilled, }) {
            //     try {
            //       await queryFulfilled;
            //       await dispatch(MunchiApi.endpoints.signInUser.initiate(null));
            //     } catch (error) {}
            //   },
        }),
        activateBusiness: builder.mutation({
            query: (publicBusinessId: string) => ({
                url: `business/editBusiness/activate`,
                method: 'POST',
                body: {
                    publicBusinessId: publicBusinessId,
                },
            }),
        }),
        deactivateBusiness: builder.mutation({
            query: (publicBusinessId: string) => ({
                url: `business/editBusiness/deactivate`,
                method: 'POST',
                body: {
                    publicBusinessId: publicBusinessId,
                },
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
                url: `orders/filteredOrders?query=${filterQuery.query}&paramsQuery=${filterQuery.paramsQuery}&publicBusinessId=${filterQuery.publicBusinessId}`,
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
            query: (data: UpdateOrderData) => (
                console.log(data.newPrepTime),
                {
                    url: getUrl('orders', data.orderId),
                    method: 'PUT',
                    body: {
                        preparedIn: data.newPrepTime,
                        orderStatus: data.orderStatus,
                    },
                }
            ),
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
    useUpdateOrderMutation,
    useGetFilterOrderQuery,
    useSignInUserMutation,
    useSignUpUserMutation,
    useActivateBusinessMutation,
    useDeactivateBusinessMutation,
} = MunchiApi
