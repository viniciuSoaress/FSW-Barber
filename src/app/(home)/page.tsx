import { format, } from 'date-fns'

import { Header } from "../components/Header";
import { ptBR } from 'date-fns/locale';
import { SearchHome } from '../components/SearchHome';
import { BookingItem } from '../components/BookingItem';

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col p-1 gap-2"
    >
      <Header />
      
      <section className='p-5'>
        <h2 className='text-xl font-bold'>Òla, Vinicius!</h2>
        <p className='capitalize text-sm'>{format(new Date(), "EE, dd 'de'  MMMM", { locale: ptBR })}</p>
      </section>

      <section className='px-5'>
        <SearchHome />
      </section>

      <section className='px-5 mt-6 text-gray-400'>
        <h2 className='text-xs uppercase mb-3 font-bold'>Agendamento</h2>
        <BookingItem />
      </section>

    </main>
  );
}
