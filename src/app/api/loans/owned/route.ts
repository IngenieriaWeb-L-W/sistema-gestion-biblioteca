/* eslint-disable indent */
import { verifyAccessToken } from "@/common/jwt/jwt.validator";
import DBClient from "@/config/prisma/prisma.config";
import { InstanceLang, InstanceStatus } from "@/interfaces/instance/Instance";
import { InstanceLoan } from "@/interfaces/loan/Loan";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

type Filters = {
  search: string;
  userId: string;
  pagination: {
    page: number;
    size: number;
  };
};

const GET = async (req: NextRequest) => {
  if (req.method !== "GET") return NextResponse.error();
  try {
    const accessToken = req.headers.get("authorization");
    if (!accessToken) return NextResponse.error();
    const tokenPayload = verifyAccessToken(accessToken);
    if (!tokenPayload) return NextResponse.error();

    const query = req.nextUrl.searchParams;
    const resourcesFilter: Filters = {
      search: query.get("search") || "",
      userId: tokenPayload.id,
      pagination: {
        page: parseInt(query.get("page") || "1"),
        size: parseInt(query.get("size") || "25"),
      },
    };

    return Promise.all([
      getFilteredLoans(resourcesFilter),
      countFilteredLoans(resourcesFilter),
    ])
      .then(([records, total]) => {
        return NextResponse.json({ records, total });
      })
      .catch(() => {
        return NextResponse.error();
      });
  } catch (err) {
    return NextResponse.error();
  }
};

const getFilteredLoans = (filters: Filters): Promise<InstanceLoan[]> => {
  const { pagination } = filters;
  const skip = (pagination.page - 1) * pagination.size;

  return prisma.resourceLoan
    .findMany({
      include: {
        instance: true,
        user: true,
      },
      where: {
        userId: filters.userId,
        AND: {
          instance: {
            instance_name: {
              contains: filters.search,
            },
          },
        },
      },
      skip,
      take: pagination.size,
    })
    .then((filteredLoans) =>
      filteredLoans.map((loan) => ({
        id: loan.id,
        instance: {
          id: loan.instance.id,
          name: loan.instance.instance_name,
          status: loan.instance.status as InstanceStatus,
          lang: loan.instance.lang as InstanceLang,
          createdAt: loan.instance.created_at,
          updatedAt: loan.instance.updated_at,
        },
        until: loan.until,
        createdAt: loan.created_at,
      }))
    );
};

const countFilteredLoans = (filters: Filters): Promise<number> => {
  return prisma.resourceLoan
    .count({
      where: {
        userId: filters.userId,
        AND: {
          instance: {
            instance_name: {
              contains: filters.search,
            },
          },
        },
      },
    })
    .then((total) => total);
};

export { GET };
