/*
  Warnings:

  - You are about to drop the column `deuda_actual` on the `Clientes` table. All the data in the column will be lost.
  - Made the column `numero_telefonico` on table `Clientes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Clientes" DROP COLUMN "deuda_actual",
ALTER COLUMN "numero_telefonico" SET NOT NULL;
