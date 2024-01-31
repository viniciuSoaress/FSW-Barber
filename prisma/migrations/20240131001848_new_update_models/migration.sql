/*
  Warnings:

  - You are about to drop the column `imageURL` on the `Barbershop` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Barbershop` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "barbershopId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    CONSTRAINT "Service_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "Barbershop" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Service" ("barbershopId", "description", "id", "name", "price") SELECT "barbershopId", "description", "id", "name", "price" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
CREATE TABLE "new_Barbershop" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "serviserId" TEXT NOT NULL
);
INSERT INTO "new_Barbershop" ("address", "id", "name", "serviserId") SELECT "address", "id", "name", "serviserId" FROM "Barbershop";
DROP TABLE "Barbershop";
ALTER TABLE "new_Barbershop" RENAME TO "Barbershop";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
