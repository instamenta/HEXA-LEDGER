/*
  Warnings:

  - You are about to drop the column `jwt` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authID]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "jwt";

-- CreateIndex
CREATE UNIQUE INDEX "User_authID_key" ON "User"("authID");
