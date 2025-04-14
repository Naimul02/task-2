import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import LeftSide from '../LeftSide';
import { Outlet } from 'react-router-dom';

export default function CategoriesInfo() {

    const {data : categoriesInfo } = useQuery({
            queryKey : ['categoryInfo'],
            queryFn : async() => {
                    const res = await axios.get('http://localhost:5000/categories');
                    console.log("datas : " , res.data)
                    return res.data
            }
    })


  return (
    <div className=''>
         <div className="flex gap-4">
                    {/* Left side */}
                    <div className=''>
                    <LeftSide></LeftSide>
                    </div>
                    <div className='max-w-[520px]'>
                    <Outlet></Outlet>
                    </div>
                    <div className='flex-1'>
                      <img src="/img/Desktop.png" alt="" />
                    </div>
                  </div>
        
        </div>
  )
}
