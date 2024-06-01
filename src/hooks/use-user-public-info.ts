import { useAppDispatch } from "@/config/redux/store.config";
import { User } from "@/interfaces/user/User";
import { fetchUserPublicInfoMiddleware } from "@/middleware/users.middleware";
import { useEffect, useState } from "react";

export type UserPublicInfo = Pick<
  User,
  "id" | "firstName" | "lastName" | "imageUrl"
>;

const useUserPublicInfo = (id: string) => {
  const [userInfo, setUserInfo] = useState<UserPublicInfo>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserPublicInfoMiddleware(id)).then((userPublicInfo) => {
      setUserInfo(userPublicInfo!);
    });
  }, [id, dispatch]);

  return userInfo;
};

export default useUserPublicInfo;
