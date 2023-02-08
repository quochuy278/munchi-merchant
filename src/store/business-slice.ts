import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { RootState } from ".";
import { UserObject } from "../shared/interfaces/user.interface";

const initialState = {
  enabled: false,
  businessData: {},
};

export const BusinessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    setBusiness: (state, { payload }: any) => {
      console.log(payload);
      if (state.businessData !== null) {
        state.businessData = { ...state.businessData, ...payload };
      } else {
        console.log("can only set one business");
      }
      // state.enabled = true;
      // console.log("set business");
    },
  },
});

export const { setBusiness } = BusinessSlice.actions;

export default BusinessSlice.reducer;
