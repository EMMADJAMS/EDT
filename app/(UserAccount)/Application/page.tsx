import Image from 'next/image'
import React from 'react'

const page = () => {
    const smallsize ={
        fontSize:'9px'
    }
    const styles = {
        backgroundColor: '#EBECF5',
        
      };
      
  return (
    <div className='p-3'>
      <div className="w-full p-3 sm:p-10 h-screen  shadow-lg" style={styles}>
        <h1 className='text-lg font-bold'>Application</h1>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
            <span className='w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quis. Lorem, ipsum dolor. Lorem ipsum dolor sit amet.</span>
            <button className='bg-blue-900 flex mt-2 justify-center w-full sm:w-24 items-center p-1 rounded-md'>
            <Image src={'/Add-icon.svg'} alt='add' width={20} height={20}/>
            <span className='text-white p-2 pr-0 py-0'>New</span>
            </button>
        </div>
        <table className="w-full mt-10 ">
            <thead className='bg-gray-200 border border-gray-500 shadow-lg'>
                <tr className='border-b border-gray-500'>
                    <th className="text-left text-blue-950 hidden sm:flex w-auto">No.</th>
                    <th className="text-left text-blue-950">Program</th>
                    <th className="text-left text-blue-950">Status</th>
                    <th className="text-left text-blue-950 hidden sm:flex w-auto">Date</th>
                </tr>
            </thead>
            <tbody className='mt-10'>
                <tr className='border-b border-gray-500 shadow-md'>
                    <td className="hidden sm:flex w-auto"></td>
                    <td className="">
                        <div className="flex items-center">
                            <div className="">
                                <Image src={'/images.png'} alt={'ucsi'} width={45} height={45}/>
                            </div>
                            <div className="flex flex-col">
                                <h2 className='text-sm font-semibold'>Petro chemistry</h2>
                                <span className='text-xs font-bold w-auto m-0 text-orange-700'style={smallsize}>UCSI</span>
                            </div>
                        </div>
                    </td>
                    <td className=""></td>
                    <td className="hidden sm:flex w-auto"></td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default page
