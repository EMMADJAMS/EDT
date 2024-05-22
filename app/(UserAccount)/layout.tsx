'use client'
import NavBar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import React from 'react'

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    const styles = {
        backgroundColor: '#ebecf5',
        
      };
    return (
      <section className='bg-wite'>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav> <NavBar /></nav>
        <main className='w-full flex min-h-screen '>
            <div className=" hidden lg:w-2/12 min-h-screen lg:block lg:px-2 lg:rounded-lg">
                <SideBar side={false}/>
            </div>
            <div className="w-full lg:w-4/6  p-2 border  
            rounded-xl shadow-sm  
            border-blue-950 " >
              {children}</div>
            <div className="hidden lg:w-2/12 lg:block">3</div>
        </main>
        
      </section>
    )
  }
