import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { fetchOrders } from "../services/services";
import { OrderState } from "../shared/types/order.type";

export type Item = {
  id: number;
  quantity: number;
  name: string;
};

const initialState = {
  orders: [
    {
      id: 1234,
      uuid: "fsdf1343124134141",
      status: 2,
      summary: {
        total: 32,
      },
      customer: {
        id: 213124,
        name: "Huy",
        email: "test@test.com",
      },
      products: [
        {
          id: 213124,
          name: "Chicken Nuggets",
          quantity: 1,
        },
      ],
      business: {
        id: 123123,
        name: "munchi",
      },
      comment: "No potatoe please",
      delivery_type: 1,
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
    updateState: (state, action) => {
      //  const filterOrder =  state.orders.filter( (order) => {
      //    return order.id === action.payload
      //   })
      //   return {
      //     filterOrder.status == 1
      //   };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      if (action.payload.length === 0) {
        console.log("No Order");
         console.log(action);
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
