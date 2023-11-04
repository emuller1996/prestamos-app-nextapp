import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    console.log(request);
    console.log(params);
    const client = await prisma.clientes.findUnique({
      where: { id: parseInt(params.idClient) },
    });
    console.log(client);
    return NextResponse.json({ clientes: client });
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();

    console.log(request);
    const client = await prisma.clientes.update({
      where: { id: parseInt(params.idClient) },
      data,
    });
    console.log(client);
    return NextResponse.json({
      cliente: client,
      message: "Cliente Actualizado",
    });
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}
