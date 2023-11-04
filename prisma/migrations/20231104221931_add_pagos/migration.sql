/*
  Warnings:

  - Made the column `valor_prestamo` on table `Prestamos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fecha_pago` on table `Prestamos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Prestamos" ADD COLUMN     "deuda_capital" DOUBLE PRECISION,
ADD COLUMN     "deuda_interes" DOUBLE PRECISION,
ALTER COLUMN "valor_prestamo" SET NOT NULL,
ALTER COLUMN "fecha_pago" SET NOT NULL;

-- CreateTable
CREATE TABLE "Pagos" (
    "id" SERIAL NOT NULL,
    "valor_pagado" DOUBLE PRECISION,
    "abono_capital" DOUBLE PRECISION,
    "abono_interes" DOUBLE PRECISION,
    "fecha_pago" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prestamoId" INTEGER NOT NULL,

    CONSTRAINT "Pagos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pagos" ADD CONSTRAINT "Pagos_prestamoId_fkey" FOREIGN KEY ("prestamoId") REFERENCES "Prestamos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
