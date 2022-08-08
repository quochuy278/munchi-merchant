import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchOrderError, Order } from "../shared/types/order.type";
import { store } from "../store";

export type UpdateParameter = {
  orderId: number;
  prepTime: string;
};

export const fetchOrders = createAsyncThunk<
  Order[],
  any,
  { rejectValue: FetchOrderError }
>("orders/fetch", async (status: string[], thunkApi) => {
  // ${status[0]}&&status=${status[1]}%%status=${status[2]}

  const response = await fetch(
    `http://gomunchi.pagekite.me/orders?status=pending&&status=processing&&status=ready`
  );
  //fetch pending,processing,ready
  // Alos, set a type for the `data` constant:
  const { result }: { result: Order[] } = await response.json();
  if (response.status !== 200) {
    // Return the error message:
    return thunkApi.rejectWithValue({
      message: "Failed to fetch orders.",
    });
  }  
  return result;
});

export const updateOrders = createAsyncThunk<
  Order[],
  UpdateParameter,
  { rejectValue: FetchOrderError }
>("orders/update", async (updateData, thunkApi) => {
  const  {orderId, prepTime} = updateData
  const response = await fetch(
    `http://gomunchi.pagekite.me/orders?status=ready&&status=pending`
  );
  const data: Order[] = await response.json();
  if (response.status !== 200) {
    // Return the error message:
    return thunkApi.rejectWithValue({
      message: "Failed to fetch todos.",
    });
  }
  return data;
});
