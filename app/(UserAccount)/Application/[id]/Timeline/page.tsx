

import TimelineBar from '@/components/TimelineBar'
import React, { useState } from 'react'
import Accordion from '@/components/Accordion'
import CircularProgressBar from '@/components/CircularProgressBar';

const page = () => {
  
  const styles = {backgroundColor: '#ebecf5'};
  const col ={
    display:'flex',
    flexdirection:'col-reverse'
  }
  return (
    <div>
      <div className="w-full h-screen " >
        <div className="w-full p-5">
          <div className="w-full border-b h-full border-blue-950 mb-10">
            <h1 className={`text-xl text-blue-950 after:block after:w-full after:h-[1px] font-bold`}>Progress</h1>
          </div>
          <div className='sm:flex-row flex flex-col-reverse'>
            <div className="sm:w-3/5 w-full mr-10"><Accordion/></div>
            <div className="flex justify-center mb-10 sm:ml-10"><CircularProgressBar/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
