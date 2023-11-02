import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";




const About = () => {

    const [open, setOpen] = useState(false)


  return (
    <div className='pt-20 px-4 md:px-10 lg:px-28 text-justify mt-10 md:text-xl bg-white '>
        <div className='flex flex-col items-center'>
            <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-delay="300"  
                data-aos-duration="1000"
            > 
                <h1 className='text-center text-4xl font-black'>¿Quienes Somos?</h1>
            </div>
            <div className='mt-5' data-aos="fade-up" data-aos-duration="3000">
                <span className='text-sky-600' >Newva Capital</span>
                <span> es una empresa de inversiones inovadora y ética que ofrece servicios de alta calidad para ayudar a los inversores a tomar decisiones informadas y estratégicas para alcanzar sus objetivos financieros a corto, mediano y largo plazo.</span>
                <div className='text-sky-600 underline my-5 '>
                    <Link href='/quienes-somos'>Mas informacion...</Link>
                </div>                
            </div>
            <div data-aos="flip-right" data-aos-delay="500" data-aos-duration="1500">
                <Link href='/quienes-somos'>
                    <Image src={"/img/image5.png"} alt='logo' width={320} height={260}  className='md:w-[600px]'/>
                </Link>
            </div>
        </div>
        <div className='mt-10 text-center flex flex-col items-center '>
            <div data-aos="fade-down"   data-aos-delay="500" data-aos-duration="500">
                <Image onClick={() => setOpen(true)} src={"/aboutImg/3.png"} alt='CEO' width={230} height={100}  className='md:w-[300px]'/>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[{ src: "/aboutImg/3.png" }]}
                />
            </div>
            <div className='mt-2 font-sans font-bold text-xl md:text-2xl'>
                <p>Lic. en Economía Carlos Humberto P. Viramontes</p>
                <p>C. E. O.</p>
            </div>
        </div>
        


    </div>
  )
}

export default About