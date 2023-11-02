import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbBrandInstagram, TbBrandPatreon, TbBrandTelegram } from "react-icons/tb";
import {FiFacebook} from "react-icons/fi"



const Footer = () => {
  return (
    <div className='bg-black text-white flex flex-col  row pt-5'>

        <div className='grid gap-3 grid-cols-1 md:grid-cols-3 pt-10'>
            <div className='flex justify-start flex-col items-center'>
            <Link href="/"><Image src={"/logo.png"} alt="logo" width={200} height={100} className='w-40' /></Link>
                <div className='flex flex-row  pt-2 md:pt-5'>
                    <TbBrandInstagram size={25} /> 
                    <Link href='https://instagram.com/newva.capital?igshid=YmMyMTA2M2Y=' target='_blank' className='px-2 text-white hover:text-amber-200'>
                        Instagram
                    </Link>
                </div>
                <div className='flex flex-row  pt-2 md:pt-5'>
                    <FiFacebook size={25} /> 
                    <Link href='https://www.facebook.com/profile.php?id=100067999058709&mibextid=LQQJ4d' target='_blank' className='px-2 text-white hover:text-amber-200'>
                        Facebook
                    </Link>
                </div>
                <div className='flex flex-row  pt-2 md:pt-5'>
                    <TbBrandPatreon size={25} /> 
                    <Link href='https://www.patreon.com/newvacapital' target='_blank' className='px-2 text-white hover:text-amber-200'>
                        Patreon
                    </Link>
                </div>
                <div className='flex flex-row  pt-2 md:pt-5'>
                    <TbBrandTelegram size={25} /> 
                    <Link href='https://t.me/N_cap' target='_blank' className='px-2 text-white hover:text-amber-200'>
                        Telegram
                    </Link>
                </div>
            </div>

            <div className='text-center md:text-left pt-8 md:pt-0'>
                <h1 className='text-xl font-semibold'>Servicios</h1>
                <div className='mt-5 flex flex-col'>
                    <Link href='/fondo-de-inversion-privado' className='my-2 text-white hover:text-amber-200'>
                        Fondo de inversión privado
                    </Link>
                    <Link href='/alertas-trading' className='my-2 text-white hover:text-amber-200'>Alertas de trading</Link>
                    <Link href='/cursos' className='my-2 text-white hover:text-amber-200'>Cursos certificados</Link>
                </div>
            </div>

            <div className='text-center md:text-left  pt-8 md:pt-0'>
                <h1 className='text-xl font-semibold'>Contactanos</h1>
                <div className='mt-5'>
                    <div className='flex justify-center md:justify-start text-white hover:text-amber-200'>
                        <a target="_blank" href="https://wa.me/message/BE4737FHOXPXH1">
                          <Image className='mb-2' src={'/NewvaQR.png'} alt='contacto' width={200} height={300}/>
                          Whatsapp: +526621063080
                        </a>
                    </div>
                    <div className='pt-8 text-white hover:text-amber-200'>
                        <a href="mailto:trading@newvacap.com">
                            Email: trading@newvacap.com
                        </a>
                    </div>
                    
                </div>
            </div>


        </div>
        <div className='flex justify-center py-5 mt-12'>
            <h1>
                Made with ❤️ by Indexceed - 2023
            </h1>
        </div>

    </div>
  )
}

export default Footer