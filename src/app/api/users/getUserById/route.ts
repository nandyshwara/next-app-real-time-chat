import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
    const email_id = req.nextUrl.searchParams.get("email");
  
    if (email_id !== null) {
      try {
        const users = await prisma.user.findUnique({
          where: {
            email: email_id,
          }
        });
  
        if (users) {
          return new NextResponse(JSON.stringify(users), {
            headers: {
              "Content-Type": "application/json",
            }
          });
        } else {
          return new NextResponse("User not found", {
            status: 404,
            headers: {
              "Content-Type": "text/plain",
            }
          });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      return new NextResponse("Email ID not provided", {
        status: 400,
        headers: {
          "Content-Type": "text/plain",
        }
      });
    }
  }
  

