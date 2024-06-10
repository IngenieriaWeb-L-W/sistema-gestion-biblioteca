/*
  Warnings:

  - The primary key for the `ResourceTestimonial` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ResourceTestimonial` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ResourceTestimonial" DROP CONSTRAINT "ResourceTestimonial_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ResourceTestimonial_pkey" PRIMARY KEY ("userId", "resourceId");
