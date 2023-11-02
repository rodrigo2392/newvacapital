import React from 'react'

type Props = {
    src?: string
}

const HeroVideo = ({src}: Props )=> {
  return (

      <div className='w-[300%] md:w-[99%] lg:w-[100%] absolute overflow-hidden z-10 opacity-80'>
        <video  autoPlay loop muted style={{width: "100%"}}>
            <source src={src} />
        </video>
      </div>
  )
}

export default HeroVideo