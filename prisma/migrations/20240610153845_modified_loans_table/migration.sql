/*
  Warnings:

  - Made the column `instanceId` on table `ResourceLoan` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ResourceLoan" DROP CONSTRAINT "ResourceLoan_instanceId_fkey";

-- AlterTable
ALTER TABLE "ResourceLoan" ALTER COLUMN "instanceId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ResourceLoan" ADD CONSTRAINT "ResourceLoan_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "ResourceInstance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
