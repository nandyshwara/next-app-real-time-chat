import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse , NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();

    const newMessage = await prisma.chatMessage.create({
        data: {
          chatRoomId: data.chatRoomId,
          sender: data.sender,
          message: data.message,
        },
      });
      ;
    
    return new NextResponse(JSON.stringify(newMessage) , {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
}
