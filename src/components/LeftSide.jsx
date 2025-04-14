import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LeftSide() {
  const navigate = useNavigate();

  const { data: categoriesInfo } = useQuery({
    queryKey: ['categoryInfo'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/categories');
      return res.data;
    },
  });

  

  return (
    <div className="lg:w-[300px] bg-white rounded mt-3">
      <button className="btn bg-[#1FA45B] w-full text-white hover:bg-[#3e7155]">Categories</button>

      <div className="px-2 mt-3">
        <input type="text" placeholder="Search by Categories" className="input input-bordered w-full" />

        <div className="join join-vertical bg-base-100 mt-3">
          {categoriesInfo?.map((category, index) => (
            <div key={category._id} className="collapse join-item">
              <input type="radio" name="my-accordion-1" defaultChecked={index === 0} />
              <div
                className="collapse-title p-3 font-semibold flex items-center gap-2 cursor-pointer"
                onClick={() => setTimeout(() => navigate(`/duas/${category?._id}`), 0)}
              >
                <div className="flex justify-between w-full">
                  <div className="flex gap-4 items-center">
                    <img src="/img/menImg.png" alt="" />
                    <div>
                      <p className="text-[#1FA45B]">{category?.category}</p>
                      <p className="text-sm text-[#7E7E7E]">Subcategory: {category?.subcategories?.length}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <p>{category?.subcategories[0]?.duas?.length || 0}</p>
                    <p className="text-[#7E7E7E]">Duas</p>
                  </div>
                </div>
              </div>

              <div className="collapse-content text-sm">
                {/* Timeline Subcategory Part */}
                {category?.subcategories?.map((sub, i) => (
                  <div key={i} className="flex gap-3 mb-2">
                    <div className="flex flex-col items-center">
                      <div className="flex-1 w-px border-l-2 border-dashed border-green-400"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow"></div>
                      <div className="flex-1 w-px border-l-2 border-dashed border-green-400"></div>
                    </div>
                    <div className="flex flex-col space-y-1">
                    <Link
                          
                          to={`/duas/${category._id}`}
                          className="text-base hover:text-green-600 font-bold"
                        > {sub.name}</Link>
                      {sub.duas?.map((dua, j) => (
                        
                         <p
                         key={j}
                         onClick={() => {
                           const el = document.getElementById(`dua-${j}`);
                           if (el) el.scrollIntoView({ behavior: 'smooth' });
                         }}
                         className="text-sm hover:text-green-600 cursor-pointer"
                       >
                         📖 {dua.title}
                       </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
