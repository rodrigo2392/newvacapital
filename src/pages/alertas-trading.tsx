import Hero from "@/components/Hero"
import Footer from "../components/Footer";
import { Poppins } from 'next/font/google';
import BackTop from "@/components/BackTop";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});



export default function Home() {
  return (
    // <main className={poppins.className}>
    <main >
      <div className="overflow-x-hidden " style={{position: 'relative'}}>
        <Hero title="Alertas Fx" image="/heroImg/20.png" msg="¿Podrías darme información sobre las alertas?"/>
        <div className="flex flex-col items-center justify-center  m-auto bg-white">
          <div className='flex flex-col items-center mt-10 '>
              <div className={poppins.className}>
              <div className='text-xl font-bold text-left pb-16 max-w-[1024px] px-8'>
                  <p data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                  ¡No pierdas la oportunidad de ganar en el mercado financiero! Únete a nuestro servicio de alertas de trading y obtén las señales más precisas para operar en Forex y el índice US30.
                  </p>

                  <div className="mt-10 md:flex md:flex-row">
                    <div className="w-full flex justify-center md:w-6/12 md:mt-12" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                      <Image src={'/alertsImg/1.png'} alt="alertImg1" width={400} height={400} ></Image>
                    </div>
                    <div className="md:w-6/12" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                      <p className="font-bold pt-4 text-xl">
                          ¿Qué ofrecemos?
                      </p>
                      <p className="pt-4">
                      <strong>Alertas de trading precisas:</strong> Nuestro equipo de expertos en trading genera cerca de 2,000 pips mensuales para nuestros clientes. No te pierdas la oportunidad de obtener ganancias en el mercado financiero.
                      </p>
                      <p className="pt-4">
                      <strong>Fácil de usar:</strong> Nuestras alertas son fáciles de entender y operar, incluso si eres nuevo en el mundo del trading. Simplemente sigue nuestras señales y obtén ganancias.
                      </p>
                    </div>
                  </div>

                  <div className="md:flex md:flex-row md:mt-4 justify-end">
                    <div className="flex justify-center md:hidden" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
                      <Image src={'/alertsImg/14.png'} alt="alertImg2" width={600} height={600} ></Image>
                    </div>
                    <div className="md:w-9/12 md:flex md:items-center">
                      <p className="pt-4 " data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                        <strong>Soporte personalizado:</strong> Nos preocupamos por nuestros clientes y estamos disponibles para ayudarte en todo momento, mientras el mercado este abierto. Si tienes alguna pregunta o necesitas asesoramiento, nuestro equipo de soporte está a tu disposición.
                      </p>
                    </div>
                    <div className="hidden md:block" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
                      <Image src={'/alertsImg/14.png'} alt="alertImg2" width={400} height={400} ></Image>
                    </div>
                  </div> 
                  
              </div>
              </div>

              <div className="bg-neutral-800 p-[5vw] rounded-md w-screen flex flex-col items-center md:text-2xl">

                    <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" className="xl:max-w-5xl bg-neutral-100 mt-10 p-3 border-2 border-neutral-300 rounded-md shadow-[2px_2px_1px_1px_rgba(180,180,180,0.8)]  hover:shadow-[2px_2px_6px_2px_rgba(248,230,0,0.9)] ">
                      <Link href={'https://www.patreon.com/newvacapital'} className="md:flex md:flex-row md:items-center">
                        <div className="hidden mt-2 md:block">                   
                            <Image src={'/alertsImg/A2.png'} alt="alertImg3" width={300} height={300} ></Image>                   
                        </div>
                        <div className="md:w-9/12 md:pl-4">
                          <p className="pt-4">
                            <strong className="text-sky-600 underline decoration-sky-600">Plan mensual por $99 USD:</strong> Este plan te brinda acceso a nuestras alertas de trading por un mes completo. Durante este periodo, recibirás señales en tiempo real para operar. Además, te ofrecemos soporte técnico personalizado para resolver cualquier duda o consulta que tengas.  
                          </p>
                        </div>
                        <div className="flex justify-center mt-2 md:hidden">                   
                            <Image src={'/alertsImg/A2.png'} alt="alertImg3" width={300} height={300} ></Image>
                        </div>
                      </Link>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" className="xl:max-w-5xl bg-neutral-100 mt-10 p-3 border-2 border-neutral-300 rounded-md shadow-[2px_2px_1px_1px_rgba(180,180,180,0.8)]  hover:shadow-[2px_2px_6px_2px_rgba(248,230,0,0.8)] ">
                      <Link href={'https://mpago.la/1jyiHRP'} className="md:flex md:flex-row md:items-center">
                        <div className="hidden mt-2 md:block">                   
                          <Image src={'/alertsImg/A1.png'} alt="alertImg4" width={300} height={300} ></Image>                 
                        </div>
                        <div className="md:w-9/12 md:pl-4">
                          <p className="pt-4">
                          <strong className="text-sky-600 underline decoration-sky-600">Plan trimestral por $199 USD:</strong> Con este plan, podrás disfrutar de nuestras alertas de trading durante tres meses. Es una excelente opción para aquellos traders que buscan una inversión a mediano plazo y desean mantenerse actualizados con las tendencias del mercado. 
                          </p>
                        </div>
                        <div className="flex justify-center mt-2 md:hidden">                   
                          <Image src={'/alertsImg/A1.png'} alt="alertImg4" width={300} height={300} ></Image>
                        </div>
                      </Link>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" className="xl:max-w-5xl bg-neutral-100 mt-10 p-3 border-2 border-neutral-300 rounded-md shadow-[2px_2px_1px_1px_rgba(180,180,180,0.8)]  hover:shadow-[2px_2px_6px_2px_rgba(248,230,0,0.8)] ">
                      <Link href={'https://mpago.la/1QMgeKF'} className="md:flex md:flex-row md:items-center">
                        <div className="hidden mt-2 md:block">                   
                          <Image src={'/alertsImg/A3.png'} alt="alertImg5" width={300} height={300} ></Image>                  
                        </div>
                        <div className="md:w-9/12 md:pl-4">
                          <p className="pt-4">
                            <strong className="text-sky-600 underline decoration-sky-600">Plan anual por $399 USD:</strong> Este es nuestro plan más popular, ya que te brinda acceso a nuestras alertas de trading por todo un año. De esta manera, podrás mantener una inversión a largo plazo y estar seguro de estar recibiendo información actualizada y precisa para tus operaciones. 
                          </p>
                        </div>
                        <div className="flex justify-center mt-2 md:hidden">                   
                          <Image src={'/alertsImg/A3.png'} alt="alertImg5" width={300} height={300} ></Image>
                        </div>
                      </Link>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" className="xl:max-w-5xl bg-neutral-100 mt-10 p-3 border-2 border-neutral-300 rounded-md shadow-[2px_2px_5px_3px_rgba(180,180,180,0.8)]  hover:shadow-[2px_2px_6px_2px_rgba(248,230,0,0.8)] ">
                      <Link href={'https://mpago.la/1tTVuGk'} className="md:flex md:flex-row md:items-center">
                        <div className="hidden mt-2 md:block">                   
                          <Image src={'/alertsImg/A4.png'} alt="alertImg6" width={300} height={300} ></Image>                   
                        </div>
                        <div className="md:w-9/12 md:pl-4">
                          <p className="pt-4">
                            <strong className="text-sky-600 underline decoration-sky-600">Plan de por vida por $599 USD:</strong> Si estás buscando una inversión a largo plazo y quieres mantener una conexión constante con nuestro equipo, este es el plan para ti. Con nuestras alertas de por vida, tendrás acceso a toda nuestra información y conocimientos, así como a un soporte técnico personalizado de por vida.
                          </p>
                        </div>
                        <div className="flex justify-center mt-2 md:hidden">                   
                          <Image src={'/alertsImg/A4.png'} alt="alertImg6" width={300} height={300} ></Image>
                        </div>
                      </Link>
                    </div>

                  </div>
                  <div>
                  <p className="m-[7vw] md:text-3xl">
                    ¿Qué esperas? Únete a nuestro servicio de alertas de trading y comienza a ganar en el mercado financiero hoy mismo.
                  </p>
                  </div>
          </div>
          <BackTop />
        </div>
        <Footer/>
      </div>
    </main>
  )
}