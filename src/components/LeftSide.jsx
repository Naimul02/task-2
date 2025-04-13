import React from 'react'

export default function LeftSide() {
  return (
    <div>

<div className='lg:w-[300px] bg-white rounded mt-3'>
                  <div>
                      <button className='btn bg-[#1FA45B] w-full text-white hover:bg-[#3e7155]'>Categories</button>
                      <div className='px-2 mt-3'>
                      <input type="text" placeholder="Search by Categories" className="input input-bordered w-full" />

                      {/* accordian */}


        

                      
                      <div className="join join-vertical bg-base-100 mt-3">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title font-semibold">How do I create an account?</div>
    <div className="collapse-content text-sm">
    
  {/* Timeline Part */}
  <div className='flex gap-3'>
  <div className="flex flex-col items-center">
    {/* Top line */}
    <div className="flex-1 w-px border-l-2 border-dashed border-green-400"></div>

    {/* Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow"></div>

    {/* Dashed Line for next items */}
    <div className="flex-1 w-px border-l-2 border-dashed border-green-400"></div>
  </div>
  
       <p> Click the "Sign Up" button in the top right corner and follow the registration process.</p>
  </div>
  <div className='flex gap-3'>
  <div className="flex flex-col items-center">
    {/* Top line */}
    <div className="flex-1 w-px border-l-2 border-dashed border-green-400"></div>

    {/* Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow"></div>

    {/* Dashed Line for next items */}
    <div className="flex-1 w-px border-l-2 border-dashed border-green-400"></div>
  </div>
  
       <p> Click the "Sign Up" button in the top right corner and follow the registration process.</p>
  </div>
  <div className='flex gap-3'>
  <div className="flex flex-col items-center">
    {/* Top line */}
    <div className="flex-1 w-px border-l-2 border-dashed border-green-400"></div>

    {/* Dot */}
    <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow"></div>

    {/* Dashed Line for next items */}
    <div className="flex-1 w-px border-l-2 border-dashed border-green-400"></div>
  </div>
  
       <p> Click the "Sign Up" button in the top right corner and follow the registration process.</p>
  </div>
  
        
        </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">How do I update my profile information?</div>
    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
  </div>
</div>
                      </div>
                  </div>
              </div>
    </div>
  )
}
