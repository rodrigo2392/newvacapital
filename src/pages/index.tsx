import Hero from "@/components/Hero"
import Service from '../components/Service';
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Poppins } from 'next/font/google';
import BackTop from "@/components/BackTop";
import About from "@/components/About";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});



export default function Home() {
  return (
    <main className={poppins.className}>
      <div className="overflow-x-hidden " style={{position: 'relative'}}>

        <Hero title="La forma más certera para el crecimiento de tu capital" image="/heroImg/11.png" msg="" src="/video/NewvaHero.mp4"/>
        <div className="flex flex-col items-center justify-center m-auto">  
          <div id="servicios" className="max-w-[1440px]">
            <Service />
          </div>
          <div id="nosotros" >
            <About/>
          </div>
          <div id="contacto">
            <Contact/>
          </div>
          <BackTop />
        </div>
        <Footer/>

      </div>
    </main>
  )
}