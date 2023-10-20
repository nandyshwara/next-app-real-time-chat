import { NextAuthOptions, getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export const authConfig: NextAuthOptions = {
    adapter: PrismaAdapter(prisma as any),
    session: {
      strategy: "jwt",
    },
    
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })

    ],
}
