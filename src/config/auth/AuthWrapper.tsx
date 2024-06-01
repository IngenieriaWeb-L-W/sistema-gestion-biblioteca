"use client";

import { Fragment, useEffect } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { logInUserMiddleware } from "@/middleware/auth.middleware";
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
  const GOOGLE = useSession();
  const { status, data: session } = GOOGLE;
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
    if (!session?.id_token) {
      dispatch(finishGlobalLoading());
      return;
    }
    if (status === "authenticated" && session?.user) {
      dispatch(logInUserMiddleware(session.id_token))
        .then(() => {
          // router.replace("/dashboard");
        })
        .catch(() => {
          dispatch(
            setGlobalAlert({
              message: "Authentication failed, try again...⛔",
              severity: SeverityLevel.ERROR,
              timeout: 5000,
            })
          );
          router.replace("/landing");
        })
        .finally(() => {
          dispatch(finishGlobalLoading());
        });
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
