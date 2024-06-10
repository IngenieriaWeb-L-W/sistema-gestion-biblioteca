/*
  Warnings:

  - Added the required column `until` to the `ResourceLoan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ResourceLoan" ADD COLUMN     "until" TIMESTAMP(3) NOT NULL;
