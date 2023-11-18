/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prestamos" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'Pendiente';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;
