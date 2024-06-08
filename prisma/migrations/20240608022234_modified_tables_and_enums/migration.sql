/*
  Warnings:

  - The values [STATUS_GOOD,STATUS_POOR,STATUS_DAMAGED,STATUS_LOST,STATUS_ARCHIVED] on the enum `ResourceInstanceStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `isbn` on the `Resource` table. All the data in the column will be lost.
  - You are about to drop the column `pub_year` on the `Resource` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug_name]` on the table `Resource` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[detail_id]` on the table `Resource` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ResourceInstanceStatus_new" AS ENUM ('GOOD', 'POOR', 'DAMAGED', 'LOST', 'ARCHIVED');
ALTER TABLE "ResourceInstance" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "ResourceInstance" ALTER COLUMN "status" TYPE "ResourceInstanceStatus_new" USING ("status"::text::"ResourceInstanceStatus_new");
ALTER TYPE "ResourceInstanceStatus" RENAME TO "ResourceInstanceStatus_old";
ALTER TYPE "ResourceInstanceStatus_new" RENAME TO "ResourceInstanceStatus";
DROP TYPE "ResourceInstanceStatus_old";
ALTER TABLE "ResourceInstance" ALTER COLUMN "status" SET DEFAULT 'GOOD';
COMMIT;

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ResourceLang" ADD VALUE 'LANG_HI';
ALTER TYPE "ResourceLang" ADD VALUE 'LANG_RU';
ALTER TYPE "ResourceLang" ADD VALUE 'LANG_JA';
ALTER TYPE "ResourceLang" ADD VALUE 'LANG_ZH';
ALTER TYPE "ResourceLang" ADD VALUE 'LANG_PT';
ALTER TYPE "ResourceLang" ADD VALUE 'LANG_AR';

-- DropIndex
DROP INDEX "Resource_isbn_key";

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "isbn",
DROP COLUMN "pub_year",
ADD COLUMN     "detail_id" INTEGER,
ADD COLUMN     "slug_name" TEXT;

-- AlterTable
ALTER TABLE "ResourceInstance" ADD COLUMN     "instance_name" TEXT NOT NULL DEFAULT 'Unknown',
ALTER COLUMN "status" SET DEFAULT 'GOOD';

-- CreateTable
CREATE TABLE "ResourceDetail" (
    "id" SERIAL NOT NULL,
    "pub_year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResourceDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resource_slug_name_key" ON "Resource"("slug_name");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_detail_id_key" ON "Resource"("detail_id");

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_detail_id_fkey" FOREIGN KEY ("detail_id") REFERENCES "ResourceDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;
