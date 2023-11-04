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
    return NextResponse.json([prestamos]);
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}

export async function POST(request) {
  try {
    const { valor_prestamo, fecha_pago, clientesId } = await request.json();
    const  pago_interes = valor_prestamo *0.10 //pago de interes
    const prestamo = await prisma.prestamos.create({
      data: { valor_prestamo, fecha_pago, clientesId,deuda_actual:valor_prestamo,deuda_interes:0,pago_interes},
    });
    return NextResponse.json({ prestamo: prestamo,message:"Prestamos Creado Correctamentoe" });
  } catch (error) {
    console.log(error);
    return NextResponse.error("Error al obtener modelos", 404);
  }
}
