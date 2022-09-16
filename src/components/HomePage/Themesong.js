import React from 'react'
import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify";
import { AiOutlineYoutube } from "@react-icons/all-files/ai/AiOutlineYoutube";

export default function Themesong() {
  return (
    <div className="relative z-10 bg-[url('../images/Disc.png')] bg-no-repeat bg-top bg-contain px-12 h-[300px] md:h-[600px] lg:h-[700px]">
      <div className="text-center text-white font-Broadway text-[30px] md:text-[80px] lg:text-[100px] mt-12 overflow-hidden mb-3 md:mb-6">THEME SONG</div>
      <div className="flex flex-row text-center gap-4 place-content-center">
        <a href="https://www.instagram.com/smukiee/" target="blank" className='text-red-900 font-bold text-xs md:text-xl lg:text-2xl bg-white sm:py-2 px-2 sm:px-4 shrink animate-pulse hover:bg-gray-400'><p className="inline mr-2">SPOTIFY</p><FaSpotify color="red" size={32} className="inline w-[20px] md:w-[30px] lg:w-[32px] overflow-fit"/></a>
        <a href="https://www.instagram.com/smukiee/" target="blank" className='text-red-900 font-bold text-xs md:text-xl lg:text-2xl bg-white sm:py-2 px-2 sm:px-4 shrink animate-pulse hover:bg-gray-400'><p className="inline mr-2">YOUTUBE</p><AiOutlineYoutube color="red" size={32} className="inline w-[25px] md:w-[33px] overflow-fit"/></a>
      </div>
    </div>
  )
}
