"use client";

import React from "react";

import { store } from "./store.config";
import { Provider } from "react-redux";

type StateProviderProps = {
  children: React.ReactNode;
};

export const StateProvider = ({ children }: StateProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
