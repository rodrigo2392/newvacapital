import Hero from "@/components/Hero"
import Footer from "../components/Footer";
import { Poppins } from 'next/font/google';
import BackTop from "@/components/BackTop";
import Image from "next/image";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});



export default function Home() {
  return (
    <main className={poppins.className}>
      
      <div className="overflow-x-hidden " style={{position: 'relative'}}>
        <Hero title="Fondo de inversión privado" image="/heroImg/22.png" msg="¿Podrías darme información sobre los fondos de inversión?" />
        <div className="flex flex-col items-center justify-center m-auto bg-white">
          <div className='flex flex-col items-center mt-10 md:flex-row md:max-w-max  xl:px-20 md:items-start'>
              <div className='text-xl font-bold text-left pb-16 max-w-[1024px]'>
                <p className="px-10">
                  ¿Estás buscando una forma segura y rentable de invertir tu dinero? ¡El Fondo de Inversión de Newva Capital es la respuesta! Ofrecemos tres planes que se adaptan a tus necesidades y objetivos de inversión.
                </p>
            

              <div className="m-2 mt-12 flex flex-col w-full md:flex-row">

                <div className="m-2 flex justify-center" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                  <Image  alt="img1" width={300} height={300} src={'/img/9.png'} ></Image>
                </div>
                <div className="w-full md:pr-10 px-4">
                  <p className="pt-4"><strong>Plan 6 meses:</strong> Este plan te brinda hasta un 8% de rendimiento al finalizar el contrato de 6 meses. Es perfecto para aquellos que desean una inversión a corto plazo con rendimientos atractivos.</p>
                  <p className="pt-4"><strong>Plan 1 año:</strong> Si estás buscando una inversión a mediano plazo, el plan de 1 año es para ti. Te ofrece hasta un 20% de rendimiento al finalizar el contrato y te permite asegurar tus ganancias en un plazo razonable.</p>
                </div>           
              </div>
              <p className="pt-4 px-8 mb-10"><strong>Plan 3 años:</strong> Para aquellos que buscan una inversión a largo plazo con altos rendimientos, el plan de 3 años es la opción ideal. Con este plan, puedes obtener hasta un 80% de rendimiento al finalizar el contrato. ¡No pierdas la oportunidad de asegurar tu futuro financiero!</p>



              <div className="px-2 flex flex-col md:flex-row">
                <div className="p-10 md:mr-2 md:hidden" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                  <Image  alt="img1" width={600} height={600} src={'/img/8.png'} ></Image>
                </div>
                <div className="md:w-6/12 md:px-6 pl-4">
                  <p className="pt-4">¡Si necesitas un plan personalizado no dudes en contactarnos! </p>
                  <p className="pt-4">En Newva Capital, nuestro equipo de expertos en inversión se encarga de maximizar tus ganancias mientras minimiza los riesgos. Además, te proporcionamos informes periódicos para que puedas monitorear el rendimiento de tu inversión.</p>
                  <p className="pt-4">¿Interesado en invertir en nuestro Fondo de Inversión? </p>
                  <p className="pt-4">Contáctanos para obtener más información sobre cómo podemos ayudarte a alcanzar tus objetivos financieros.</p>
                </div>
                <div className="mr-2 w-6/12 hidden md:block" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                  <Image  alt="img1" width={600} height={600} src={'/img/8.png'} ></Image>
                </div>
              </div>

              
              </div>
              </div>
          <BackTop />
        </div>
        <Footer/>
      </div>

    </main>
  )
}