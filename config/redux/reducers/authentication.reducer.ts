import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store.config";

export interface AuthenticationState {
  name: string;
  email: string;
  image: string;
}

const initialState: AuthenticationState = {
  name: "",
  email: "",
  image: "",
};

// Freeze the initial state to prevent accidental changes
Object.freeze(initialState);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<AuthenticationState>) => {
      state = action.payload;
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

export const selectAuthentication = (state: RootState) => state.authentication;

export const { loginUser, logoutUser } = authenticationSlice.actions;

export const { reducer: authenticationReducer } = authenticationSlice;
