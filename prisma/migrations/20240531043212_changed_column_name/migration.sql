/*
  Warnings:

  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Publisher` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ResourceType` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Role` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category_name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[publisher_name]` on the table `Publisher` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[resource_type_name]` on the table `ResourceType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[role_name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category_name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisher_name` to the `Publisher` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Category_name_key";

-- DropIndex
DROP INDEX "Publisher_name_key";

-- DropIndex
DROP INDEX "ResourceType_name_key";

-- DropIndex
DROP INDEX "Role_name_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "name",
ADD COLUMN     "category_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Publisher" DROP COLUMN "name",
ADD COLUMN     "publisher_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ResourceType" DROP COLUMN "name",
ADD COLUMN     "resource_type_name" "ResourcesTypes" NOT NULL DEFAULT 'TYPE_BOOK';

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "name",
ADD COLUMN     "role_name" "RoleEnum" NOT NULL DEFAULT 'ROLE_USER';

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_name_key" ON "Category"("category_name");

-- CreateIndex
CREATE UNIQUE INDEX "Publisher_publisher_name_key" ON "Publisher"("publisher_name");

-- CreateIndex
CREATE UNIQUE INDEX "ResourceType_resource_type_name_key" ON "ResourceType"("resource_type_name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_role_name_key" ON "Role"("role_name");
