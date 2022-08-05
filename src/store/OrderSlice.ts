import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { ExecFileSyncOptionsWithBufferEncoding } from "child_process";

export type Item = {
  id: number;
  quantity: number;
  name: string;
};

export type OrdersObject = OrderInfo[];

export type OrderInfo = {
  id: string;
  status: string;
  name: string;
  items: Item[];
  note: string;
  timeStamp: string,
  timeReady?: ExecFileSyncOptionsWithBufferEncoding,
};

const initialState = {
  orders: [
    {
      id: "4225",
      status: "pending",
      name: " Mario H.",
      items: [
        {
          id: 1,
          quantity: 1,
          name: "Veggie burger with margarita on top of The burger double patty.",
        },
        {
          id: 2,
          quantity: 2,
          name: "Juicy Original without mayo",
        },
        {
          id: 3,
          quantity: 1,
          name: "Cuban Fritata",
        },
        {
          id: 4,
          quantity: 1,
          name: "The New York",
        },
      ],
      note: "No tomatoe please",
      timeStamp: "15:43",
      timeReady: "",
    },
    {
      id: "4210",
      name: " Julia K.",
      status: "accepted",
      items: [
        {
          id: 1,
          quantity: 1,
          name: "Veggie burger with margarita on top of The burger double patty.",
        },
        {
          id: 2,
          quantity: 2,
          name: "Juicy Original without mayo",
        },
        {
          id: 3,
          quantity: 1,
          name: "Cuban Fritata",
        },
        {
          id: 4,
          quantity: 1,
          name: "The New York",
        },
        {
          id: 5,
          quantity: 1,
          name: "El Sol Beers",
        },
        {
          id: 6,
          quantity: 4,
          name: "Tequila Shots",
        },
      ],
      note: "No tomatoe please",
      timeStamp: "15:43",
      timeReady: "",
    },
    {
      id: "4210",
      name: " Julia K.",
      status: "ready",
      items: [
        {
          id: 1,
          quantity: 1,
          name: "Veggie burger with margarita on top of The burger double patty.",
        },
        {
          id: 2,
          quantity: 2,
          name: "Juicy Original without mayo",
        },
        {
          id: 3,
          quantity: 1,
          name: "Cuban Fritata",
        },
        {
          id: 4,
          quantity: 1,
          name: "The New York",
        },
        {
          id: 5,
          quantity: 1,
          name: "El Sol Beers",
        },
        {
          id: 6,
          quantity: 4,
          name: "Tequila Shots",
        },
      ],
      note: "No tomatoe please",
      timeStamp: "15:43",
      timeReady: "",
    },
  ],
};
// bring orders
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrderInfo: (state: any,PayloadAction) =>{
        const orderId = PayloadAction.payload;
        const currentState = current(state)
        const filterOrder = currentState.orders.filter(
          (order: any) => order.id == orderId
        );
        console.log(filterOrder);
        return filterOrder;
    },
  },
});

// Action creators are generated for each case reducer function
export const {  getOrderInfo } = orderSlice.actions;

export default orderSlice.reducer;
