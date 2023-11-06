import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const prestamo = await prisma.prestamos.findUnique({
      where: { id: parseInt(params.id) },
      include: { Pagos: true, cliente: true },
    });
    if (prestamo ===null) {
      return NextResponse.json({ message: `no existe ningun prestamos con el id ${params.id}` });
    } else {
      return NextResponse.json({ prestamo: prestamo });
    }
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}
