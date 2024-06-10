import { verify } from "jsonwebtoken";

export const verifyAccessToken = (token: string) => {
  try {
    const payload = verify(token, process.env.JWT_SECRET!);
    console.log({ PAYLOAD: payload });
    return payload as { id: string };
  } catch (error) {
    return null;
  }
};
