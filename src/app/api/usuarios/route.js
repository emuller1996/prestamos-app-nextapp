import { NextResponse } from "next/server";
/* import prisma from "../../../libs/prisma" */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.error("Error al obtener modelos", 500);
  }
}
