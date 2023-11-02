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
        <Hero title="Certificación" image="/heroImg/21.png" msg="¿Podrías darme información sobre los cursos?"/>
        <div className="flex flex-col items-center justify-center  m-auto bg-white">
          <div className='flex flex-col items-center mt-10 md:flex-row md:max-w-max  xl:px-20 md:items-start'>

              <div className='text-lg text-left pb-16 max-w-[1024px] px-8'>

                <div>
                  <p className="md:text-xl md:text-justify">
                    ¡Bienvenido a Newva Capital, tu puerta al éxito en el mundo financiero!
                    Nos enorgullece presentarte nuestros exclusivos cursos, 
                    <Image className=" md:float-left pl-0 p-3" alt="CursoImg" src={'/CursoImg/7.png'} width={290} height={200} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000"></Image>
                    cuidadosamente diseñados para aquellos que desean adquirir y perfeccionar habilidades imprescindibles en el apasionante mercado 
                    financiero. Prepárate para desafiar tus límites, adquirir conocimientos profundos y alcanzar la
                    maestría en el arte del trading.
                    <br/>
                    <br/>
                    Enfocados en el trading para principiantes y avanzados, nuestros cursos están cuidadosamente estructurados para proporcionar una 
                    educación de calidad y efectiva. Desde la comprensión de los conceptos básicos hasta la aplicación de estrategias avanzadas, están 
                    diseñados para adaptarse a cualquier nivel de experiencia.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="md:text-xl md:text-justify">
                  Al concluir cualquiera de nuestros cursos, los alumnos recibirán una certificación de acreditación del curso con valor curricular, 
                  lo que les permitirá demostrar sus habilidades y
                    <Image className=" md:float-right pr-0 p-3" alt="CursoImg" src={'/CursoImg/6.png'} width={290} height={200} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000"></Image>
                    conocimientos adquiridos en el campo del trading.
                    <br/>
                    <br/>
                    Newva Capital te permitirá aprender de expertos de la industria, interactuar con otros estudiantes y obtener respuestas en tiempo 
                    real a todas tus preguntas. Te brindaremos todas las herramientas necesarias para que puedas comenzar a aplicar tus habilidades y 
                    conocimientos adquiridos en el mercado financiero.
                  </p>
                </div>

                <div className="mt-10 md:mt-32">
                  <p className="md:text-xl md:text-justify">
                  Si estás interesado en nuestros cursos y deseas conocer las próximas fechas y temarios, visita nuestra página de Instagram o envía 
                  un correo electrónico a trading@newvacap.com. ¡No pierdas la oportunidad de aprender de los expertos y convertirte en un trader rentable!
                  </p>
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