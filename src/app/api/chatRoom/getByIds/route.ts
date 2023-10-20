import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse , NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const first_email_id = req.nextUrl.searchParams.get("first_email")
    const second_email_id = req.nextUrl.searchParams.get("second_email")

    const chatRooms = await prisma.chatRoom.findMany({
        where: {
          AND: [
            { members: { has: first_email_id } },
            { members: { has: second_email_id } },
          ],
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