-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "person" (
    "id" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "personId" TEXT NOT NULL,
    "authUserId" TEXT NOT NULL,
    "voice" TEXT NOT NULL,
    "householdShape" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "account_pkey" PRIMARY KEY ("personId")
);

-- CreateTable
CREATE TABLE "child" (
    "personId" TEXT NOT NULL,
    "stageIndex" INTEGER,
    "sealedIv" TEXT,
    "sealedCiphertext" TEXT,
    "sealedKeyId" TEXT,

    CONSTRAINT "child_pkey" PRIMARY KEY ("personId")
);

-- CreateTable
CREATE TABLE "relationship_edge" (
    "id" TEXT NOT NULL,
    "adultId" TEXT NOT NULL,
    "childId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "until" TIMESTAMP(3),
    "grantedBy" TEXT NOT NULL,

    CONSTRAINT "relationship_edge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pregnancy" (
    "id" TEXT NOT NULL,
    "accountPersonId" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),

    CONSTRAINT "pregnancy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wrapped_key" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "wrappedBy" TEXT NOT NULL,
    "wrapperId" TEXT,
    "iv" TEXT NOT NULL,
    "ciphertext" TEXT NOT NULL,
    "salt" TEXT,
    "kdfParams" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wrapped_key_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "substrate_unit" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "document" JSONB NOT NULL,
    "shippedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "substrate_unit_pkey" PRIMARY KEY ("id","version")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_authUserId_key" ON "account"("authUserId");

-- CreateIndex
CREATE INDEX "relationship_edge_childId_until_idx" ON "relationship_edge"("childId", "until");

-- CreateIndex
CREATE INDEX "relationship_edge_adultId_until_idx" ON "relationship_edge"("adultId", "until");

-- CreateIndex
CREATE INDEX "wrapped_key_personId_idx" ON "wrapped_key"("personId");

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_personId_fkey" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "child" ADD CONSTRAINT "child_personId_fkey" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationship_edge" ADD CONSTRAINT "relationship_edge_adultId_fkey" FOREIGN KEY ("adultId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationship_edge" ADD CONSTRAINT "relationship_edge_childId_fkey" FOREIGN KEY ("childId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationship_edge" ADD CONSTRAINT "relationship_edge_grantedBy_fkey" FOREIGN KEY ("grantedBy") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pregnancy" ADD CONSTRAINT "pregnancy_accountPersonId_fkey" FOREIGN KEY ("accountPersonId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wrapped_key" ADD CONSTRAINT "wrapped_key_personId_fkey" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

