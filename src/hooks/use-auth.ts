import { logoutUser } from "@/config/redux/reducers/authentication.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { BuiltInProviderType } from "next-auth/providers/index";
import { LiteralUnion, signIn, signOut } from "next-auth/react";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const login = (
    provider: LiteralUnion<BuiltInProviderType>,
    redirect?: boolean,
    callbackUrl?: string
  ) => {
    return signIn(provider, {
      redirect,
      callbackUrl,
    });
  };

  const logout = (redirect?: boolean, callbackUrl?: string) => {
    return signOut({
      redirect,
      callbackUrl,
    }).then(() => {
      dispatch(logoutUser());
    });
  };

  return { login, logout };
};
