-- CreateTable
CREATE TABLE "Clientes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "numero_telefonico" INTEGER,
    "estado" TEXT,
    "deuda_actual" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prestamos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "deuda_actual" BIGINT,
    "valor_prestamo" BIGINT,
    "valor_pagado" BIGINT,
    "fecha_ultimo_pago" TIMESTAMP(3) NOT NULL,
    "fecha_pago" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Prestamos_pkey" PRIMARY KEY ("id")
);
