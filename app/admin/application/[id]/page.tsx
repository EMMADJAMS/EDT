import CircularProgressBar from '@/components/CircularProgressBar'
import React from 'react'

const page = () => {
  return (
    <div className='h-full w-[80%] m-auto'>
      <div className="h-6/12 w-full flex p-3 border border-blue-950 rounded-2xl">
        <div className="p-3">
            <div className="w-full flex">
                <div className="border border-blue-950 h-6/12 w-4/5 flex items-center">Profile image</div>
                <div className="mx-5 w-full">
                    <ul className='flex justify-between'>
                        <li className="flex flex-col w-20">
                            <label className='mb-3'>Name</label>
                            <label className='mb-3'>Phone No</label>
                            <label className='mb-3'>Email</label>
                        </li>
                        <li className="flex flex-col">
                            <span className='mb-3'>: Emmanuel</span>
                            <span className='mb-3'>: +60172445179</span>
                            <span className='mb-3'>:djambemmanuel@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="flex ">
                <li className="flex flex-col">
                    <label className='mb-3'>University</label>
                    <label className='mb-3'>level</label>
                    <label className='mb-3'>Program</label>
                    <label className='mb-3'>Date</label>
                    <label className='mb-3'>Status</label>
                </li>
                <li className="flex flex-col">        
                    <span className='mb-3'>: Inti</span>
                    <span className='mb-3'>: Master</span>
                    <span className='mb-3'>: computer science</span>
                    <span className='mb-3'>: 2010/2/10</span>
                    <span className='mb-3'>: on progress</span>
                </li>
            </ul>
        </div>
        <div className="flex justify-center w-8/12">
            <CircularProgressBar/>
        </div>
      </div>
      <div className="h-6/12 w-full mt-3 flex p-3 pt-0 border border-blue-950 rounded-2xl">
        <div className="w-full p-3">
            <ul className="flex gap-[5] border-b border-blue-950">
                <li className="m-5">Link up</li>
                <li className="m-5">Document submission</li>
                <li className="m-5">Document verification</li>
                <li className="m-5">Payment</li>
                <li className="m-5">Visa Process</li>
                <li className="m-5">Accomodation</li>
            </ul>
            <form action="" >
                <div className=" flex w-full h-full ">
                    <div className="flex w-5/12">
                        <div className="w-full">
                            <div className="flex">
                                <label htmlFor="noticeType" className='flex justify-between w-full my-5'>Notice type <span>:</span></label>
                                <select name="noticeType" id="" className='border border-blue-950 w-full my-4'>
                                    <option value="notice">Notice</option>
                                    <option value="notice">Request</option>
                                    <option value="notice">Send</option>
                                </select>
                            </div>
                            <div className="flex w-full">
                                <label htmlFor="noticeTile" className='flex justify-between w-full my-5'>Notice Title <span>:</span></label>
                                <input type="text" name="noticeTitle" id="" className='border border-blue-950 w-full my-5' />
                            </div>
                            <div className="flex w-full">
                                <label htmlFor="noticeTile" className='flex justify-between w-full my-5'>Status <span>:</span></label>
                                <select name="noticeType" id="" className='border border-blue-950 w-full my-5'>
                                    <option value="notice">On Progress</option>
                                    <option value="notice">Pending</option>
                                    <option value="notice">Alert</option>
                                </select>
                            </div>
                            <div className="hidden">
                                <h1>Document</h1>
                            </div>
                            <div className="">
                                <textarea name="" 
                                id=""  placeholder='Write the notice' className='border h-20 border-blue-950 w-full'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="pl-5 w-7/12 p-5">
                        <div className="flex justify-end my-10">
                            <button className='p-1 border border-black'>view report list</button>
                        </div>
                        <div className="w-full h-9/12"></div>
                        <textarea name="" id=""  placeholder='write a report' className='border border-blue-950 w-full h-36'></textarea>
                    </div>
                </div>
                <div className="px-5 pt-10 my-5 gap-5 flex  justify-end  w-full">
                    <button type="reset" className=' p-2 border border-blue-950 rounded-xl  '>Reset</button>
                    <button type="submit"  className=' p-2 text-white rounded-xl  bg-blue-950'>Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default page
