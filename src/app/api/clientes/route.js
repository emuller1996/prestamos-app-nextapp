import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const client = await prisma.clientes.findMany({ orderBy: { id: "asc" } });
    return NextResponse.json({ clientes: client });
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}
export async function POST(request) {
  try {
    const { nombre, numero_telefonico } = await request.json();
    const client = await prisma.clientes.create({
      data: { nombre, numero_telefonico, estado: "Activo" },
    });
    return NextResponse.json({ clientes: "CREADDO CLENTES" });
  } catch (error) {
    console.log(error);
    return NextResponse.error("Error al obtener modelos", 404);
  }
}
