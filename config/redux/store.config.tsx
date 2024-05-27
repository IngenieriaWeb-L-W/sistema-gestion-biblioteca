import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { loanTransactionsReducer } from "./reducers/loan-transactions.reducer";
import {
  ResourceCategoriesState,
  resourceCategoriesReducer,
} from "./reducers/resource-categories.reducer";
import { ResourceState, resourcesReducer } from "./reducers/resources.reducer";
import {
  UserInterfaceState,
  userInterfaceReducer,
} from "./reducers/user-interface.reducer";

export interface GlobalState {
  userInterface: UserInterfaceState;
  resources: ResourceState;
  resourceCategories: ResourceCategoriesState;
}

const reducer = combineReducers({
  userInterface: userInterfaceReducer,
  resources: resourcesReducer,
  resourceCategories: resourceCategoriesReducer,
  loanTransactions: loanTransactionsReducer,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
