import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  pendingItem: [],
  acceptedItem: [],
  readyItem: [],
};
// bring orders
export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addPendingItem: (PayloadAction) => {
      console.log(PayloadAction);
    },
    addAcceptedItem: (PayloadAction) => {
      console.log(PayloadAction);
    },
    addReadyItem: (PayloadAction) => {
      console.log(PayloadAction);
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = itemSlice.actions;

export default itemSlice.reducer;
