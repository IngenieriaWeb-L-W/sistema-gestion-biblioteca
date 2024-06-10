/*
  Warnings:

  - Made the column `image_url` on table `Publisher` required. This step will fail if there are existing NULL values in that column.
  - Made the column `url` on table `Publisher` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Publisher" ALTER COLUMN "image_url" SET NOT NULL,
ALTER COLUMN "url" SET NOT NULL;
