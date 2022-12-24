import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchOrderError, Order } from "../shared/interfaces/order.interface";
import {
  SignInData,
  SignUpData,
} from "../shared/interfaces/services.interface";

import { store } from "../store";

export const signInService = async (signInData: SignInData) => {
  console.log(signInData);
  const result = await axios({
    url: "http://localhost:5000/auth/signin",
    method: "POST",
    data: JSON.stringify({
      email: signInData.email,
      password: signInData.password,
    }),
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  });
  return result;
};

export const signUpService = async (signupData: SignUpData) => {
  console.log(signupData);
 
  const result = await axios({
    url: "http://localhost:5000/auth/signin",
    method: "POST",
    data: JSON.stringify({
      name: signupData.name,
      lastName: signupData.lastName,
      role: signupData.role,
      email: signupData.email,
      password: signupData.password,
    }),
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  });
  return result;
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

//change state to processing

// export const updateOrders = createAsyncThunk<
//   Order[],
//   UpdateParameter,
//   { rejectValue: FetchOrderError }
// >("orders/update", async (updateData, thunkApi) => {
//   const { orderId, prepTime } = updateData;
//   const response = await fetch(
//     `http://gomunchi.pagekite.me/orders?status=ready&&status=pending`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updateData),
//     }
//   );
//   const data: Order[] = await response.json();
//   if (response.status !== 200) {
//     // Return the error message:
//     return thunkApi.rejectWithValue({
//       message: "Failed to fetch todos.",
//     });
//   }
//   return data;
// });

//decline order

// export const updateOrders = createAsyncThunk<
//   Order[],
//   RejectObject,
//   { rejectValue: FetchOrderError }
// >("orders/update", async (orderId, thunkApi) => {

//   const response = await fetch(
//     `http://gomunchi.pagekite.me/orders?status=ready&&status=pending`,
//     {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderId),
//     }
//   );
//   const data: Order[] = await response.json();
//   if (response.status !== 200) {
//     // Return the error message:
//     return thunkApi.rejectWithValue({
//       message: "Failed to fetch todos.",
//     });
//   }
//   return data;
// });

//processing to delivery

// export const updateOrders = createAsyncThunk<
//   Order[],
//   RejectObject,
//   { rejectValue: FetchOrderError }
// >("orders/update", async (orderId, thunkApi) => {

//   const response = await fetch(
//     `http://gomunchi.pagekite.me/orders?status=ready&&status=pending`,
//     {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderId),
//     }
//   );
//   const data: Order[] = await response.json();
//   if (response.status !== 200) {
//     // Return the error message:
//     return thunkApi.rejectWithValue({
//       message: "Failed to fetch todos.",
//     });
//   }
//   return data;
// });

//processing to pickup

// export const updateOrders = createAsyncThunk<
//   Order[],
//   RejectObject,
//   { rejectValue: FetchOrderError }
// >("orders/update", async (orderId, thunkApi) => {

//   const response = await fetch(
//     `http://gomunchi.pagekite.me/orders?status=ready&&status=pending`,
//     {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderId),
//     }
//   );
//   const data: Order[] = await response.json();
//   if (response.status !== 200) {
//     // Return the error message:
//     return thunkApi.rejectWithValue({
//       message: "Failed to fetch todos.",
//     });
//   }
//   return data;
// });

//processing to eatin

// export const updateOrders = createAsyncThunk<
//   Order[],
//   RejectObject,
//   { rejectValue: FetchOrderError }
// >("orders/update", async (orderId, thunkApi) => {

//   const response = await fetch(
//     `http://gomunchi.pagekite.me/orders?status=ready&&status=pending`,
//     {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderId),
//     }
//   );
//   const data: Order[] = await response.json();
//   if (response.status !== 200) {
//     // Return the error message:
//     return thunkApi.rejectWithValue({
//       message: "Failed to fetch todos.",
//     });
//   }
//   return data;
// });
