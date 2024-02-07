'use client'

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { SideMenu } from "./siderMenu";


export function Header() {

  const { data } = useSession()


  function handleLogoutClick() {
    signOut()
  }

  function handleLoginClick() {
    signIn('google')
  }


  return (
    <Card>
      <CardContent className="p-5 flex justify-between items-center">
        <Image
          alt="logo"
          src='/logo.jpg'
          width={120}
          height={22}
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon'>
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SideMenu />

        </Sheet>
      </CardContent>
    </Card>
  )
}