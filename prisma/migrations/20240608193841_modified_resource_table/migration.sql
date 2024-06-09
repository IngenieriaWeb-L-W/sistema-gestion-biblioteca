/*
  Warnings:

  - Changed the type of `description` on the `ResourceDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Resource" ALTER COLUMN "resource_name" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ResourceDetail" DROP COLUMN "description",
ADD COLUMN     "description" JSONB NOT NULL;
