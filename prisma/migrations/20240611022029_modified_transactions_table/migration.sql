/*
  Warnings:

  - Added the required column `instanceId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "instanceId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "ResourceInstance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
