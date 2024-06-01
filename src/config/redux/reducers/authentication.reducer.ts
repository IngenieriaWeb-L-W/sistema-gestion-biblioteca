import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AuthCredentials } from "@/interfaces/auth/AuthCredentials";
import { RootState } from "../store.config";
import UserRole from "@/interfaces/user/Role";

export interface AuthenticationState extends AuthCredentials {
  activeRole?: UserRole;
}

const initialState: AuthenticationState = {
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
      state.activeRole = action.payload.roles[0] as UserRole;
    },
    changeActiveRole: (state, action: PayloadAction<UserRole>) => {
      if (state.roles.includes(action.payload)) {
        state.activeRole = action.payload;
      }
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

export const selectAuthentication = (state: RootState) => state.authentication;

export const { loginUser, logoutUser, changeActiveRole } =
  authenticationSlice.actions;

export const { reducer: authenticationReducer } = authenticationSlice;
