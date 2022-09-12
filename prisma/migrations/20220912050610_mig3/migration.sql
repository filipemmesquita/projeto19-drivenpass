/*
  Warnings:

  - Added the required column `userName` to the `WebCredentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WebCredentials" ADD COLUMN     "userName" TEXT NOT NULL;
