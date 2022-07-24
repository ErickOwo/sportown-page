import LinkComponent from '@components/Link-Header';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@images/logo.png';
import { useAuth } from '@hooks/use-auth';

import { useState } from 'react';

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const { user, logOut } = useAuth();

  return (
    <header className='fixed w-full z-30 text-white lg:flex hidden p-3 bg-black/50 select-none'>
      <Link href='/'>
        <button className='pl-3'>
          <Image src={ logo } width='100%' height='100%' />
        </button>
      </Link>
      <ul className='flex gap-4 mx-auto items-center'>
        <LinkComponent
          link='/'
          name='Inicio' />
          <LinkComponent
          link='/'
          name='Servicios' />
          <LinkComponent
          link='/'
          name='Entrenadores' />
          <LinkComponent
          link='/'
          name='Ofertas' />
          <LinkComponent
          link='/'
          name='Contenido VIP' />
      </ul>
      <div className='relative mr-8 self-center'>
      { !user ? <>
          <button 
            className='p-2 border border-white rounded-md' 
            onClick={()=> setDropDown(!dropDown)} >
            Cuenta        
          </button>
          {
            dropDown ? <ul className='absolute bg-white text-black mt-1 right-0 p-2 w-[150px] cursor-auto flex flex-col'>
              <Link href='/signup'>
                <button 
                  className='p-2 hover:bg-slate-400/30 text-left'
                  onClick={() => setDropDown(false)} >
                    Crear Cuenta
                </button>
              </Link>
              <Link href='/login' >
                <button 
                  className='p-2 hover:bg-slate-400/30 text-left'
                  onClick={() => setDropDown(false)} >
                    Iniciar Sessión
                </button>
              </Link>
            </ul> : null
          }
        </> : <>
          <button 
            className={`${!user.member ? 'border-red-600' : 'border-blue-700'} p-2 border rounded-full w-10 h-10`} 
            onClick={()=> setDropDown(!dropDown)} >
              {user.name[0]}        
          </button>
          {
            dropDown ? <ul className='absolute bg-white text-black mt-1 right-0 p-2 w-[150px] cursor-auto flex flex-col'>
              <Link href='/'>
                <button 
                  className='p-2 hover:bg-slate-400/30 text-left'
                  onClick={() => setDropDown(false)} >
                    { 
                      user.name.split(' ').map((name, index) =>{
                        if(
                          index == 0 
                          || name != 'de' && index == 1 && user.name.split(' ').length < 3
                          || name != 'de' && index == 2 && user.name.split(' ').length < 5
                          || name == 'de' && index == 1 && user.name.split(' ').length > 2
                          || name == 'de' && index == 2 && user.name.split(' ').length > 3
                          || index == 3 && user.name.split(' ').length > 4) return name + ' ';                            
                      })
                    }
                </button>
              </Link>
              <button 
                className='p-2 hover:bg-slate-400/30 text-left'
                onClick={() => {
                  logOut(); 
                  setDropDown(false);
                }} >
                  Cerrar Sessión
              </button>
            </ul> : null
          }
        </>
      }

      </div>
    </header>
  )
}

export default Header