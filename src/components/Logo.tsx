import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Logo = () => {
  return (
      <Link href='/' className="text-lg md:text-2xl text-amber-200 flex items-center z-20">
          <div>
            <Image src={"/logo.png"} alt="Logo" width={100} height={50} className='sm:w-[150px] md:w-[300px] bg-black/50 rounded-full'/> 
          </div>
          {/* <div className='-tracking-2 pr-10'>
             <p className='font-serif font-thin text-5xl md:text-8xl'>NEWVA</p><p className='font-sans text-5xl md:text-8xl'>CAPITAL</p>
          </div> */}
          
        </Link>
  )
}

export default Logo