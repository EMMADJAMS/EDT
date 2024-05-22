'use client'
import NavBar from './component/Navbar'
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
        
        <main className='w-full flex min-h-screen flex-col '>
        <nav> <NavBar /></nav>
            <div className="w-full" >
              {children}
              </div>
        </main>
      </section>
    )
  }