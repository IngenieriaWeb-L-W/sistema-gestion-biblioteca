/*
  Warnings:

  - The `resource_type_name` column on the `ResourceType` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ResourceTypes" AS ENUM ('BOOK', 'MAGAZINE', 'DVD', 'COMICS', 'ENCYCLOPEDIA', 'DICTIONARY', 'ARTICLE', 'REPORT', 'RESEARCH_PAPER', 'EDUCATIONAL');

-- AlterTable
ALTER TABLE "ResourceType" DROP COLUMN "resource_type_name",
ADD COLUMN     "resource_type_name" "ResourceTypes" NOT NULL DEFAULT 'BOOK';

-- DropEnum
DROP TYPE "ResourcesTypes";

-- CreateIndex
CREATE UNIQUE INDEX "ResourceType_resource_type_name_key" ON "ResourceType"("resource_type_name");
