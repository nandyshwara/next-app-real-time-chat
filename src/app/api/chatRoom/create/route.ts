import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse , NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();
    // const sender_id = req.body.senderId, 
    // const receiver_id = req.body.receiverId, 

    const new_chatRoom = prisma.chatRoom.create({
        data : {
            members : [data.sender_id,data.receiver_id]
        }
    });
    

    return new NextResponse(JSON.stringify(new_chatRoom) , {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
}
