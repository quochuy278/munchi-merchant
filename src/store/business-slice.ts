import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { RootState } from ".";
import { UserObject } from "../shared/interfaces/user.interface";

const initialState = {
  enbled: false,
  name: ''
};

export const BusinessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    setBusiness: (state) => {
      console.log('set business')
      state.enbled = true
    
    },
  },
});

export const { setBusiness } = BusinessSlice.actions;

export default BusinessSlice.reducer;
