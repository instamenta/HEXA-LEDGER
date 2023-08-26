/*
  Warnings:

  - You are about to drop the column `reactions` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `reactionsId` on the `Message` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `GroupMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GroupMessage" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "reactions",
DROP COLUMN "reactionsId";
