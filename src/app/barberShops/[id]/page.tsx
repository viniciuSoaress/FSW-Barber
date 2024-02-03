import { Button } from '@/app/components/ui/button'
import db from '@/app/lib/prisma'
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: {
    id?: string
  }
}

export default async function BarberShopDetailsPage({ params }: Props) {

  const barberShop = await db.barbershop.findUnique({
    where: {
      id: params.id
    }
  })

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button size='icon' variant='outline' className='absolute z-50 top-4 left-4'>
          <Link href='/'>
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button size='icon' variant='outline' className='absolute z-50 top-4 right-4'>
          <MenuIcon />
        </Button>
        <Image
          src={barberShop.imageUrl}
          alt={barberShop.name}
          fill
          className='object-cover h-[100px] opacity-75'
        />
      </div>

      <div className='p-4 flex flex-col gap-2 border-b'>
        <h1 className='text-xl font-bold'>{barberShop.name}</h1>

        <div className="flex items-center gap-2">
          <MapPinIcon size={18} className='text-primary' />
          <p className='text-sm '>{barberShop.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon size={18} className='text-primary' />
          <p className='text-sm '>5.0 (645 avaliações)</p>
        </div>

      </div>
    </div>
  )
}