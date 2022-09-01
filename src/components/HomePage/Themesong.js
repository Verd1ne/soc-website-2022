import React from 'react'
import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify";
import { AiOutlineYoutube } from "@react-icons/all-files/ai/AiOutlineYoutube";

export default function Themesong() {
  return (
    <div className="relative z-10 bg-[url('../images/Disc.png')] bg-no-repeat bg-top px-12 h-[700px]">
      <div className="text-center text-white font-Broadway text-[100px] mt-12 overflow-hidden mb-6">THEME SONG</div>
      <div className="flex flex-row text-center gap-4 place-content-center">
        <a href="https://www.instagram.com/smukiee/" target="blank" className='text-red-900 font-bold text-2xl bg-white py-2 px-4 shrink animate-pulse hover:bg-gray-400'>SPOTIFY <FaSpotify color="red" size={32} className="inline"/></a>
        <a href="https://www.instagram.com/smukiee/" target="blank" className='text-red-900 font-bold text-2xl bg-white py-2 px-4 shrink animate-pulse hover:bg-gray-400'>YOUTUBE <AiOutlineYoutube color="red" size={32} className="inline"/></a>
      </div>
    </div>
  )
}
