import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Resource } from "@/interfaces/resource/Resource";
import { RootState } from "../store.config";
import { InstanceLang } from "@/interfaces/instance/Instance";

export interface LoansCartState {
  items: { resource: Resource; lang: InstanceLang }[];
  open: boolean; // Por si se llega a usar un modal
}

const initialState: LoansCartState = {
  items: [],
  open: false,
};

// Freeze the initial state to prevent accidental changes
Object.freeze(initialState);

export const loansCartSlice = createSlice({
  name: "loansCart",
  initialState,
  reducers: {
    addResourceInstance: (
      state,
      action: PayloadAction<{ resource: Resource; lang: InstanceLang }>
    ) => {
      state.items.push(action.payload);
    },
    openCart: (state) => {
      state.open = true;
    },
    closeCart: (state) => {
      state.open = false;
    },
    removeResourceInstance: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.resource.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.items = [];
      state.open = false;
    },
  },
});

export const selectLoansCart = (state: RootState) => state.loansCart;

export const {
  addResourceInstance,
  removeResourceInstance,
  openCart,
  closeCart,
  resetCart,
} = loansCartSlice.actions;

export const { reducer: loansCartReducer } = loansCartSlice;
