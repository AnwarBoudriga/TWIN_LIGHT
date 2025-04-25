import React from 'react'
import {  categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

function Categories() {
    const {navigate} = useAppContext();
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
      <div className='grid grid-cols-2  sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6  '>
        
        {categories.map((category, index)=>(
            <div key={index} className='group cursor-pointer  py-5 px-3 h-[150px] 
             gap-2 rounded-lg   flex flex-col justify-center items-center bg-cover bg-top'
             style={{backgroundImage: `url(${category.image})`}}
             onClick={()=>{
                navigate(`/products/${category.path.toLowerCase()}`);
                scrollTo(0,0)
             }}
            >
                <p className='text-sm  font-black group-hover:scale-108 transition '>{category.text}</p>
            </div>

        ))}

        

      </div>
    </div>
  )
}

export default Categories
//lg max-w-25
//<img src={category.image} alt='{category.text}' className='group-hover:scale-108 transition w-30 bg-cover bg-center' />