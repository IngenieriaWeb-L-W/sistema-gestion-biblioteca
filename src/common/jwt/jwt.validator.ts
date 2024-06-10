import { verify } from "jsonwebtoken";

export const verifyAccessToken = (token: string) => {
  try {
    const jwtToken = token.split(" ")[1];
    const payload = verify(jwtToken, process.env.JWT_SECRET!);

    return payload as { id: string };
  } catch (error) {
    return null;
  }
};
