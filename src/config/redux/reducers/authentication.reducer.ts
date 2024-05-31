import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AuthCredentials } from "@/interfaces/auth/AuthCredentials";
import { RootState } from "../store.config";

const initialState: AuthCredentials = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  imageUrl: "",
  active: false,
  roles: [],
  createdAt: new Date(),
};

// Freeze the initial state to prevent accidental changes
Object.freeze(initialState);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<AuthCredentials>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.imageUrl = action.payload.imageUrl;
      state.active = action.payload.active;
      state.roles = action.payload.roles;
      state.createdAt = action.payload.createdAt;
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

export const selectAuthentication = (state: RootState) => state.authentication;

export const { loginUser, logoutUser } = authenticationSlice.actions;

export const { reducer: authenticationReducer } = authenticationSlice;
