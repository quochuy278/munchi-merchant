import { GetResult, Preferences } from '@capacitor/preferences'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BusinessData } from '../shared/interfaces/business.interface'
const initialState = {
    loading: false,
    enabled: false,
    businessData: [] as BusinessData[],
    error: null,
    isValid: false
}
export const setPreferenceBusiness = createAsyncThunk(
    'business/:businessId',
    async (businessData: BusinessData, { dispatch, rejectWithValue }) => {
        const businessPreferenceData: GetResult = await Preferences.get({ key: 'businessData' })
        const { value } = businessPreferenceData
        if (value){
            dispatch(setValid(true))
        }
        else {
            try {
                await Preferences.set({
                    key: 'businessData',
                    value: JSON.stringify({
                        name: businessData.name,
                        publicBusinessId: businessData.publicId,
                    }),
                })
                dispatch(setBusiness(businessData))
            } catch (error: any) {
                if (error.response && error.response.data.message) {
                    return rejectWithValue(error.response.data.message)
                } else {
                    return rejectWithValue(error.message)
                }
            }
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
                console.log('can only set one business')
                return
            }
            // state.enabled = true;
            // console.log("set business");
        },
        setValid: (state, {payload}:any) => {
            state.isValid = true
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(setPreferenceBusiness.fulfilled, (state, { payload }: any) => {
            // Add user to the state array
            state.loading = false
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

export const { setBusiness,setValid } = BusinessSlice.actions

export default BusinessSlice.reducer
