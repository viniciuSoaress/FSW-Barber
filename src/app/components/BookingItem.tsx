import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";


export function BookingItem() {

  return (
    <Card>
      <CardContent className="px-5 py-0 flex justify-between">

        <div className="flex flex-col gap-2 py-5">
          <Badge className="bg-[#221c30] text-primary hover:bg-[#221c30] w-fit">
            Confitmado
          </Badge>

          <h2 className="font-bold">Corter de Cabelo</h2>

          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
              <AvatarFallback>image</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">Vini Barber</h3>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center border-l px-5">
          <p className="text-sm">Fevereiro</p>
          <p className="text-2xl">06</p>
          <p className="text-sm">05:15</p>
        </div>


      </CardContent>
    </Card>
  )
}