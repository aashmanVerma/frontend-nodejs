import React from 'react'
import Telegram from '../assets/telegram.png'
import { useSelector } from 'react-redux'

export default function Tel() {

    const mode = useSelector((state)=>state.toggle.mode);

  return (
    <div className={`w-[40%] mx-auto text-center my-[8rem] ${mode=="light"?"text-black":"text-white"}`}>
        <div className=''>
            <i className='text-xl'>Connect Telegram</i>
        </div>
        <div className='mt-4'>
            <ul>
                <li>Open the telegram app</li>
                <li>Open the group you want to add the bot to.</li>
                <li>Click on add members in group settings.</li>
                <li>Search @HodlInfoBot and click it.</li>
            </ul>
        </div>
        <div className='mt-4'>
            <i className='block text-lg'>Automatic :</i>
            <a href="https://t.me/HodlInfoBot?startgroup=true">Go to : Link</a>
        </div>
    </div>
  )
}
