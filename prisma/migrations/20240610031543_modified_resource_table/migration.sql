/*
  Warnings:

  - Made the column `detail_id` on table `Resource` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_detail_id_fkey";

-- AlterTable
ALTER TABLE "Resource" ALTER COLUMN "detail_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_detail_id_fkey" FOREIGN KEY ("detail_id") REFERENCES "ResourceDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
