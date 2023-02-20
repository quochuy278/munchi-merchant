import { GetResult, Preferences } from '@capacitor/preferences'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'
import { BusinessData } from '../shared/interfaces/business.interface'
import { LoginState } from '../shared/interfaces/user.interface'
import { setLoginState } from './auth-slice'
const initialState = {
    loading: false,
    enabled: false,
    businessData: [] as BusinessData[],
    error: null,
    isValid: false,
    isPending: false,
    isLocked: false,
}
export const setPreferenceBusiness = createAsyncThunk(
    'business/:businessId',
    async (data: any, { dispatch, getState, rejectWithValue }) => {
        const loginStateObject: any = await Preferences.get({ key: 'loginState' })
        const preferenceLoginState: LoginState = JSON.parse(loginStateObject.value)
        const { businessData, isLocked } = (getState() as RootState).business
        const { loginState } = (getState() as RootState).auth
        // console.log(preferenceLoginState, 'business slice level')
        // console.log(businessData[0], 'businessData')
        // console.log(data)
        if (preferenceLoginState.businessName || preferenceLoginState.publicBusinessId) {
            console.log('business existed in Preference storage')
            return
        }
        try {
            await Preferences.set({
                key: 'loginState',
                value: JSON.stringify({
                    publicUserId: data.publicUserId,
                    verifyToken: data.verifyToken,
                    isAuthenticated: true,
                    publicBusinessId: data.publicBusinessId,
                    businessName: data.businessName,
                }),
            })
            console.log('updated Loginstate')
            dispatch(
                setLoginState({
                    publicUserId: data.publicUserId,
                    verifyToken: data.verifyToken,
                    isAuthenticated: true,
                    publicBusinessId: data.publicBusinessId,
                    businessName: data.businessName,
                })
            )
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
            // }
        }
    }
)
export const BusinessSlice = createSlice({
    name: 'business',
    initialState,
    reducers: {
        setBusiness: (state, { payload }: any) => {
            if (state.businessData.length < 1) {
                state.businessData.push(payload)
            } else if (state.businessData.length === 1) {
                return
            }
            // state.enabled = true;
        },
        setSelectBusiness: (state, { payload }: any) => {
            if (state.isLocked) {
                console.log('business is locked')
                return
            } else {
                if (state.businessData.length < 1) {
                    state.businessData.push(payload)
                    state.isPending = true
                } else if (JSON.stringify(payload) === '{}') {
                    return
                } else {
                    state.businessData.pop()
                    state.businessData.push(payload)
                }
            }
        },
        setLockBusiness: (state, { payload }: any) => {
            state.isValid = true
            state.isPending = false
        },
        setSelectBusinessClose: (state, { payload }: any) => {
            if (payload) {
                console.log('select business is lock')
                state.isPending = true
            } else {
                state.isPending = false
            }
        },
        setClearBusinessData: (state) => {
            state.businessData.pop()
            state.isLocked = false
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(setPreferenceBusiness.fulfilled, (state, { payload }: any) => {
            // Add user to the state array
            state.loading = false
            state.isLocked = true
            state.isPending = false
        })
        builder.addCase(setPreferenceBusiness.pending, (state, { payload }: any) => {
            // Add user to the state array
            state.loading = true
            state.error = null
        })
        builder.addCase(setPreferenceBusiness.rejected, (state, { payload }: any) => {
            // Add user to the state array
            state.loading = false
            state.error = payload
        })
    },
})

export const { setBusiness, setSelectBusiness, setSelectBusinessClose, setClearBusinessData } =
    BusinessSlice.actions

export default BusinessSlice.reducer
