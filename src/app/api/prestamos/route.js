import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET() {
  try {
    const prestamos = await prisma.prestamos.findMany({
      include: {
        cliente: true,
      },
    });
    console.log(prestamos);
    return NextResponse.json({ prestamos: prestamos });
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}
