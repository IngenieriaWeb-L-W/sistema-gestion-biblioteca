-- CreateEnum
CREATE TYPE "ResourcesTypes" AS ENUM ('TYPE_BOOK', 'TYPE_MAGAZINE', 'TYPE_DVD', 'TYPE_COMICS', 'TYPE_ENCYCLOPEDIA', 'TYPE_DICTIONARY', 'TYPE_ARTICLE', 'TYPE_REPORT', 'TYPE_RESEARCH_PAPER', 'TYPE_EDUCATIONAL');

-- CreateEnum
CREATE TYPE "ResourceInstanceStatus" AS ENUM ('STATUS_GOOD', 'STATUS_POOR', 'STATUS_DAMAGED', 'STATUS_LOST', 'STATUS_ARCHIVED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" TEXT NOT NULL,
    "isbn" TEXT,
    "authors" TEXT[],
    "pub_year" INTEGER NOT NULL,
    "edition" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResourceInstance" (
    "id" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "status" "ResourceInstanceStatus" NOT NULL DEFAULT 'STATUS_GOOD',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResourceInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResourceType" (
    "id" SERIAL NOT NULL,
    "name" "ResourcesTypes" NOT NULL DEFAULT 'TYPE_BOOK',
    "max_loan_days" INTEGER NOT NULL DEFAULT 7,
    "max_units_per_loan" INTEGER NOT NULL DEFAULT 3,

    CONSTRAINT "ResourceType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resource_isbn_key" ON "Resource"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "ResourceType_name_key" ON "ResourceType"("name");

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ResourceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceInstance" ADD CONSTRAINT "ResourceInstance_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
