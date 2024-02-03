import { Service } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"


type Props = {
  service: Service
}

export function ServiceIcom({ service }: Props) {

  return (
    <Card>
      <CardContent className="flex items-center p-3 gap-4">
        <Image width={110} height={110} alt={service.name} src={service.imageUrl} className="object-cover rounded-lg" />

        <div className="flex flex-col gap-2 w-full">

          <h2 className="font-bold">{service.name}</h2>

          <p className="text-sm text-gray-400">{service.description}</p>

          <div className="flex items-center justify-between mt-2">
            <p className="text-primary text-sm font-bold">{Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(service.price)}</p>
            <Button variant='secondary'>Reservar</Button>
          </div>

        </div>
      </CardContent>
    </Card>
  )
}