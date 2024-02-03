import Link from "next/link";

import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";

type BarberShopItemProps = {
  barberShop: Barbershop
}

export function BarberShopItem({ barberShop }: BarberShopItemProps) {
  return (
    <Card className="max-w-[167px] min-w-[167px] rounded-2xl">
      <CardContent className="p-1 flex flex-col gap-2">
        <div className="relative w-full h-40">
          <Badge variant='secondary' className="absolute top-2 opacity-90 left-2 z-50">
            <StarIcon size={12} className="fill-primary"/>
            <span >5,0</span>
          </Badge>
          <Image
            src={barberShop.imageUrl}
            alt={barberShop.name}
            fill
            className="h-[159px] rounded-xl object-cover"
          />
        </div>

        <div className="p-3 pt-0">
          <h2 className="font-bold  overflow-hidden text-ellipsis text-nowrap">{barberShop.name}</h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barberShop.address}</p>
          <Button variant='secondary' className="w-full mt-1">
            <Link href={`barberShops/${barberShop.id}`}>
            Reservar
            </Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  )
}