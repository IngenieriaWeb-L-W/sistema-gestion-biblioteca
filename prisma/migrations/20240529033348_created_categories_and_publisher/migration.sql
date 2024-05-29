/*
  Warnings:

  - Added the required column `categoryId` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisherId` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ResourceLang" AS ENUM ('LANG_EN', 'LANG_ES', 'LANG_FR', 'LANG_DE', 'LANG_OTHER');

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "publisherId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ResourceInstance" ADD COLUMN     "lang" "ResourceLang" NOT NULL DEFAULT 'LANG_EN';

-- CreateTable
CREATE TABLE "Publisher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image_url" TEXT,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResourceCategory" (
    "resourceId" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "ResourceCategory_pkey" PRIMARY KEY ("resourceId","categoryId")
);

-- CreateTable
CREATE TABLE "_ResourceCategory" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Publisher_name_key" ON "Publisher"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ResourceCategory_AB_unique" ON "_ResourceCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_ResourceCategory_B_index" ON "_ResourceCategory"("B");

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceCategory" ADD CONSTRAINT "ResourceCategory_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceCategory" ADD CONSTRAINT "ResourceCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceCategory" ADD CONSTRAINT "_ResourceCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceCategory" ADD CONSTRAINT "_ResourceCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
