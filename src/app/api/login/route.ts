// /app/api/route.ts
import { AuthCredentials } from "@/interfaces/auth/AuthCredentials";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { GoogleTokenPayload } from "@/interfaces/auth/GoogleTokenPayload";
import UserRole from "@/interfaces/user/Role";
import { decode, sign } from "jsonwebtoken";

const prisma = new PrismaClient();

const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { idToken } = body;
    const user = await authenticateUser(idToken);
    const accessToken = sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    return NextResponse.json({ user, accessToken });
  } catch (err) {
    return NextResponse.error();
  }
};

const authenticateUser = async (idToken: string): Promise<AuthCredentials> => {
  const tokenInfo = decode(idToken) as GoogleTokenPayload;
  const userDB = await prisma.user.findFirst({
    where: {
      email: tokenInfo.email,
    },
  });

  if (!userDB) {
    return createUser(tokenInfo).then((user) => {
      return {
        ...user,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        active: user.active,
        imageUrl: user.image_url || "",
        roles: [UserRole.ROLE_USER],
        createdAt: user.created_at,
      };
    });
  }
  return {
    ...userDB,
    firstName: userDB.first_name,
    lastName: userDB.last_name,
    email: userDB.email,
    active: userDB.active,
    imageUrl: userDB.image_url || "",
    roles: [UserRole.ROLE_USER],
    createdAt: userDB.created_at,
  };
};

const createUser = async (tokenInfo: GoogleTokenPayload) => {
  const userCreated = await prisma.user.create({
    data: {
      first_name: tokenInfo.given_name,
      last_name: tokenInfo.family_name,
      email: tokenInfo.email,
      image_url: tokenInfo.picture,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
      roles: {
        connect: {
          role_name: UserRole.ROLE_USER,
        },
      },
    },
  });
  return userCreated;
};

export { POST };
