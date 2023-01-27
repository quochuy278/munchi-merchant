import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { RootState } from ".";
import { UserObject } from "../shared/interfaces/user.interface";

const initialState = {
  enabled: false,
  name: "",
};

export const BusinessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    setBusiness: (state, { payload }: PayloadAction) => {
      console.log(payload);
      state.enabled = true;
      console.log("set business");
    },
  },
});

export const { setBusiness } = BusinessSlice.actions;

export default BusinessSlice.reducer;
