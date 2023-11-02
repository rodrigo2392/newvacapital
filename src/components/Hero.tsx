import React from 'react'
import WhatsHeroBtn from './WhatsHeroBtn';
import Logo from './Logo';
import HeroVideo from './HeroVideo';
import HeroImg from './HeroImg';


interface Props {
  title?: string
  image?: string 
  msg?: string
  src?: string
}

const Hero = ({title, image, msg, src}: Props) => {
  const openLink = () => {
    window.open(`https://wa.me/526621063080?text=${msg || '¿Podrías darme más información?'}`, "_blank");
  }
  return (
     
    // <div className={`h-[50vw] bg-[url('${image || '/1.png'}')] flex  justify-center items-center min-h-[300px] max-h-[700px] bg-no-repeat bg-cover`}>
     <div className='h-[160vw] md:h-[55vw] lg:h-[56vw] flex  justify-center'>
        
        <div className='h-full w-full flex justify-center items-center text-center '>

          {
            title === "La forma más certera para el crecimiento de tu capital" 
              ? <HeroVideo src={src}/> 
              : title === "¿Quienes somos?" 
                    ? <HeroVideo src={src}/> 
                    : <HeroImg image={image}/>
          }

            <div className='text-white text-lg lg:text-4xl font-bold italic z-10 w-full h-full lg:h-[102%] xl:h-[101%] flex flex-col justify-center'>

              <div className='px-5'>
                {title}   
              </div>
                  
              <div className='pt-8 lg:pt-14 flex justify-center'>
                <WhatsHeroBtn openLink={openLink}/> 
              </div>

             </div>

          {/* {
            title === "¿Quienes somos?" 
            ? <Logo />
            :<div className='text-white text-lg lg:text-4xl font-bold italic z-10'>
              {title}       
              <div className='pt-8 lg:pt-14'>
                <WhatsHeroBtn openLink={openLink}/> 
              </div>
             </div>
          } */}

        </div>
    </div>
  )
}

export default Hero