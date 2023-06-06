import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Hero() {

    const mode = useSelector((state)=>state.toggle.mode);


  return (
    <div className='w-[90%] mx-auto'>
        <div className='flex gap-x-6 w-[100%] justify-around px-3 items-center'>
            <div className='flex gap-x-5 md:gap-x-12 lg:gap-x-16'>
            <div className=''>
                <i className='block tcolor text-lg sm:text-xl md:text-2xl lg:text-3xl'>0.4%</i>
                <i className='text-xs gcolor sm:text-base md:text-lg lg:text-xl'>5 Mins</i>
            </div>
            <div className=''>
                <i className='block tcolor text-lg sm:text-xl md:text-2xl lg:text-3xl'>0.76%</i>
                <i className='text-xs gcolor sm:text-base md:text-lg lg:text-xl'>1 Hour</i>
            </div>
            </div>
            
            <div className='flex flex-col content-center items-center justify-between'>
                <i className='text-sm block gcolor sm:text-base md:text-lg lg:text-xl'>Best Price to Trade</i>
                <i className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl block lg:my-2 ${mode=="light"?"text-black":"text-white"}`}>91.600</i>
                <i className='text-[0.50rem] gcolor text-center mt-1 md:text-sm lg:text-base md:mt-2 lg:mt-4'>Average USDT/INR net price including commission</i>
            </div>

            <div className='flex gap-x-5 md:gap-x-12 lg:gap-x-16'>
            <div className=''>
                <i className='block tcolor text-lg sm:text-xl md:text-2xl lg:text-3xl'>5.86%</i>
                <i className='text-xs gcolor sm:text-base md:text-lg lg:text-xl'>1 Day</i>
            </div>
            <div className=''>
                <i className='block tcolor text-lg sm:text-xl md:text-2xl lg:text-3xl'>11.76%</i>
                <i className='text-xs gcolor sm:text-base md:text-lg lg:text-xl    '>7 Days</i>
            </div>
            </div>
        </div>

    </div>
  )
}
