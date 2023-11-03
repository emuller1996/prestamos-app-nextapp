/*
  Warnings:

  - You are about to drop the column `nombre` on the `Prestamos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Prestamos" DROP COLUMN "nombre",
ALTER COLUMN "deuda_actual" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valor_prestamo" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valor_pagado" SET DATA TYPE DOUBLE PRECISION;
