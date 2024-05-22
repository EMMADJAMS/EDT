
import Image from 'next/image'
import React, { useState } from 'react'
import { AdminLink } from '@/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SideBar from '@/components/SideBar'

const Navbar = () => {

    const [sideState,setsideState]= useState(false)
    const pathname = usePathname();

    function handleSidebar(){
        setsideState(!sideState)
    }

  return (
    <div>
            <nav className="w-full h-[75px] lg:columns-3 columns-2 flex items-center border-b border-blue-950 shadow-sm mb-2 bg-white">
        <div className="w-4/12">
            <h1 className="text-xl text-bold text-blue-900 flex justify-center">EDT</h1>
        </div>
        <div className="w-8/12 flex justify-between pr-5">
            <ul className="flex ">
                {AdminLink.map((link)=>{
                    const isActive = link.route===pathname
                    return(
                        <li key={link.route} className='hidden lg:block mx-3'>
                           <Link href={link.route}>{link.label}</Link> 
                        </li>
                    )
                })}
            </ul>
            <ul className="flex justify-end lg:mr-20">
                <li className="mx-3 lg:hidden">
                    <button type="button">
                        <Image src={'/search-icon.png'} alt={'search'} width={'20'} height={"20"} />
                    </button>
                </li>
                <li className="mx-3">
                    <button type="button">
                        <Image src={'/notification-icon.png'} alt={''} width={'20'} height={"20"} />
                    </button>
                </li>
               
                <li className="mx-3 lg:hidden">
                    <button type="button" onClick={handleSidebar}>
                        <Image src={'/hamberguer-icon.png'} alt={'search'} width={'20'} height={"20"} />
                    </button>
                </li>
            </ul>
        </div>
      </nav>
      <div className='lg:hidden'><SideBar side={sideState} setside={setsideState} /></div>
    </div>
  )
}

export default Navbar
