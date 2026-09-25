import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerResponse } from "../../types/types";

type CarState = {
  customerDetails: CustomerResponse;
};

const initialState: CarState = {
  customerDetails: {
    result: [],
  },
};

const carSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setCustomerDetails(state, action: PayloadAction<CustomerResponse>) {
      state.customerDetails = action.payload;
    },
    clearCustomerDetails(state) {
      state.customerDetails = {
        result: [],
      };
    },
  }
});

export const {
  setCustomerDetails,
  clearCustomerDetails,
} = carSlice.actions;

export default carSlice.reducer;
