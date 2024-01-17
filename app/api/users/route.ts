import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";


export async function GET(Request: NextRequest) {
    const users = await prisma.user.findMany({ orderBy: { name: 'asc' } })
    return NextResponse.json(users)
}