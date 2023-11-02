import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { TbMenu2 } from "react-icons/tb";
const Navbar = () => {

  const [dropdownOpen, setdropdownOpen] = useState(false);


  return (
    <nav className='sticky top-0 h-[114px] bg-gradient-to-b from-black from-20% via-black/70 via-65% to-transparent to-100% z-20' >
      <header className='px-20 max-lg:px-5 flex justify-between items-center  '>
          
          <Link href='/' className="text-lg md:text-2xl flex items-center">
            <div>
              <Image src={"/logo.png"} alt="Logo" width={200} height={50} className='w-30'/> 
            </div>
            {/* <div className='-tracking-2'>
              <p className='font-serif font-thin'>NEWVA</p><p className='font-sans'>CAPITAL</p>
            </div> */}
            
          </Link>

          <nav className='font-light text-lg max-lg:hidden '>
              {/* <Link className='m-3' href='/#inicio'>Inicio</Link> */}
              <Link className='m-3 text-white hover:text-amber-200' href='/#servicios'>Servicios</Link>
              <Link className='m-3 text-white hover:text-amber-200' href='/quienes-somos'>Quienes Somos</Link>
              <Link className='m-3 text-white hover:text-amber-200' href='/#contacto'>Contacto</Link>
          </nav>
          
            

          <div className='lg:hidden text-right'>

            <button onClick={() => setdropdownOpen(!dropdownOpen)} className='pr-2 text-white'>
                <TbMenu2 color='#FFF' size={25} />
            </button>

          </div>

      </header>
    

      <nav className={`flex text-white pb-4 text-lg text-center flex-col ${dropdownOpen ? `visible` : 'hidden'} bg-neutral-800/[.90] `}>
              {/* <Link className='py-2' href='/#inicio'>Inicio</Link> */}
              <Link onClick={() => setdropdownOpen(!dropdownOpen)} className='py-2 text-white hover:text-amber-200' href='/#servicios'>Servicios</Link>
              <Link onClick={() => setdropdownOpen(!dropdownOpen)} className='py-2 text-white hover:text-amber-200' href='/quienes-somos'>Quienes Somos</Link>
              <Link onClick={() => setdropdownOpen(!dropdownOpen)} className='py-2 text-white hover:text-amber-200' href='/#contacto'>Contacto</Link>
      </nav>
    </nav>
  )
}

export default Navbar