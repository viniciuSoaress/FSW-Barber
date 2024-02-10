'use client'

import { Barbershop, Service } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Calendar } from "./ui/calendar"
import { useMemo, useState } from "react"
import { ptBR } from "date-fns/locale/pt-BR"
import { generateDayFimList } from "../utils/hours"
import { format } from "date-fns"


type Props = {
  service: Service,
  isAuthDessabled: boolean,
  barberShop: Barbershop
}

export function ServiceIcom({ service, isAuthDessabled, barberShop }: Props) {

  const [date, setDate] = useState<Date | undefined>(new Date())
  const [hour, setHour] = useState<string | undefined>()

  function handleHourClick(time: string) {
    setHour(time)
  }

  function handleDateClick(date: Date | undefined) {
    setDate(date)
    setHour(undefined)
  }

  function handleBookClick() {
    if (!isAuthDessabled) {
      return signIn('google')
    }
  }

  const timeList = useMemo(() => {
    return date ? generateDayFimList(date) : []
  }, [])

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

            <Sheet>
              <SheetTrigger asChild>
                <Button variant='secondary' onClick={handleBookClick}>Reservar</Button>
              </SheetTrigger>

              <SheetContent className="p-0">
                <SheetHeader className="p-5 border-b">
                  <SheetTitle>Fazer Reservar</SheetTitle>
                </SheetHeader>

                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateClick}
                  className="my-6"
                  fromDate={new Date()}
                  locale={ptBR}
                  styles={{
                    head_cell: { width: '100%', textTransform: 'capitalize' },
                    cell: { width: '50px' },
                    button: { width: '100%' },
                    nav_button_previous: { width: '32px', height: '32px' },
                    nav_button_next: { width: '32px', height: '32px' },
                    caption: {
                      textTransform: 'capitalize'
                    }
                  }}
                />

                {date && (
                  <div className="p-5 border-y flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden">
                    {timeList.map((time) => (
                      <Button onClick={() => handleHourClick(time)} variant={
                        hour === time ? 'default' : 'outline'
                      } className="rounded-full" key={time}>{time}</Button>
                    ))}
                  </div>
                )}

                <div className="p-5">
                  <Card>
                    <CardContent className="p-3 flex gap-3 flex-col">
                      <div className="flex justify-between items-center">
                        <h2 className="font-bold">{service.name}</h2>
                        <h3 className="text-sm">{Intl.NumberFormat('pt-br', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(service.price)}</h3>
                      </div>

                      {date && (
                        <div className="flex justify-between items-center">
                          <h3 className="text-gray-400 text-sm">Data</h3>
                          <h3 className="text-gray-400 text-sm">{format(date, "dd, 'de' MMMM", {
                            locale: ptBR
                          })}</h3>
                        </div>
                      )}
                      {hour && (
                        <div className="flex justify-between items-center">
                          <h3 className="text-gray-400 text-sm">Horario</h3>
                          <h3 className="text-gray-400 text-sm">{hour}</h3>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        <h3 className="text-gray-400 text-sm">Barbearia</h3>
                        <h3 className="text-gray-400 text-sm">{barberShop.name}</h3>
                      </div>
                    </CardContent>
                  </Card>

                </div>
                <SheetFooter className="p-5 absolute bottom-2 w-full">
                  <Button disabled={!hour || !date} className="w-full">Confirma Reserva</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </CardContent>
    </Card>
  )
}