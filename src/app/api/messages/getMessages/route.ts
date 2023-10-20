import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse , NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const chat_room_id = req.nextUrl.searchParams.get("chatRoomId")
    const messages = await prisma.chatMessage.findUnique({
        where: {
          chatRoomId: chat_room_id,
        }});
    return new NextResponse(JSON.stringify(messages) , {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
}
