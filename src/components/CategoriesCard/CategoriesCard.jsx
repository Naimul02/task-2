import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoriesCard() {
    const {id} = useParams();
    console.log("id : " , id)
    

    const {data : informations} = useQuery({
        queryKey : ['categoryInfo' , id],
        queryFn : async() => {
                const res = await axios.get(`http://localhost:5000/categories/${id}`);
                 console.log("data" , res.data[0])
                 return res?.data[0];
        }
} )


    
  return (

    <div className='space-y-3'>
        {informations?.map((info , index) => <div className='w-full bg-white rounded p-6'id={`dua-${index}`}>
            <div className='flex gap-2 items-center'>
                <img src="/img/allah.png" alt="nai" />
                <h1 className="text-base text-[#1FA45B] font-semibold">{info?.title}</h1>
            </div>
            <div className='my-5'>
                <p>{info?.description}Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.</p>
            </div>
            <div>
                <p className='text-right'>{info?.arabic}</p>
                <p className='mt-2'><span className='font-bold'>Translation : </span>{info?.translation}</p>
            </div>
            <div>
                <span className='text-[#1FA45B]'>Reference</span> 
                <p>{info?.reference}</p>
            </div>
            <div className='mt-2'>
                <img src="/img/frame19.png" alt="" />
            </div>
    </div>)}
    </div>
    
  )
}
