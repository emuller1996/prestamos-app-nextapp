import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const client = await prisma.clientes.findMany({ orderBy: { id: "asc" } });
    console.log(client);
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
    console.log(client);
    return NextResponse.json({ clientes: "CREADDO CLENTES" });
  } catch (error) {
    console.log(error);
    return NextResponse.error("Error al obtener modelos", 404);
  }
}
