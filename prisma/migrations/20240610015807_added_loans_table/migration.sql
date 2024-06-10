/*
  Warnings:

  - You are about to drop the `Loan` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[loan_id]` on the table `ResourceInstance` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_userId_fkey";

-- AlterTable
ALTER TABLE "ResourceInstance" ADD COLUMN     "loan_id" TEXT;

-- DropTable
DROP TABLE "Loan";

-- CreateTable
CREATE TABLE "ResourceLoan" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResourceLoan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ResourceInstance_loan_id_key" ON "ResourceInstance"("loan_id");

-- AddForeignKey
ALTER TABLE "ResourceInstance" ADD CONSTRAINT "ResourceInstance_loan_id_fkey" FOREIGN KEY ("loan_id") REFERENCES "ResourceLoan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceLoan" ADD CONSTRAINT "ResourceLoan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
