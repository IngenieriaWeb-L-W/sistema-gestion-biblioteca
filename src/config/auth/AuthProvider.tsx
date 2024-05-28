"use client";

import React from "react";

import { SessionProvider } from "next-auth/react";

type AuthProviderProps = Readonly<{
  children: React.ReactNode;
}>;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
