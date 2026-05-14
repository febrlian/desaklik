-- CreateEnum
CREATE TYPE "LetterStatus" AS ENUM ('Diajukan', 'Diproses', 'Menunggu_TTD', 'Selesai', 'Ditolak');

-- CreateTable
CREATE TABLE "Letter" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "citizenId" TEXT NOT NULL,
    "citizenName" TEXT NOT NULL,
    "status" "LetterStatus" NOT NULL DEFAULT 'Diajukan',
    "purpose" TEXT NOT NULL,
    "notes" TEXT,
    "pdfUrl" TEXT,
    "qrCodeUrl" TEXT,
    "verificationToken" TEXT,
    "tenantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Letter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LetterTimeline" (
    "id" TEXT NOT NULL,
    "letterId" TEXT NOT NULL,
    "status" "LetterStatus" NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actor" TEXT NOT NULL,
    "note" TEXT,

    CONSTRAINT "LetterTimeline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "author" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "tenantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Letter_verificationToken_key" ON "Letter"("verificationToken");

-- CreateIndex
CREATE INDEX "Letter_tenantId_idx" ON "Letter"("tenantId");

-- CreateIndex
CREATE INDEX "Letter_verificationToken_idx" ON "Letter"("verificationToken");

-- CreateIndex
CREATE INDEX "LetterTimeline_letterId_idx" ON "LetterTimeline"("letterId");

-- CreateIndex
CREATE UNIQUE INDEX "News_slug_key" ON "News"("slug");

-- CreateIndex
CREATE INDEX "News_tenantId_idx" ON "News"("tenantId");

-- CreateIndex
CREATE INDEX "News_slug_idx" ON "News"("slug");

-- AddForeignKey
ALTER TABLE "Letter" ADD CONSTRAINT "Letter_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LetterTimeline" ADD CONSTRAINT "LetterTimeline_letterId_fkey" FOREIGN KEY ("letterId") REFERENCES "Letter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
