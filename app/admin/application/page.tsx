import React from 'react'
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import { Checkbox } from '@radix-ui/react-checkbox'





const page = () => {
  return (
    <div>
        <div className="w-full ">
            <h1 className="text-3xl p-5 text-center mb-10 font-bold text-blue-950">Applicant List</h1>
        </div>
        <div className="w-full border-b border-blue-950">
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
              </li>
            </ul>
        </div>
        <Table>
          <TableHeader className='w-'>
            <TableRow className='text-blue-200'>
                <TableHead className='w-1/12'><input type="checkbox" name="" id="" /></TableHead>
                <TableHead className='w-4/12'>Applicante Name</TableHead>
                <TableHead className='w-4/12'>Program</TableHead>
                <TableHead className='w-2/12'>status</TableHead>
                <TableHead className='w-1/12'>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>Emmanuel</TableCell>
                <TableCell>Computer Science</TableCell>
                <TableCell>pending</TableCell>
                <TableCell>2010/2/10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>
  )
}

export default page
