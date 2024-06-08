import { NextRequest, NextResponse } from "next/server";

import { OAuth2Client } from "google-auth-library";
import { sign } from "jsonwebtoken";

import DBClient from "@/config/prisma/prisma.config";
import { GoogleTokenPayload } from "@/interfaces/auth/GoogleTokenPayload";
import UserRole from "@/interfaces/user/Role";
import { User } from "@/interfaces/user/User";

const { prisma } = DBClient.getInstance();

const oauth2 = new OAuth2Client();

export interface GoogleCertsResponse {
  keys: Key[];
}

export interface Key {
  e: string;
  kty: string;
  kid: string;
  n: string;
  alg: string;
  use: string;
}

const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { idToken } = body;
    const verifiedTokenPayload = await validateTokenAuthenticity(idToken);
    if (!verifiedTokenPayload) {
      return NextResponse.error();
    }
    const user = await authenticateUser(verifiedTokenPayload);
    if (!user) {
      throw new Error("Error asserting user in DB");
    }
    const accessToken = sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });
    return NextResponse.json({ user, accessToken });
  } catch (err) {
    return NextResponse.error();
  }
};

/**
 * This function validates the authenticity of the token, that is, it checks if the token was issued by Google.
 * @param idToken
 * @returns GoogleTokenPayload
 */
const validateTokenAuthenticity = async (idToken: string) => {
  const ticket = await oauth2.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID!,
  });
  return ticket.getPayload() as GoogleTokenPayload;
};

const authenticateUser = async (
  verifiedTokenPayload: GoogleTokenPayload
): Promise<User> => {
  return findByEmail(verifiedTokenPayload.email).then((userDB) => {
    if (!userDB) {
      return createUser(verifiedTokenPayload).then((id) =>
        findByIdOrThrow(id).then((userDB) => ({
          id: userDB.id,
          firstName: userDB.first_name,
          email: userDB.email,
          lastName: userDB.last_name,
          username: userDB.email,
          address: userDB.address || "",
          phone: userDB.phone || "",
          active: userDB.active,
          imageUrl: userDB.image_url || "",
          roles: userDB.roles.map((role) => role.role_name as UserRole),
          createdAt: userDB.created_at,
          updatedAt: userDB.updated_at,
        }))
      );
    }
    return {
      id: userDB.id,
      firstName: userDB.first_name,
      email: userDB.email,
      lastName: userDB.last_name,
      username: userDB.email,
      address: userDB.address || "",
      phone: userDB.phone || "",
      active: userDB.active,
      imageUrl: userDB.image_url || "",
      roles: userDB.roles.map((role) => role.role_name as UserRole),
      createdAt: userDB.created_at,
      updatedAt: userDB.updated_at,
    };
  });
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
        connect: [
          {
            role_name: UserRole.ROLE_USER,
          },
        ],
      },
    },
  });

  return userCreated.id;
};

const findByIdOrThrow = (id: string) => {
  return prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      roles: true,
    },
  });
};

const findByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      roles: true,
    },
  });
};

export { POST };
