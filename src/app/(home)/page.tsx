import { format, } from 'date-fns'

import { Header } from "../components/Header";
import { ptBR } from 'date-fns/locale';
import { SearchHome } from '../components/SearchHome';

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col p-1 gap-2"
    >
      <Header />
      
      <div className='p-5'>
        <h2 className='text-xl font-bold'>Òla, Vinicius!</h2>
        <p className='capitalize text-sm'>{format(new Date(), "EE, dd 'de'  MMMM", { locale: ptBR })}</p>
      </div>

      <div className='px-5'>
        <SearchHome />
      </div>

    </main>
  );
}
