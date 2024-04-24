'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import SideBar from './Sidebar'

const Togglesidebare = () => {

    const [sideState,setsideState]= useState(false)
    function handleSidebar(){
        setsideState(!sideState)
    }

  return (
    <div>
    <button className='mx-3 lg:hidden' type='button' onClick={handleSidebar}>
        <Image src={'/hamberguer-icon.png'} alt={'search'} width={'20'} height={"20"} />
    </button>
    <div><SideBar side={sideState} setside={setsideState} /></div>
    </div>
  )
}

export default Togglesidebare
