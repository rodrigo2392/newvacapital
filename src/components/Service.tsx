import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Service {
  title: string
  content: string
  media: string 
  url: string
}

const Service = () => {
  
  return (
    <div className='md:px-12 py-10 lg:mt-20 rounded-md bg-neutral-800'>

    <div
      data-aos="fade-right"
      data-aos-delay="150"
      data-aos-duration="800"  
    >
      <h1 className="px-6 pb-5 text-center font-bold text-2xl text-white">Soluciones financieras para inversores que buscan maximizar su rendimiento en el mercado.</h1>
    </div>

     
      
      
        <Link href={'/alertas-trading'} className='w-full' >
          <div  className='m-5 p-3 flex flex-col sm:items-center md:flex-row md:justify-end  rounded-md bg-zinc-100 hover:shadow-[2px_2px_3px_1px_rgba(248,230,0,0.8)]'>
              <div className='text-center md:text-end md:w-1/2'  data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" >  
                <span className='mt-5 font-bold sm:text-center md:text-right lg:text-xl'>1.</span>
                <span className='font-bold sm:text-center md:text-right lg:text-xl text-sky-600'> Alertas Fx: </span>
                
                <span className='font-bold sm:text-center md:text-right lg:text-xl'>
                ¿Quieres tomar el control de tus inversiones y aprender más sobre el trading? Nuestras alertas de trading son la solución perfecta para ti.
                </span>
                <span className='font-bold sm:text-center md:text-right lg:text-xl hidden md:block'>
                  Recibirás notificaciones en tiempo real de las oportunidades de trading que identifiquen nuestros expertos, con una tasa de éxito comprobada. ¡Únete y comienza a tomar decisiones informadas en tus inversiones!
                </span>
              </div>

              <div className='m-2 md:p-5' 
                data-aos="fade-left"
                data-aos-delay="150"
                data-aos-duration="800"
                >
                  <Image  src={'/services/5.png'}  alt={"AlertImg"} width={320} height={300} />
              </div>
          </div>
        </Link>
     
      

      <Link href={'/cursos'} className='w-full '>
        <div className='m-5 p-3 flex flex-col sm:items-start md:flex-row md:justify-start rounded-md bg-zinc-100 hover:shadow-[2px_2px_3px_1px_rgba(248,230,0,0.8)]'>


            <div className='m-2 md:p-5 hidden md:block'  data-aos="fade-right" data-aos-delay="150" data-aos-duration="1000" >
              <Image  src={'/services/3.png'}  alt={"AlertImg"} width={320} height={300} />
            </div>
 
            <div className='mt-6 text-center md:text-start md:w-1/2'  data-aos="fade-left" data-aos-delay="150" data-aos-duration="1000" >
              <span className='font-bold sm:text-center md:text-left lg:text-xl'> 2. </span>
              <span className='font-bold sm:text-center md:text-left lg:text-xl text-sky-600'> Certificación: </span>
              <span className='font-bold sm:text-center md:text-left lg:text-xl'>¿Quieres llevar tus habilidades de trading al siguiente nivel?</span>
              <span className='font-bold sm:text-center md:text-left lg:text-xl hidden md:block'>Ofrecemos cursos certificados en trading, impartidos por nuestro equipo de expertos en el mercado financiero.</span>
              <span className='font-bold sm:text-center md:text-left lg:text-xl'>Aprenderás técnicas avanzadas de trading, análisis técnico y fundamental, gestión de riesgos y mucho más.</span>
              <span className='font-bold sm:text-center md:text-left lg:text-xl hidden md:block'>Al completar nuestros cursos, recibirás un certificado con valor curricular que acredite tu conocimiento y habilidades en el trading. ¡Inscríbete ahora y conviértete en un trader exitoso!</span>
            </div>

            <div className='m-2 md:p-5 md:hidden flex justify-center sm:w-full'  data-aos="fade-right" data-aos-delay="150" data-aos-duration="1000" >
              <Image  src={'/services/3.png'}  alt={"AlertImg"} width={320} height={300} />
            </div>

        </div>
      </Link>

      <Link href={'/fondo-de-inversion-privado'} className='w-full flex'>
        <div className='mx-5 mt-1 flex p-3 flex-col sm:items-start md:flex-row md:justify-center rounded-md bg-zinc-100 hover:shadow-[2px_2px_3px_1px_rgba(248,230,0,0.8)]'>

            <div className='p-1 mt-8 text-center md:text-start md:mx-5 md:w-6/12' data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" >
              <span className='font-bold sm:text-center md:text-left lg:text-xl'>3. </span>
              <span className='font-bold sm:text-center md:text-left lg:text-xl text-sky-600'>Fondo de inversión privado:</span>
              <span className='font-bold sm:text-center md:text-left lg:text-xl'> Nuestro fondo de inversión privado es una oportunidad única para aquellos que desean invertir en el mercado financiero sin tener que preocuparse por las complejidades del trading.</span>
              <span className='font-bold sm:text-center md:text-left lg:text-xl hidden md:block'> Nuestro equipo de expertos se encarga de administrar el fondo y tomar las decisiones de inversión para obtener el mayor rendimiento posible. ¡Únete a nuestro fondo y déjanos hacer el trabajo pesado por ti!</span>
            </div>

            <div className='m-2 md:p-5 flex justify-center sm:w-full md:w-auto'  data-aos="fade-down" data-aos-delay="150" data-aos-duration="1000"  >
              <Image  src={'/services/2.png'}  alt={"AlertImg"} width={320} height={300} />
            </div>

        </div>
      </Link>

    </div>
  )
}

export default Service