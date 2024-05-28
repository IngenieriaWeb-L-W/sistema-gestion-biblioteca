"use client";

import React, { Fragment, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";

import { selectAuthentication } from "../../config/redux/reducers/authentication.reducer";
import UserRole from "../../interfaces/user/Role";

type AuthLayoutProps = {
  allowedRoles: UserRole[];
  children: React.ReactNode;
  fallbackUrl: string;
};

export const AuthLayout = ({
  allowedRoles,
  children,
  fallbackUrl,
}: AuthLayoutProps) => {
  const router = useRouter();
  const { roles, email } = useSelector(selectAuthentication);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!email) return;
    if (allowedRoles.includes(UserRole.ALL)) {
      setIsAuthorized(true);
      return;
    }
    setIsAuthorized(allowedRoles.some((role) => roles.includes(role)));
  }, [allowedRoles, roles, email, setIsAuthorized]);

  // if (!isAuthorized) router.push(fallbackUrl);

  return <Fragment>{children}</Fragment>;
};
