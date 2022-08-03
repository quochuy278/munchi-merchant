import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  orders: [
    {
      id: "#4225",
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
    },
    {
      id: "#4210",
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
    },
    {
      id: "#4210",
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
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
