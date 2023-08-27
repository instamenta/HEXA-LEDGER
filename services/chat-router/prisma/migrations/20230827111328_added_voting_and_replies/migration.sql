-- AlterTable
ALTER TABLE "GroupMessage" ADD COLUMN     "downvotes" TEXT[],
ADD COLUMN     "upvotes" TEXT[];

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "downvotes" TEXT[],
ADD COLUMN     "upvotes" TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "picture" TEXT NOT NULL DEFAULT 'https://openseauserdata.com/files/3d825b936774e0ae3c8247613c91d436.png';

-- CreateTable
CREATE TABLE "MessageReply" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "upvotes" TEXT[],
    "downvotes" TEXT[],

    CONSTRAINT "MessageReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupMessageReply" (
    "id" TEXT NOT NULL,
    "groupMessageId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "upvotes" TEXT[],
    "downvotes" TEXT[],

    CONSTRAINT "GroupMessageReply_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MessageReply_id_createdAt_idx" ON "MessageReply"("id", "createdAt");

-- CreateIndex
CREATE INDEX "GroupMessageReply_id_createdAt_idx" ON "GroupMessageReply"("id", "createdAt");

-- AddForeignKey
ALTER TABLE "MessageReply" ADD CONSTRAINT "MessageReply_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageReply" ADD CONSTRAINT "MessageReply_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMessageReply" ADD CONSTRAINT "GroupMessageReply_groupMessageId_fkey" FOREIGN KEY ("groupMessageId") REFERENCES "GroupMessage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMessageReply" ADD CONSTRAINT "GroupMessageReply_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
