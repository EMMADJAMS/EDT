import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { UserButton,auth,useAuth } from '@clerk/nextjs'
import { NavLink1 } from '@/constant'
import Togglesidebare from './togglesidebare'
import SideBar from './Sidebar'
import TopNavLink from './TopNavLink'

const Navbar = async() => {

    const { userId } = await auth();
    const isAuth = !!userId;

  return (
    <nav className="">
        <div className="h-20 flex columns-2 items-center border border-black">
          <div className="px-20 w-full ">
            <h1 className="text-xl font-bold">
            <Link href="/" className="text-black ml-2">
            EDT
          </Link>
            </h1>
          </div>
          <div className="flex justify-end w-full ">
            <ul className="flex">
                <li><TopNavLink/></li> 
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
              {!isAuth ?(
                <> <li className="mx-5">
                  <Link href={"/sign-in"}>
                    <button>Login</button>
                  </Link>
              </li>
              </>
              ):(
              <>
              <li className="mx-5">
                  <Link href={"/profile"}>Profile</Link>
              </li>
              <li className="mx-5">
                  <UserButton afterSignOutUrl='/'/>
              </li>
              </>
              )}
              <li className="mx-5">
                <Togglesidebare/>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
