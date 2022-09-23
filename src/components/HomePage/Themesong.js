import React from 'react'
import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";

export default function Themesong() {
  return (
    <div className="relative z-10 bg-[url('../images/Disc.png')] bg-no-repeat bg-top bg-contain px-12 h-[300px] md:h-[600px] lg:h-[700px]">
      <div className="text-center text-white font-Broadway text-[30px] md:text-[80px] lg:text-[100px] mt-3 overflow-hidden mb-1">THEME SONG</div>
      <div className="flex flex-row text-center gap-4 md:gap-16 place-content-center">
        <a href="https://www.instagram.com/smukiee/" target="blank" className='text-red-600 font-extrabold text-sm md:text-3xl lg:text-4xl bg-white pt-0.5 sm:py-2 px-2 sm:px-4 animate-pulse hover:bg-gray-400'>
          <div className="inline mr-1 md:mr-3">SPOTIFY</div>
          <FaSpotify color="red" size={32} className="inline w-[13px] md:w-[30px] lg:w-[35px] -mt-0.5 md:-mt-1.5 h-fit overflow-fit"/>
        </a>
        <a href="https://www.instagram.com/smukiee/" target="blank" className='text-red-600 font-extrabold text-sm md:text-3xl lg:text-4xl bg-white pt-0.5 sm:py-2 px-2 sm:px-4 animate-pulse hover:bg-gray-400'>
          <p className="inline mr-1 md:mr-3">YOUTUBE</p>
          <AiFillYoutube color="red" size={32} className="inline w-[20px] md:w-[35px] lg:w-[45px] -mt-0.5 md:-mt-1.5 h-fit overflow-fit"/>
        </a>
      </div>
    </div>
  )
}
