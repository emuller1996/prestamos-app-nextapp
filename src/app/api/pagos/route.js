import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const pagos = await prisma.pagos.findMany({
      include: {
        prestamo: { include: true },
      },
      orderBy: { fecha_pago: "desc" },
    });
    return NextResponse.json(pagos);
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}
