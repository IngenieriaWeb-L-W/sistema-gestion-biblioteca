-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_instanceId_fkey";

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "instanceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "ResourceInstance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
