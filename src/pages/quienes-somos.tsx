import React, { useState } from 'react'
import Hero from "@/components/Hero"
import Contact from '@/components/Contact';
import Footer from "../components/Footer";
import { Poppins } from 'next/font/google';
import BackTop from "@/components/BackTop";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export default function QuienesSomos () {

  const [open, setOpen] = useState(false)
  const [index, setIndex] = React.useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

    return (
        <main className={poppins.className }>
          <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={[{ src: "/aboutImg/1.png" }, { src: "/aboutImg/5.png" }]}
            />
          <div className="overflow-x-hidden " style={{position: 'relative'}}>
            
            <Hero title="¿Quienes somos?" image="/heroImg/16.jpg" msg="¿Podrías darme más información?" src='/video/Metropolitan-Center.mp4'/>
            <div className='pt-10 text-left md:text-xl font-semibold bg-white'>
              {/* <h1 className="ml-10 md:ml-40 font-bold pb-5">¿Quiénes somos?</h1> */}
              <div className='flex flex-col justify-center break-words'>
                <div className='m-10 md:mx-16 xl:mx-52'>
                  <p className='mt-5 ml-5 '>
                    NEWVA CAPITAL (Newva Capital S. A. P. I. de C. V.) es una empresa mexicana especializada en el sector de las inversiones, establecida el 22 de enero de 2022 en Monterrey, Nuevo León, México.  
                  </p>
                  <div className='sm:float-left m-5' data-aos="zoom-out-right" data-aos-delay="300" data-aos-duration="1000">
                      <Image 
                        onClick={() => {
                          setOpen(true);
                          setIndex(0)
                        }} 
                        src={"/aboutImg/1.png"} 
                        alt='logo' width={250} 
                        height={100}  
                        className='md:w-[350px]'/>        
                  </div>
                  <p className='mt-5 ml-5'>
                    Newva Capital fue fundada por el Licenciado en Economía Carlos Humberto P. Viramontes, quien actualmente se desempeña como CEO. 
                  </p>
                  <p className='mt-5 ml-5'>
                    La empresa se rige por altos estándares de transparencia y ética en sus prácticas comerciales, lo que garantiza la confianza y satisfacción de sus clientes.
                  </p>
                  <p className='mt-5 ml-5'>
                    Newva Capital se esfuerza por brindar soluciones de inversión innovadoras y de alta calidad para ayudar a los inversores a tomar decisiones informadas y estratégicas que les permitan alcanzar sus objetivos financieros a corto y largo plazo.
                  </p>
                  <p className='mt-5 ml-5'>
                    La compañía ha sido objeto de atención por los medios de comunicación debido a su enfoque innovador en el sector de las inversiones. Además, cuenta con el respaldo de importantes instituciones financieras y firmas de análisis de mercado, lo que refleja la confianza que se tiene en la empresa y sus servicios.
                  </p>
                  <div className='sm:float-right m-5' data-aos="zoom-out-left" data-aos-delay="300" data-aos-duration="1000">
                      <Image 
                        onClick={() =>{ 
                          setOpen(true);
                          setIndex(1)
                        }} 
                        src={"/aboutImg/5.png"} alt='logo' 
                        width={230} height={100}  
                        className='md:w-[300px]'/>
                  </div>
                  <p className='mt-5 ml-5'>
                    Newva Capital es una empresa de inversiones innovadora y ética que ofrece servicios de alta calidad para ayudar a los inversores a tomar decisiones informadas y estratégicas para alcanzar sus objetivos financieros a largo plazo. La compañía se rige por altos estándares de transparencia y ética, y cuenta con el respaldo de importantes instituciones financieras y firmas de análisis de mercado, lo que demuestra la confianza en la empresa y sus servicios.
                  </p>
                  <p className='mt-5 ml-5'>
                    La sede de la empresa se encuentra en David Alfaro Siqueiros Num. Ext. 106, Valle Oriente San Pedro Garza Garcia, Nuevo León, Código Postal 66269.
                  </p>
                </div>     
              </div>
              <Contact/>
              <BackTop />
            </div>
            <Footer/>
          </div>
         </main>
    )
}
