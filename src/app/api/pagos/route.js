import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const pagos = await prisma.pagos.findMany({
      include: {
        prestamo: { include: { cliente: true } },
      },
      orderBy: { fecha_pago: "desc" },
    });
    prisma.$disconnect()
    return NextResponse.json(pagos);
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}
