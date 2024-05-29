/*
  Warnings:

  - The `name` column on the `Role` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "RoleEnum" AS ENUM ('ROLE_ADMIN', 'ROLE_SECRETARY', 'ROLE_USER');

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "name",
ADD COLUMN     "name" "RoleEnum" NOT NULL DEFAULT 'ROLE_USER';

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");
