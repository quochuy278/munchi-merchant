import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { fetchOrders } from "../services/services";
import { Order, OrderState } from "../shared/interfaces/order.interface";

const initialState = {
  orders: [
    {
      id: 1234,
      uuid: "fsdf1343124134141",
      status: 1,
      summary: {
        total: 32,
      },
      customer: {
        id: 213121324,
        name: "Huy",
        email: "test@test.com",
      },
      products: [
        {
          id: 21366124,
          name: "Veggie burger with margarita on top of The burger double patty.",
          quantity: 1,
        },
        {
          id: 21323231524,
          name: "Nugget",
          quantity: 1,
        },
        {
          id: 213123211244,
          name: "Oninon ring",
          quantity: 1,
        },
        {
          id: 21315212312312311231224,
          name: "Somthing",
          quantity: 1,
        },
        {
          id: 2133124,
          name: "Fried Fry",
          quantity: 3,
        },
      ],
      business: {
        id: 123123,
        name: "munchi",
      },
      comment: "No potatoe please",
      deliveryType: 1,
      timeStamp: "15:43",
      prepTime: 2,
    },
    {
      id: 12354,
      uuid: "fsdf1343124134141",
      status: 1,
      summary: {
        total: 32,
      },
      customer: {
        id: 213121324,
        name: "Huy",
        email: "test@test.com",
      },
      products: [
        {
          id: 21366124,
          name: "Veggie burger with margarita on top of The burger double patty.",
          quantity: 1,
        },
        {
          id: 21323232342341524,
          name: "Nugget",
          quantity: 1,
        },
        {
          id: 213123211244,
          name: "Oninon ring",
          quantity: 1,
        },
        {
          id: 21315212312312311231224,
          name: "Somthing",
          quantity: 1,
        },
        {
          id: 2133124,
          name: "Fried Fry",
          quantity: 3,
        },
      ],
      business: {
        id: 123123,
        name: "munchi",
      },
      comment: "No potatoe please",
      deliveryType: 1,
      timeStamp: "15:43",
      prepTime: 2,
    },
    {
      id: 12434,
      uuid: "fsdf1343124134141",
      status: 0,
      summary: {
        total: 32,
      },
      customer: {
        id: 213121324,
        name: "Huy",
        email: "test@test.com",
      },
      products: [
        {
          id: 216124,
          name: "Veggie burger with margarita on top of The burger double patty.",
          quantity: 1,
        },
        {
          id: 2131524,
          name: "Nugget",
          quantity: 1,
        },
        {
          id: 2143124,
          name: "Oninon ring",
          quantity: 1,
        },
        {
          id: 2315224,
          name: "Somthing",
          quantity: 1,
        },
        {
          id: 213124,
          name: "Fried Fry",
          quantity: 3,
        },
      ],
      business: {
        id: 1223,
        name: "munchi",
      },
      comment: "No potatoe please",
      deliveryType: 0,
      timeStamp: "15:43",
      prepTime: 0,
    },
  ],
  init: false,
  loading: false,
  error: null,
} as OrderState;

// export const fetchTodos = createAsyncThunk<
//   Todo[],
//   number,
//   { rejectValue: FetchTodosError }
// >("todos/fetch", async (limit: number, thunkApi) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos?_start=0&_limit=${limit}`
//   );

//   // Alos, set a type for the `data` constant:
//   const data: Todo[] = await response.json();
//   console.log(data);
//    if (response.status !== 200) {
//     // Return the error message:
//     return thunkApi.rejectWithValue({
//       message: "Failed to fetch todos.",
//     });
//   }
//   return data;
// });

// bring orders
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateState: (state, { payload }): any => {
      // console.log(payload)
      //   console.log(current(state.orders))
      const currentState = current(state.orders);
      // if (state.orders[payload].status >=  3) state.orders[payload].status =  state.orders[payload].status
      // else state.orders[payload].status = state.orders[payload].status + 1
      const orderId = payload.orderId;
      const newPrepTime = payload.newPrepTime;
      console.log(
        "🚀 ~ file: order-slice.ts ~ line 151 ~ newPrepTime",
        newPrepTime
      );

      const updateOrderArray = currentState.filter(
        (order: Order) => order.id === orderId
      );
      const updateOrderObject = updateOrderArray[0];
      //  console.log(updateOrderArray)
      //check order status

      const updateOrderStatus = updateOrderArray[0].status + 1;
      const updateOrderPrepTime = newPrepTime;

      const mergeUpdateOrder = {
        ...updateOrderObject,
        status: updateOrderStatus,
        prepTime: updateOrderPrepTime,
      };

      //  state.orders.push(mergeUpdateOrder)
      state.orders = state.orders.map((order) => {
        if (order.id === mergeUpdateOrder.id) {
          return mergeUpdateOrder;
        } else return { ...order };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      if (action.payload.length === 0) {
        // console.log("No Order");
        //  console.log(action);
        state.loading = false;
      } else {
        state.orders.push(...action.payload);
        state.loading = false;
      }
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      if (action.payload) state.error = action.payload.message;
      state.loading = false;
    });
  },
});

export const selectStatus = (state: RootState) => state.order.loading;
export const selectOrders = (state: RootState) => state.order.orders;

// export const selectStatus = (state: RootState) => state.todos.status;
// export const selectTodos = (state: RootState) => state.todos.list;
// Action creators are generated for each case reducer function
export const { updateState } = orderSlice.actions;

export default orderSlice.reducer;
