import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store.config";
import UserRole from "@/interfaces/user/Role";

export interface AuthenticationState {
  name: string;
  email: string;
  roles: UserRole[];
  image: string;
}

const initialState: AuthenticationState = {
  name: "",
  email: "",
  image: "",
  roles: [],
};

// Freeze the initial state to prevent accidental changes
Object.freeze(initialState);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<AuthenticationState>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.roles = action.payload.roles;
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

export const selectAuthentication = (state: RootState) => state.authentication;

export const { loginUser, logoutUser } = authenticationSlice.actions;

export const { reducer: authenticationReducer } = authenticationSlice;
