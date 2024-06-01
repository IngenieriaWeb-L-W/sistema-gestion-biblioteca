import { NextRequest, NextResponse } from "next/server";

import { OAuth2Client } from "google-auth-library";
import { sign } from "jsonwebtoken";

import { GoogleTokenPayload } from "@/interfaces/auth/GoogleTokenPayload";
import { PrismaClient } from "../../../../prisma/generated/client";
import { AuthCredentials } from "@/interfaces/auth/AuthCredentials";
import UserRole from "@/interfaces/user/Role";

const oauth2 = new OAuth2Client();
const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

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

const authenticateUser = async (verifiedTokenPayload: GoogleTokenPayload) => {
  return prisma.user
    .findFirst({
      where: {
        email: verifiedTokenPayload.email,
      },
    })
    .then((userDB) => {
      if (!userDB) {
        return createUser(verifiedTokenPayload).then((savedUser) => {
          return prisma.role
            .findMany({
              where: {
                users: {
                  some: {
                    id: savedUser.id,
                  },
                },
              },
            })
            .then((roles) => {
              return {
                id: savedUser.id,
                firstName: savedUser.first_name,
                lastName: savedUser.last_name,
                email: savedUser.email,
                active: savedUser.active,
                address: savedUser.address || "",
                phone: savedUser.phone || "",
                imageUrl: savedUser.image_url || "",
                roles: roles.map((role) => role.role_name as UserRole),
                createdAt: savedUser.created_at,
              };
            });
        });
      }
      return prisma.role
        .findMany({
          where: {
            users: {
              some: {
                id: userDB.id,
              },
            },
          },
        })
        .then((roles) => {
          return {
            firstName: userDB.first_name,
            lastName: userDB.last_name,
            email: userDB.email,
            active: userDB.active,
            imageUrl: userDB.image_url || "",
            address: userDB.address || "",
            phone: userDB.phone || "",
            roles: roles.map((role) => role.role_name as UserRole),
            createdAt: userDB.created_at,
            id: userDB.id,
          };
        });
    })
    .catch((error) => {
      console.log(error);
      return null;
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
        connect: {
          role_name: UserRole.ROLE_USER,
        },
      },
    },
  });
  return userCreated;
};

export { POST };
