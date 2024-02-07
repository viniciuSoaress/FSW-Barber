'use client'

import { Avatar, AvatarImage } from "./ui/avatar";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";


export function SideMenu() {

  const { data } = useSession()


  function handleLogoutClick() {
    signOut()
  }

  function handleLoginClick() {
    signIn('google')
  }


  return (
    <SheetContent className="p-0">
      <SheetHeader className="border-b p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      {data?.user ? (
        <div className="flex justify-between p-5">
          <div className="flex items-center gap-3 ">
            <Avatar>
              <AvatarImage alt='avatar' src={data?.user?.image ?? ''} />
            </Avatar>
            <h2 className="font-bold">{data?.user.name}</h2>
          </div>

          <Button variant='secondary' size='icon' onClick={handleLogoutClick}>
            <LogOutIcon />
          </Button>
        </div>
      ) : (
        <div className="flex p-5 flex-col gap-3">
          <div className="flex items-center gap-3">
            <UserIcon size={32} />
            <h2 className="font-bold">Olà, faça seu login!</h2>
          </div>

          <Button variant='secondary' className="w-full" onClick={handleLoginClick}>
            <LogInIcon className="mr-2" size={18} />
            Fazer Login
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-3 p-5">
        <Button asChild variant='outline' className="justify-start">
          <Link href='/'>
            <HomeIcon size={18} className="mr-2" />
            Inicio
          </Link>
        </Button>

        {data?.user && (
          <Button variant='outline' className=" justify-start" asChild>
            <Link href='/ss'>
              <CalendarIcon className="mr-2" size={18} />
              Agendamentos
            </Link>
          </Button>
        )}
      </div>
    </SheetContent>
  )
}