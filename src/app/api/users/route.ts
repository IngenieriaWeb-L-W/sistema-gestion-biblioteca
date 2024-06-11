import { NextRequest, NextResponse } from "next/server";

import DBClient from "@/config/prisma/prisma.config";
import { Election, UsersFilter } from "@/hooks/use-users-table";
import UserRole from "@/interfaces/user/Role";
// import { PrismaClient } from "../../../../../../prisma/generated/client";

const { prisma } = DBClient.getInstance();

const GET = async (req: NextRequest) => {
  // todo: Usar el query para filtrar los usuarios
  const query = req.nextUrl.searchParams;
  const usersFilter: UsersFilter = {
    search: query.get("search") || "",
    role: query.get("role") || UserRole.ALL,
    status: (query.get("status") as Election) || Election.BOTH,
    pagination: {
      page: parseInt(query.get("page") || "0"),
      size: parseInt(query.get("limit") || "25"),
    },
  };
  const [records, total] = await Promise.all([
    getUsersByFilter(usersFilter),
    countUsersByFilter(usersFilter),
  ]);

  return NextResponse.json({ records, total });
};

const getUsersByFilter = async (usersFilter: UsersFilter) => {
  const usersByFilter = await prisma.user.findMany({
    where: {
      email: {
        contains: usersFilter.search,
      },
    },
  });

  return Promise.all(
    usersByFilter.map((userDB) => {
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
        .then((roles) => ({
          id: userDB.id,
          firstName: userDB.first_name,
          lastName: userDB.last_name,
          email: userDB.email,
          active: userDB.active,
          address: userDB.address || "",
          phone: userDB.phone || "",
          imageUrl: userDB.image_url || "",
          roles: roles.map((role) => role.role_name as UserRole),
        }));
    })
  );
};

const countUsersByFilter = async (
  usersFilter: UsersFilter
): Promise<number> => {
  return prisma.user.count({
    where: {
      email: {
        contains: usersFilter.search,
      },
    },
  });
};

export { GET };
