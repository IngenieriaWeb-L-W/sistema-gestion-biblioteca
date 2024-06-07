/*
  Warnings:

  - The values [TYPE_BOOK,TYPE_MAGAZINE,TYPE_DVD,TYPE_COMICS,TYPE_ENCYCLOPEDIA,TYPE_DICTIONARY,TYPE_ARTICLE,TYPE_REPORT,TYPE_RESEARCH_PAPER,TYPE_EDUCATIONAL] on the enum `ResourcesTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ResourcesTypes_new" AS ENUM ('BOOK', 'MAGAZINE', 'DVD', 'COMICS', 'ENCYCLOPEDIA', 'DICTIONARY', 'ARTICLE', 'REPORT', 'RESEARCH_PAPER', 'EDUCATIONAL');
ALTER TABLE "ResourceType" ALTER COLUMN "resource_type_name" TYPE "ResourcesTypes_new" USING ("resource_type_name"::text::"ResourcesTypes_new");
ALTER TYPE "ResourcesTypes" RENAME TO "ResourcesTypes_old";
ALTER TYPE "ResourcesTypes_new" RENAME TO "ResourcesTypes";
DROP TYPE "ResourcesTypes_old";
COMMIT;
