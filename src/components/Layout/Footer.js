import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AiOutlineYoutube } from "@react-icons/all-files/ai/AiOutlineYoutube";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";


export default function Footer() {
  return (
    <div className='bg-black pt-6 pb-2 px-12 bottom-0 w-full'>
      <div className='grid grid-cols-2'>
        <div className=''>
          <StaticImage 
            src= "../../images/SmakonecupLogo.png"
            alt= "logo"
            placeholder="blurred"
            layout="fixed"
            height= {80}
          />
          <div className="text-[#f5f1be] font-Palatino text-left">
            Smakonecup Atraxia, and its logo marks are the property of Smakonecup, a part of SMAK 1 PENABUR Jakarta
          </div>
        </div>
        <div className=''>
          <div>
            <h1 className="text-white text-right text-[28px] mb-4 overflow-hidden">Contact Us</h1>
          </div>
          <div className='flex flex-row-reverse gap-x-1 pb-12'>
            <a href="https://www.instagram.com/smukiee/" target="blank">
              <AiOutlineInstagram color="#f5f1be" size={30}/>
            </a>
            <a href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ" target="blank">
              <AiOutlineYoutube color="#f5f1be" size={30}/>
            </a>
            <a href="https://www.tiktok.com/@smakonecup " target="blank">
              <SiTiktok color="#f5f1be" size={30}/>
            </a>
          </div>
        </div>
      </div>
      <div className='font-Palatino text-[#f5f1be] text-center mt-3'>
        Copyright 2022 Smakonecup Atraxia All Rights Reserved
      </div>
    </div>
  )
}
