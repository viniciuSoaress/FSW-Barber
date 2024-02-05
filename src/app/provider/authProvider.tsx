'use client'

import { SessionProvider } from "next-auth/react"


export function AuthoProvider({children}: {children: React.ReactNode}){
 
  return(
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}