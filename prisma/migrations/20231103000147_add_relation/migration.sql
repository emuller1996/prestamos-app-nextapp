/*
  Warnings:

  - Added the required column `clientesId` to the `Prestamos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prestamos" ADD COLUMN     "clientesId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Prestamos" ADD CONSTRAINT "Prestamos_clientesId_fkey" FOREIGN KEY ("clientesId") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
