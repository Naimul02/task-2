
import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import LeftSide from '../components/LeftSide'
import CategoriesInfo from '../components/CategoriesInfo/CategoriesInfo'

export default function Main() {
  return (
    <div className='bg-base-200 p-6'>

      <div className='flex gap-4'>
        <aside>
            <div className='bg-white p-1 flex gap-10 flex-col items-center'>
                <div className='w-[73px] h-[73px]'>
                    <img src="/img/one.png" alt="" className='w-full h-full'/>
                </div>
                <div>
                  <img src="/img/two.png" alt="" />
                </div>
                <div className='w-[73px] h-[73px]'>
                  <img src="/img/three.png" alt="" className='w-full h-full' />
                </div>
            </div>
        </aside>
        
        <div className='w-full'>
        <Navbar></Navbar>


        <div>
          <CategoriesInfo>
         

          </CategoriesInfo>
          
        </div>
        </div>


        
        </div>
        

    </div>
  )
}
