import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";



export function Header() {
  return (
    <Card>
      <CardContent className="p-5 flex justify-between items-center">
        <Image
          alt="logo"
          src='/logo.jpg'
          width={120}
          height={22}
        />
        <Button variant='outline' size='icon'>
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}