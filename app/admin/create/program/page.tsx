import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className=''>
      <div className="w-full">
        <h1 className="text-center font-bold text-xl">Create Program</h1>
      </div>
      <form action="" className=" w-[60%] mx-auto h-auto mt-5 ">
            <div className="px-20 py-10 my-10 flex flex-col  w-full border border-blue-950">
                
                <div className="">
                    <div className="flex mb-5">
                        <label htmlFor="uniName" className="mr-3 flex w-3/6 justify-between">university<span>:</span></label>
                        <select name="" id="" className='border border-blue-950 w-full '>
                            <option value="">Inti</option>
                        </select>
                    </div>
                        <div className="flex mb-5">
                            <label htmlFor="uniName" className="mr-3 flex w-3/6 justify-between">Study Level<span>:</span></label>
                            <select name="" id="" className='border border-blue-950 w-full '>
                                <option value="">Fundation</option>
                                <option value="">Diploma</option>
                                <option value="">Underdegree</option>
                                <option value="">Degree</option>
                                <option value="">Postdegree</option>
                                <option value="">P.H.D</option>
                            </select>
                        </div>
                    
                    <div className="flex my-10 ">
                        <div className="w-2/6 flex justify-between ">
                            <label htmlFor="UniPhoneNumber" className=" mr-2 flex  w-full justify-between">Study Mode<span>:</span></label>
                        </div>
                        <div className="w-4/6 flex ">
                            <div className="mb-2 flex w-full">
                                <input type="radio" name="" value={'partime'} className='w-3 mr-2' />
                                <label htmlFor="">Part Time</label>
                            </div>
                            <div className="mb-2 flex w-full">
                                <input type="radio" name="" value={'fulltime'} className='w-3 mr-2' />
                                <label htmlFor="">Full Time</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <label htmlFor="uniName" className="mr-3 flex w-3/6 justify-between">duration<span>:</span></label>
                        <input type="text" name="uniwebsite" id="" className='border border-blue-950 w-full'/>
                    </div>
                    <div className="flex mb-5">
                        <label htmlFor="uniName" className="mr-3 flex w-3/6 justify-between">fee<span>:</span></label>
                        <input type="text" name="uniwebsite" id="" className='border border-blue-950 w-full'/>
                    </div>
                </div>    
            </div>
            <div className="px-20 py-10 my-10 flex columns-2 w-full border border-blue-950">
                <div className="flex my-10 w-full ">
                    <div className="w-2/6 ">
                        <label htmlFor="UniPhoneNumber" className="mr-3 flex  w-full justify-between">Intake<span>:</span></label>
                    </div>
                    <div className="w-4/6">
                        <div className="mb-2 ">
                            <input type="checkbox" name="" id="" className='mr-2'  value='fundation'/>
                            <label htmlFor="">January</label>
                        </div>
                        <div className="mb-2">
                            <input type="checkbox" name="" className='mr-2'  value='Diploma'/>
                            <label htmlFor="">February</label>
                        </div>
                        <div className="mb-2">
                            <input type="checkbox" name="" className='mr-2'  value='Underdegree'/>
                            <label htmlFor="">May</label>
                        </div>
                        <div className="mb-2">
                            <input type="checkbox" name="" className='mr-2'  value='Degree'/>
                            <label htmlFor="">August</label>
                        </div>
                        <div className="mb-2">
                            <input type="checkbox" name="" className='mr-2'  value='Degree'/>
                            <label htmlFor="">September</label>
                        </div>
                        <div className="mb-2">
                            <input type="checkbox" name="" className='mr-2'  value='Degree'/>
                            <label htmlFor="">October</label>
                        </div>  
                    </div> 
                </div>
                <div className="flex my-10 w-full ">
                        <div className="w-2/6 ">
                            <label htmlFor="UniPhoneNumber" className="mr-3 flex  w-full justify-between">Application deadline<span>:</span></label>
                        </div>
                        <div className="w-4/6">
                            <div className="mb-2 ">
                                <input type="checkbox" name="" id="" className='mr-2'  value='fundation'/>
                                <label htmlFor="">November</label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" name="" className='mr-2'  value='Diploma'/>
                                <label htmlFor="">Januaryy</label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" name="" className='mr-2'  value='Underdegree'/>
                                <label htmlFor="">April</label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" name="" className='mr-2'  value='Degree'/>
                                <label htmlFor="">Jun</label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" name="" className='mr-2'  value='Degree'/>
                                <label htmlFor="">August</label>
                            </div>
                        </div>     
                </div>
            </div>
            <div className="flex flex-col   my-10w-full ">
                <label htmlFor="description">Description</label>
                <textarea name="" id="" placeholder='write the description here' className="h-56 border border-black"></textarea>
            </div>
            <div className="flex flex-col  my-10 w-full ">
                <label htmlFor="description">Key info</label>
                <textarea name="" id="" placeholder='write the informations here' className="h-56 border border-black"></textarea>
            </div>
          
        
        <div className="px-5 py-10 my-5 gap-5 flex justify-end  w-full">
            <button type="reset" className=' p-2 border border-blue-950 rounded-xl  '>Reset</button>
            <button type="submit"  className=' p-2 text-white rounded-xl  bg-blue-950'>Submit</button>
        </div>
        
      </form>
    </div>
  )
}

export default page
