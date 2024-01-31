/*
  Warnings:

  - You are about to drop the column `serviserId` on the `Barbershop` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Barbershop" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL
);
INSERT INTO "new_Barbershop" ("address", "id", "imageUrl", "name") SELECT "address", "id", "imageUrl", "name" FROM "Barbershop";
DROP TABLE "Barbershop";
ALTER TABLE "new_Barbershop" RENAME TO "Barbershop";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
