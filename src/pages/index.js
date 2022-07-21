import Head from 'next/head';
import Image from 'next/image';

import entrenador1 from '@images/entrenador1.jpg';
import entrenador2 from '@images/entrenador2.jpg';
import entrenador3 from '@images/entrenador3.jpg';
import entrenador4 from '@images/entrenador4.jpg';

import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SportTown</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <section className='bg-[url("../assets/images/bg-banner.webp")] w-full min-h-screen bg-[length:100%_100%] bg-fixed relative'>
          <div className="bg-gradient-to-r from-blue-800 to-red-600 w-full min-h-screen opacity-80"></div>
          <div className="absolute w-full min-h-screen flex justify-center items-center top-0 left-0 text-4xl flex-col text-white divide-y-2 gap-4">
            <h4 className="text-8xl font-bold">Zona cross</h4>
            <span className="max-w-[500px] text-center pt-4">Le enseñaremos como levantar y como armar burpees</span>
          </div>
        </section>
        <section className='bg-[url("../assets/images/bg-section.jpg")] w-full min-h-screen bg-[length:100%_100%]'>
          <div className="min-h-screen w-full bg-blue-800/50 flex">
            <div className=" min-h-screen flex justify-center items-center gap-3 w-11/12 m-auto">
              <div className="h-[380px] bg-red-500 hover:bg-red-500/80 transition-colors grow-1 shrink-1 w-full flex flex-col justify-center items-center gap-16 ">
                <h3 className="text-white text-4xl font-bold">Yoga</h3>
                <button className="bg-black text-white py-2 px-4 rounded-md">Unirse</button>
              </div>
              <div className="h-[380px] bg-red-500 hover:bg-red-500/80 transition-colors grow-1 shrink-1 w-full flex flex-col justify-center items-center gap-16 ">
                <h3 className="text-white text-4xl font-bold">Pesas</h3>
                <button className="bg-black text-white py-2 px-4 rounded-md">Unirse</button>
              </div>
              <div className="h-[380px] bg-red-500 hover:bg-red-500/80 transition-colors grow-1 shrink-1 w-full flex flex-col justify-center items-center gap-16 ">
                <h3 className="text-white text-4xl font-bold">Fitness</h3>
                <button className="bg-black text-white py-2 px-4 rounded-md">Unirse</button>
              </div>
              <div className="h-[380px] bg-red-500 hover:bg-red-500/80 transition-colors grow-1 shrink-1 w-full flex flex-col justify-center items-center gap-16 ">
                <h3 className="text-white text-4xl font-bold">Gimnasia</h3>
                <button className="bg-black text-white py-2 px-4 rounded-md">Unirse</button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex bg-blue-800 w-full min-h-screen">
          <div className='w-full flex bg-[url("../assets/images/dieta.png")] bg-[length:100%_100%]'>
            <div className="w-full flex flex-col bg-black/70 justify-center items-center text-white">
              <h3 className="text-6xl font-bold max-w-min text-center">Alimentarse Sano</h3>
              <div className="border border-orange-400 w-24 mt-8"></div>
            </div>
          </div>
          <div className="w-full py-28 px-10">
            <h4 className="text-white text-4xl font-bold">Tips alimenticios</h4>
            <ol className="list-decimal pl-6 mt-6 flex flex-col text-white text-2xl gap-4">
              <li>Come mucha fruta y verdura</li>
              <li>Elige granos integrales en vez de granos refinados</li>
              <li>Sustituye grasas saturadas con las insaturadas</li>
              <li>Limita el consumo de los alimentos ricos en grasa, azúcar o sal </li>
              <li>Limita el consumo de los alimentos ricos en grasa, azúcar o sal </li>
              <li>Elige proteínas vegetales y animales</li>
              <li>Mantente hidratado</li>
              <li>Obtén tu dosis de vitamina D en aislamiento</li>
              <li>Mantente seguro cuando compras alimentos</li>
              <li>No te olvides de la seguridad alimentaria</li>
            </ol>
          </div>
        </section>
        <section className='flex bg-[url("../assets/images/bg-entrenadores.jpg")] bg-[length:100%_100%] w-full min-h-screen'>
          <div className="w-full min-h-screen bg-black/80 flex flex-col p-24 items-center">
            <h2 className="text-6xl mb-8 text-white">Nuestros Entrenadores</h2>
            <span className="border border-red-600 w-[125px] mb-28"></span>
            <div className="grid gap-6 grid-cols-4">
              <div className="w-full bg-red-600 h-[560px]">
                <div>
                  <Image src={entrenador1} width="300px" height="460px" />
                </div>
                <div className="flex flex-col items-center p-4 text-white">
                  <h3 className="text-3xl mb-1">SIMÓN KAN</h3>
                  <p>Yoga</p>
                  <div className="flex justify-center p-3 text-4xl gap-2">
                    <FaFacebookF className="cursor-pointer" />
                    <FaTwitter className="cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="w-full bg-red-600 h-[560px]">
                <div>
                  <Image src={entrenador2} width="300px" height="460px" />
                </div>
                <div className="flex flex-col items-center p-4 text-white">
                  <h3 className="text-3xl mb-1">ANA CAMPOS</h3>
                  <p>Gimnasia</p>
                  <div className="flex justify-center p-3 text-4xl gap-2">
                    <FaFacebookF className="cursor-pointer" />
                    <FaTwitter className="cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="w-full bg-red-600 h-[560px]">
                <div>
                  <Image src={entrenador3} width="300px" height="460px" />
                </div>
                <div className="flex flex-col items-center p-4 text-white">
                  <h3 className="text-3xl mb-1">MARIO LOPEZ</h3>
                  <p>Pesas</p>
                  <div className="flex justify-center p-3 text-4xl gap-2">
                    <FaFacebookF className="cursor-pointer" />
                    <FaTwitter className="cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="w-full bg-red-600 h-[560px]">
                <div>
                  <Image src={entrenador4} width="300px" height="460px" />
                </div>
                <div className="flex flex-col items-center p-4 text-white">
                  <h3 className="text-3xl mb-1">GINA PIN</h3>
                  <p>Fitness</p>
                  <div className="flex justify-center p-3 text-4xl gap-2">
                    <FaFacebookF className="cursor-pointer" />
                    <FaTwitter className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex bg-[url("../assets/images/bg-membresia.jpg")] bg-[length:100%_100%] w-full min-h-screen text-white text-5xl font-bold'>
          <div className="w-full flex flex-col justify-center items-center bg-blue-700/40">
            <h3>Membresía</h3>
            <span className="border border-red-600 w-16 mt-10"></span>
          </div>
          <div className="w-full flex flex-col justify-center items-center bg-black/30">
            <h3 className="text-center max-w-[185px]">Únete a nosotros</h3>
            <span className="border border-red-600 w-16 mt-10"></span>
          </div>
        </section>
      </main>
    </div>
  );
}
