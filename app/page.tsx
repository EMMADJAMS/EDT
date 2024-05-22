
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { FormEvent } from "react";
import { sql } from "@vercel/postgres";
import { setClient } from "@/lib/dbExport";
import { NextApiResponse, NextApiRequest } from 'next';


export default function Home() {
  
 
  const addName =  async (fd:FormData)=>{
    'use server'
    
    const id = fd.get('id')
    const name = fd.get('name')
    const lastname=fd.get('lastname')

    const fullname=JSON.stringify({name,lastname})

    const client = await setClient()
    //await client.query(``)
    
  } 


  return (
    <div className="w-2/3 mx-auto my-10">
      <form
      action={addName}
      className="flex flex-col relative border border-black p-5">
        <h2 className="text-xl font-bold mb-5 text-center">form</h2>
        <label htmlFor="id">id:</label>
        <input type="text" 
        name="id"
        className="mb-3 border w-2/3 border-black" />
        <label htmlFor="name">Title:</label>
        <input type="text" 
        name="name"
        className="mb-3 border w-2/3 border-black" />
        <label htmlFor="lastname">Title:</label>
        <input type="text" 
        name="lastname"
        className="mb-3 border w-2/3 border-black" />
        <button type="submit" className=" border bg-blue-950 mb-5 text-white">submit</button>
      </form>
    </div>
  );
}
