import { verifyAccessToken } from "@/common/jwt/jwt.validator";
import DBClient from "@/config/prisma/prisma.config";
import {
  InstanceLang,
  InstanceStatus,
  ResourceInstance,
} from "@/interfaces/instance/Instance";
import { TransactionType } from "@/interfaces/loan/Transaction";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

type Data = {
  resourceId: string;
  lang: InstanceLang;
}[];

const POST = async (req: NextRequest) => {
  if (req.method !== "POST") return NextResponse.error();

  const accessToken = req.headers.get("authorization");
  if (!accessToken) return NextResponse.error();
  const tokenPayload = verifyAccessToken(accessToken);
  if (!tokenPayload) return NextResponse.error();

  const body = await req.json();
  const data = body as Data;
  const instancesToLoan: { resourceId: string; instance: ResourceInstance }[] =
    [];

  for await (const { resourceId, lang } of data) {
    const itemsToLoan = await searchItemsToLoan(resourceId, lang);
    if (!itemsToLoan) {
      return NextResponse.json({
        status: 409,
        message: "No items available to loan",
        resourceId,
      });
    }
    instancesToLoan.push(itemsToLoan);
  }
  const resourcesIds = instancesToLoan.map((item) => item.resourceId);
  const resourcesDaysToLoan =
    await getAllResourceTypesOfResources(resourcesIds);

  for await (const { resourceId, instance } of instancesToLoan) {
    await prisma.resourceLoan
      .create({
        data: {
          instance: {
            connect: {
              id: instance.id,
            },
          },
          user: {
            connect: {
              id: tokenPayload.id,
            },
          },
          until: new Date(
            new Date().setDate(
              new Date().getDate() +
                resourcesDaysToLoan.find(
                  (resource) => resource.resourceId === resourceId
                )!.maxLoanDays || 0
            )
          ),
          created_at: new Date(),
          updated_at: new Date(),
        },
      })
      .then(({ instanceId }) =>
        createLoanTransaction(tokenPayload.id, instanceId)
      );
  }
};

const searchItemsToLoan = async (resourceId: string, lang: InstanceLang) => {
  return prisma.resourceInstance
    .findFirst({
      where: {
        resource_id: resourceId,
        AND: {
          loan: null,
          lang: lang,
          status: {
            // No se prestan los recursos dañados, archivados o perdidos
            notIn: [
              InstanceStatus.DAMAGED,
              InstanceStatus.ARCHIVED,
              InstanceStatus.LOST,
            ],
          },
        },
      },
      include: {
        resource: true,
      },
    })
    .then((instance) => {
      if (!instance) return null;
      return {
        resourceId: instance.resource_id,
        instance: {
          id: instance.id,
          name: instance.instance_name,
          status: instance.status as InstanceStatus,
          lang: instance.lang as InstanceLang,
          createdAt: instance.created_at,
          updatedAt: instance.updated_at,
        },
      };
    });
};

const getAllResourceTypesOfResources = (resourcesIds: string[]) => {
  return prisma.resource
    .findMany({
      where: {
        id: {
          in: resourcesIds,
        },
      },
      include: {
        type: true,
      },
    })
    .then((resources) => {
      return resources.map((resource) => {
        return {
          resourceId: resource.id,
          maxLoanDays: resource.type.max_loan_days,
        };
      });
    });
  //   return prisma.resourceType.findMany().then((resourceTypes) => {
  //     return resourceTypes.map((type) => {
  //       return {
  //         id: type.id,
  //         name: type.resource_type_name,
  //         maxLoanDays: type.max_loan_days,
  //       };
  //     });
  //   });
};

const createLoanTransaction = (userId: string, instanceId: string) => {
  prisma.transaction.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      instance: {
        connect: {
          id: instanceId,
        },
      },
      type: TransactionType.TRANSACTION_LOAN,
      created_at: new Date(),
    },
  });
};

export { POST };
