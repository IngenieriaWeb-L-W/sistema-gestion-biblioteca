"use client";

import React, { Fragment, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { selectAuthentication } from "../../config/redux/reducers/authentication.reducer";
import UserRole from "../../interfaces/user/Role";
import { AppLoading } from "../loader/AppLoading";

type AuthLayoutProps = {
  allowedRoles?: UserRole[];
  children: React.ReactNode;
  // fallbackUrl: string;
  unauthenticated?: boolean;
};

export const AuthLayout = ({
  allowedRoles,
  children,
  // fallbackUrl,
  unauthenticated,
}: AuthLayoutProps) => {
  const { roles, email } = useSelector(selectAuthentication);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (unauthenticated) {
      setIsAuthorized(true);
      return;
    }
    if (!email) return;
    if (allowedRoles!.includes(UserRole.ALL)) {
      setIsAuthorized(true);
      return;
    }
    setIsAuthorized(allowedRoles!.some((role) => roles.includes(role)));
  }, [allowedRoles, roles, email, setIsAuthorized, unauthenticated]);

  return isAuthorized ? <Fragment>{children}</Fragment> : <AppLoading />;
};
