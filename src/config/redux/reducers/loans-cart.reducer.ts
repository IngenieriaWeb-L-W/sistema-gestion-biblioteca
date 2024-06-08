import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Resource } from "@/interfaces/resource/Resource";
import { RootState } from "../store.config";

export interface LoansCartState {
  records: Resource[];
  // open: boolean; // Por si se llega a usar un modal
}

const initialState: LoansCartState = {
  records: [],
  // open: false,
};

// Freeze the initial state to prevent accidental changes
Object.freeze(initialState);

export const loansCartSlice = createSlice({
  name: "loansCart",
  initialState,
  reducers: {
    addResource: (state, action: PayloadAction<Resource>) => {
      state.records.push(action.payload);
    },
    // openCart: (state) => {
    //   state.open = true;
    // },
    // closeCart: (state) => {
    //   state.open = false;
    // },
    removeResource: (state, action: PayloadAction<string>) => {
      state.records = state.records.filter(
        (resource) => resource.id !== action.payload
      );
    },
  },
});

export const selectLoansCart = (state: RootState) => state.loansCart;

export const { addResource, removeResource /* openCart, closeCart */ } =
  loansCartSlice.actions;

export const { reducer: loansCartReducer } = loansCartSlice;
