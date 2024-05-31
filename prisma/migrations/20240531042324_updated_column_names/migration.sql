/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Loan` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Loan` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Publisher` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Publisher` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Resource` table. All the data in the column will be lost.
  - You are about to drop the column `publisherId` on the `Resource` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Resource` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Resource` table. All the data in the column will be lost.
  - The primary key for the `ResourceCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryId` on the `ResourceCategory` table. All the data in the column will be lost.
  - You are about to drop the column `resourceId` on the `ResourceCategory` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ResourceInstance` table. All the data in the column will be lost.
  - You are about to drop the column `resourceId` on the `ResourceInstance` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ResourceInstance` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - The primary key for the `UserRole` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `roleId` on the `UserRole` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserRole` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Loan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Publisher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisher_id` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_id` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `ResourceCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resource_id` to the `ResourceCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resource_id` to the `ResourceInstance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `ResourceInstance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `UserRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `UserRole` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_publisherId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_typeId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceCategory" DROP CONSTRAINT "ResourceCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceCategory" DROP CONSTRAINT "ResourceCategory_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "ResourceInstance" DROP CONSTRAINT "ResourceInstance_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_roleId_fkey";

-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_userId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Loan" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Publisher" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "createdAt",
DROP COLUMN "publisherId",
DROP COLUMN "typeId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "publisher_id" TEXT NOT NULL,
ADD COLUMN     "type_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ResourceCategory" DROP CONSTRAINT "ResourceCategory_pkey",
DROP COLUMN "categoryId",
DROP COLUMN "resourceId",
ADD COLUMN     "category_id" INTEGER NOT NULL,
ADD COLUMN     "resource_id" TEXT NOT NULL,
ADD CONSTRAINT "ResourceCategory_pkey" PRIMARY KEY ("resource_id", "category_id");

-- AlterTable
ALTER TABLE "ResourceInstance" DROP COLUMN "createdAt",
DROP COLUMN "resourceId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "resource_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_pkey",
DROP COLUMN "roleId",
DROP COLUMN "userId",
ADD COLUMN     "role_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "UserRole_pkey" PRIMARY KEY ("user_id", "role_id");

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "ResourceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "Publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceInstance" ADD CONSTRAINT "ResourceInstance_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceCategory" ADD CONSTRAINT "ResourceCategory_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceCategory" ADD CONSTRAINT "ResourceCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
