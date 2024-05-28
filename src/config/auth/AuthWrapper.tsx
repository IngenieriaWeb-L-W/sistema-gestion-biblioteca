"use client";

import { Fragment, useEffect } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { loginUser } from "../redux/reducers/authentication.reducer";
import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "../redux/reducers/user-interface.reducer";
import { useAppDispatch } from "../redux/store.config";

type AuthWrapperProps = {
  children: React.ReactNode;
};

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setGlobalAlert({
        message: "Checking your authentication...",
        severity: SeverityLevel.INFO,
        timeout: 5000,
      })
    );
    if (status === "authenticated" && session?.user) {
      const { user } = session;

      dispatch(
        loginUser({
          name: user.name || "",
          email: user.email || "",
          image: user.image || "",
          roles: [],
        })
      );
      dispatch(finishGlobalLoading());
      router.replace("/dashboard");
    }
  }, [router, status, dispatch, session]);

  useEffect(() => {
    if (status === "unauthenticated") {
      dispatch(finishGlobalLoading());
      router.replace("/landing");
    }
  }, [router, status, dispatch]);

  if (status === "loading") {
    dispatch(startGlobalLoading({ message: "Checking your authentication" }));
  }

  return <Fragment>{children}</Fragment>;
};
