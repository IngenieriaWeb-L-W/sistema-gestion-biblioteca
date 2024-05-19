import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import {
  UserInterfaceState,
  userInterfaceReducer,
} from "./reducers/user-interface.reducer";

export interface GlobalState {
  userInterface: UserInterfaceState;
}

const reducer = combineReducers({
  userInterface: userInterfaceReducer,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
