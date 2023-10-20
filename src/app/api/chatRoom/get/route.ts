import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse , NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
    const email_id = req.nextUrl.searchParams.get("email")
  try {
    const chatRooms = await prisma.chatRoom.findMany({
        where: {
          members: {
              has: email_id,
          },
        },
      });
    return new NextResponse(JSON.stringify(chatRooms) , {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
}