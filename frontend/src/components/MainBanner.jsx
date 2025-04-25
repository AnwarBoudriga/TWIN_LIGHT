import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function MainBanner() {
  return (
    <div className='relative'>
      <img src={assets.Twin_light_Boutique} alt='Twin_light_Boutique' className='w-full hidden md:block' />
      <img src={assets.Twin_light_Boutique_sm} alt='Twin_light_Boutique_sm' className='w-full  md:hidden' />
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end
      md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left 
        max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'
        >Shop the latest trends of stylish dresses at unbeatable prices. </h1>
      
      <div className='flex items-center mt-6 font-medium'>
        <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounde text_white cursor-pointer'>
        Shop now
        <img src={assets.white_arrow_icon} alt='arrow' className=' w-5 h-5 md:hidden transition group-focus:translate-x-1' />
        </Link>

        <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
        Explore deals
        <img src={assets.black_arrow_icon} alt='arrow' className=' w-5 h-5 transition group-hover:translate-x-1' />
        </Link>
      </div>
      </div>
    </div>
  )
}

export default MainBanner
