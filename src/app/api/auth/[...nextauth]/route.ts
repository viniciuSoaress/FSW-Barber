import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import db from '@/app/lib/prisma'
import { Adapter } from "next-auth/adapters"

const handler = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLEINT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ]
})

export { handler as GET, handler as POST }