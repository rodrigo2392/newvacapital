import React from 'react'
import Image from 'next/image'

type Props = {
    image?: string
}

const HeroImg = ({image} : Props) => {
  return (
    <div className='absolute opacity-80 overflow-hidden w-[300vw] md:w-[100vw]'>
      <Image 
        priority  
        alt='HerobBg' 
        src={`${image}`}  
        height={1200}
        width={1200}
        // sizes="(min-width: 808px) 50vw, 100vw"
        style={{ zIndex:"-1", objectFit: "contain", width: "100%"}}
      /> 
    </div>  
     
  )
}

export default HeroImg