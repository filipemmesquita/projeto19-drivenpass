-- AlterTable
ALTER TABLE "Cards" ALTER COLUMN "cvc" SET DATA TYPE TEXT,
ALTER COLUMN "expiryDate" SET DATA TYPE TEXT,
ALTER COLUMN "password" SET DATA TYPE TEXT,
ALTER COLUMN "isVirtual" SET DEFAULT false;
