import React from 'react'
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import  Image  from 'next/image'

const page = () => {
  return (
    <div>
        <div className="w-full border-b border-blue-950">
            <h1 className="text-xl font-bold text-blue-950">University List</h1>
        </div>
        <div className="mt-5 columns-4 h-full w-full ">
            <div className="flex w-full h-70 items-center  shadow shadow-blue-950">
                <div className="">
                    <Image src={'/images.png'} alt={''} width={100} height={100}/>
                </div>
                <div className="">
                    <h1 className="">UCSI international University</h1>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default page
