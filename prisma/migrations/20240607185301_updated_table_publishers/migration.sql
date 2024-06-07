/*
  Warnings:

  - The primary key for the `Publisher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Publisher` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `publisher_id` on the `Resource` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_publisher_id_fkey";

-- AlterTable
ALTER TABLE "Publisher" DROP CONSTRAINT "Publisher_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "publisher_id",
ADD COLUMN     "publisher_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "Publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
