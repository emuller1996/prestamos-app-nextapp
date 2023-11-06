import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const pagos = await prisma.pagos.findMany({
      where: { prestamoId: parseInt(params.id) },
      include: { prestamo: true },
    });

    return NextResponse.json({ pagos: pagos });
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}
export async function POST(request, { params }) {
  const { valor_pagado, fecha_pago, prestamoId } = await request.json();

  console.log(prestamoId);

  try {
    //Resgistros Pago
    const pago = await prisma.pagos.create({
      data: { valor_pagado, fecha_pago, prestamoId },
    });
    console.log(pago);

    //Busco y Actualizo  Prestamo
    const prestamo = await prisma.prestamos.findUnique({
      where: { id: prestamoId },
    });
    console.log(prestamo);
    prestamo.deuda_actual = prestamo.deuda_actual - valor_pagado;
    await prisma.prestamos.update({
      where: { id: prestamoId },
      data: prestamo,
    });

    //Busco y Actualizo  Cliente
    const cliente = await prisma.clientes.findUnique({
      where: { id: prestamo.clientesId },
    });
    console.log(cliente);
    cliente.deuda_actual = cliente.deuda_actual - valor_pagado;
    await prisma.clientes.update({
      where: { id: prestamo.clientesId },
      data: cliente,
    });
    //Responde todo Exitoso
    return NextResponse.json({ pago: pago, message: "Pago Realizado" });
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}
