import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pagos = await prisma.pagos.findMany({
      include: {
        prestamo: { include: { cliente: true } },
      },
      orderBy: { fecha_pago: "desc" },
    });
    return NextResponse.json(pagos);
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}
