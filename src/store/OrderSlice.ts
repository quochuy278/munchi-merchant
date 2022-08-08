import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { Url } from "url";
import { RootState } from ".";
import { getOrders } from "../services/services";

export type Item = {
  id: number;
  quantity: number;
  name: string;
};

export type OrderSummary = {
  total: number;
  discount: number;
  tax_rate: number;
  tax: number;
  tax_after_discount: number;
  tax_with_discount: number;
};

export type CustomerLocation = {
  lat: number;
  lng: number;
};

export type OrderCustomer = {
  id: number;
  order_id: number;
  email: string;
  address: string;
  address_notes?: string;
  zipcode: string;
  cellphone: string;
  location: CustomerLocation;
};

export type OrderBusiness = {
  id: number;
  order_id: number;
  name: string;
  logo: Url;
  email: string;
  city_id: number;
  address: string;
  cellphone: string | null;
  phone: string;
  location: CustomerLocation;
  header: Url;
  pickup_time: string;
  delivery_time: string;
};
export type ProductItemOptions = {
  id: number;
  name: string;
  price: number;
  position: string;
  quantity: number;
};
export type ProductItem = {
  id: number;
  name: string;
  logo: Url;
  allow_suboption_quantity: boolean;
  with_half_option: false;
  limit_suboptions_by_max: false;
  options: ProductItemOptions[];
};

export type Order = {
  id: number;
  uuid: string;
  status: string;
  summary: OrderSummary;
  customer: OrderCustomer;
  product: ProductItem[];
  business: OrderBusiness;
};
// export type TodoId = string;

// export type Todo = {
//   id: TodoId;
//   title: string;
//   completed: boolean;
// };

export type OrderState = {
  orders: Order[];
  loading: boolean;
  init: boolean;
  error: string | null;
};

const initialState = {
  orders: [],
  init: false,
  loading: false,
  error: null,
} as OrderState;

// type TodosState = {
//   // In `status` we will watch
//   // if todos are being loaded.
//   status: "loading" | "idle";
//   // `error` will contain an error message.
//   error: string | null;
//   list: Todo[];
// };
// const initialState = {
//   list: [],
//   error: null,
//   status: "idle",
// } as TodosState;

type FetchTodosError = {
  message: string;
};

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
export const fetchOrders = createAsyncThunk<Order[], any>(
  "orders/fetch",
  async (status: any) => {
    // ${status[0]}&&status=${status[1]}%%status=${status[2]}
    
    const response = await fetch(
      `http://gomunchi.pagekite.me/orders?status=ready&&status=pending`
    );
    //fetch pending,processing,ready
    // Alos, set a type for the `data` constant:
    const data = await response.json();
    const result: Order[] = data.data.result;
    return result;
  }
);

// bring orders
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    loadOrder: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {

      console.log(action)
      state.orders.map((order) => action.payload.map(payload => payload.status == order.status))
      state.orders.push(...action.payload);
      state.loading = false;
    });
  },
});

export const selectStatus = (state: RootState) => state.order.loading;
export const selectOrders = (state: RootState) => state.order.orders;


// export const selectStatus = (state: RootState) => state.todos.status;
// export const selectTodos = (state: RootState) => state.todos.list;
// Action creators are generated for each case reducer function
export const { loadOrder } = orderSlice.actions;

export default orderSlice.reducer;
