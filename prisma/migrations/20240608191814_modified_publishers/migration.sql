/*
  Warnings:

  - The primary key for the `Publisher` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_publisher_id_fkey";

-- AlterTable
ALTER TABLE "Publisher" DROP CONSTRAINT "Publisher_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Publisher_id_seq";

-- AlterTable
ALTER TABLE "Resource" ALTER COLUMN "publisher_id" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "Publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
