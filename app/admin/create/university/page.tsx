'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    city: '',
    address: '',
    description: '',
    keyInfo: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const response = await fetch('/api/university', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data inserted successfully
        console.log('Data inserted successfully');
      } else {
        // Handle error
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className=''>
      <div className="w-full">
        <h1 className="text-center font-bold text-xl">Create an University</h1>
      </div>
      <form onSubmit={handleSubmit} className=" w-[60%] mx-auto h-auto mt-5 ">
        <div className="p-10 my-10 flex gap-20 justify-center w-full border border-blue-950">
          <div className=" flex flex-col ">
            <div className="border border-blue-950 w-32 h-32"></div>
            <button type="button" className='bg-blue-950  h-10 text-white text-md mt-3 px-2 shadow'>upload logo</button>
          </div>
          <div className="">
            <div className="flex mb-5">
              <label htmlFor="uniName" className="mr-3 flex w-3/6 justify-between">Name <span>:</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className='border border-blue-950 w-full'/>
            </div>
            <div className="flex mb-5">
              <label htmlFor="UniPhoneNumber" className="mr-3 flex w-3/6 justify-between">Phone No<span>:</span></label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className='border border-blue-950 w-full'/>
            </div>
            <div className="flex mb-5">
              <label htmlFor="unEmail" className="mr-3 flex w-3/6 justify-between">Email <span>:</span></label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} className='border border-blue-950 w-full'/>
            </div> 
            <div className="flex mb-5">
              <label htmlFor="uniName" className="mr-3 flex w-3/6 justify-between">website<span>:</span></label>
              <input type="text" name="website" value={formData.website} onChange={handleChange} className='border border-blue-950 w-full'/>
            </div>
          </div>    
        </div>
        
        <div className="px-20 py-10 my-10 flex flex-col  w-full border border-blue-950">
          <div className="flex mb-5">
            <label htmlFor="uniName" className=" flex w-3/8 mr-2 justify-between">city<span>:</span></label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} className='border border-blue-950 w-7/12'/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="UniPhoneNumber" className="mr-3 flex w-1/2 justify-between">Address:</label>
            <textarea name="address" value={formData.address} onChange={handleChange} className='border border-blue-950 w-8/12 h-28'></textarea>
          </div>
        </div>
        <div className="flex flex-col   my-10w-full ">
          <label htmlFor="description">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder='write the description here' className="h-56 border border-black"></textarea>
        </div>
        <div className="flex flex-col  my-10 w-full ">
          <label htmlFor="description">Key info</label>
          <textarea name="keyInfo" value={formData.keyInfo} onChange={handleChange} placeholder='write the informations here' className="h-56 border border-black"></textarea>
        </div>
      
        <div className="px-5 py-10 my-5 gap-5 flex justify-end  w-full">
          <button type="reset" className=' p-2 border border-blue-950 rounded-xl  '>Reset</button>
          <button type="submit" className=' p-2 border border-blue-950 rounded-xl  '>Reset</button>
            <button type="submit"  className=' p-2 text-white rounded-xl  bg-blue-950'>Submit</button>
        </div>
        
      </form>
    </div>
  )
}


