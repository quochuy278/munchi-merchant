import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { Order, OrderState } from '../shared/interfaces/order.interface'


const initialState = {
    orders: [],
    init: false,
    loading: false,
    error: null,
} as OrderState

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        updateState: (state, { payload }): any => {
            // console.log(payload)
            //   console.log(current(state.orders))
            const currentState = current(state.orders)
            // if (state.orders[payload].status >=  3) state.orders[payload].status =  state.orders[payload].status
            // else state.orders[payload].status = state.orders[payload].status + 1
            const orderId = payload.orderId
            const newPrepTime = payload.newPrepTime
            console.log('🚀 ~ file: order-slice.ts ~ line 151 ~ newPrepTime', newPrepTime)

            const updateOrderArray = currentState.filter((order: Order) => order.id === orderId)
            const updateOrderObject = updateOrderArray[0]
            //  console.log(updateOrderArray)
            //check order status

            const updateOrderStatus = updateOrderArray[0].status + 1
            const updateOrderPrepTime = newPrepTime

            const mergeUpdateOrder = {
                ...updateOrderObject,
                status: updateOrderStatus,
                prepTime: updateOrderPrepTime,
            }

            //  state.orders.push(mergeUpdateOrder)
            state.orders = state.orders.map((order) => {
                if (order.id === mergeUpdateOrder.id) {
                    return mergeUpdateOrder
                } else return { ...order }
            })
        },
    },
    // extraReducers(builder) {
    //     builder.addCase(updateOrder.fulfilled, (state, { payload }: any) => {
    //         // Add user to the state array
    //         console.log(payload)
    //         state.loading = false
    //     })
    //     builder.addCase(updateOrder.pending, (state, { payload }: any) => {
    //         // Add user to the state array
    //         state.loading = true
    //         state.error = null
    //     })
    //     builder.addCase(updateOrder.rejected, (state, { payload }: any) => {
    //         // Add user to the state array
    //         state.loading = false
    //         state.error = payload
    //     })
    // },
})

export const selectStatus = (state: RootState) => state.order.loading
export const selectOrders = (state: RootState) => state.order.orders

// export const selectStatus = (state: RootState) => state.todos.status;
// export const selectTodos = (state: RootState) => state.todos.list;
// Action creators are generated for each case reducer function
export const { updateState } = orderSlice.actions

export default orderSlice.reducer
