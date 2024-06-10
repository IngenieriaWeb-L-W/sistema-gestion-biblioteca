/*
  Warnings:

  - You are about to drop the column `loan_id` on the `ResourceInstance` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[instanceId]` on the table `ResourceLoan` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ResourceInstance" DROP CONSTRAINT "ResourceInstance_loan_id_fkey";

-- DropIndex
DROP INDEX "ResourceInstance_loan_id_key";

-- AlterTable
ALTER TABLE "ResourceInstance" DROP COLUMN "loan_id";

-- AlterTable
ALTER TABLE "ResourceLoan" ADD COLUMN     "instanceId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ResourceLoan_instanceId_key" ON "ResourceLoan"("instanceId");

-- AddForeignKey
ALTER TABLE "ResourceLoan" ADD CONSTRAINT "ResourceLoan_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "ResourceInstance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
