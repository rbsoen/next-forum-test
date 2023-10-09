-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "displayName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "registeredAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contents" TEXT NOT NULL,
    "posted" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" DATETIME NOT NULL,
    "inThreadId" INTEGER NOT NULL,
    "byUserId" TEXT NOT NULL,
    CONSTRAINT "Post_inThreadId_fkey" FOREIGN KEY ("inThreadId") REFERENCES "Thread" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_byUserId_fkey" FOREIGN KEY ("byUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Thread" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "threadStarterId" TEXT NOT NULL,
    CONSTRAINT "Thread_threadStarterId_fkey" FOREIGN KEY ("threadStarterId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "subcategoryOfId" INTEGER,
    CONSTRAINT "Category_subcategoryOfId_fkey" FOREIGN KEY ("subcategoryOfId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
