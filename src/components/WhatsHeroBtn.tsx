import React from 'react'
import { TbBrandWhatsapp } from "react-icons/tb";

type Props = {
    openLink: React.MouseEventHandler<HTMLButtonElement>
}


const WhatsHeroBtn = ({openLink}: Props) => {

  return (
     <button onClick={openLink} className='px-6 py-3 bg-amber-200 text-black rounded-full text-lg'>
        <div className='flex items-center justify-center'>
         <TbBrandWhatsapp color='#000' size={25} /> <p className='pl-2'>Contactar</p>
        </div>
     </button>
  )
}

export default WhatsHeroBtn