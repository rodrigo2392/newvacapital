import Link from 'next/link'
import React from 'react'
import { TbBrandWhatsapp } from "react-icons/tb";



const Contact = () => {
  return (
    <div className='pt-20 bg-white w-screen flex justify-center'>
      <div className='md:px-10 lg:w-[70%]'>
        <h1 className='text-center text-3xl'>Contacto</h1>

        <div className='h-96 mt-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.887137444458!2d-100.32462822354677!3d25.641871077427297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be437c0996d3%3A0xb4f32c3b83823950!2sDavid%20Alfaro%20Siqueiros%20106%2C%20Valle%20Oriente%2C%2066269%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20N.L.!5e0!3m2!1ses!2smx!4v1684361048388!5m2!1ses!2smx" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
        </div>

        <div className='md:flex md:flex-row mt-24'>

            <div className='p-10 text-lg'>
                <div>
                     <h1>Direccion:</h1>
                     <p>David Alfaro Siqueiros Num. Ext. 106, Valle Oriente San Pedro Garza Garcia, Nuevo León, Código Postal 66269.</p>
                </div>
                <div className='mt-5 text-lg max-w-[200px]' data-aos="zoom-out" data-aos-delay="1000" data-aos-duration="1500">
                  <Link href={`https://wa.me/526621063080?text=${'¿Podrías darme más información?'}`} className='flex items-center hover:underline hover:text-green-700'>
                    <TbBrandWhatsapp color='#0d8527' size={45} className='hover:text-green-800'/>
                    <div>
                        <h1>WhatsApp:</h1>
                        <p>+526621063080</p>
                    </div>
                    
                  </Link>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact