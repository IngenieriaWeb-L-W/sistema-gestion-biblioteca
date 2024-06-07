/*
  Warnings:

  - You are about to drop the column `authors` on the `Resource` table. All the data in the column will be lost.
  - Added the required column `author` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "authors",
ADD COLUMN     "author" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ResourceType" ALTER COLUMN "resource_type_name" DROP DEFAULT;
