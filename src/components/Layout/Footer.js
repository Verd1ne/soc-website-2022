import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AiOutlineYoutube } from "@react-icons/all-files/ai/AiOutlineYoutube";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";


export default function Footer() {
  return (
    <div className='bg-black bottom-0 w-full max-h-auto'>
      {/* laptop view */}
      <div className="hidden md:block pt-5 pb-2 px-8 "> 
          <div className='grid grid-cols-2'>
            <div className=''>
              <StaticImage 
                src= "../../images/SmakonecupLogo.png"
                alt= "logo"
                placeholder="blurred"
                // layout="fixed"
                // height= {80}
                className="h-[40px] md:h-[100px] md:w-2/3 lg:w-2/3 xl:w-2/5 md:-mt-7 lg:-mt-5 lg:-ml-3"
              />
              <div className="text-[#f5f1be] font-Palatino text-left md:text-lg lg:text-xl md:-mt-5">
                Smakonecup Atraxia, and its logo marks are the property of Smakonecup, a part of SMAK 1 PENABUR Jakarta
              </div>
            </div>
            <div className=''>
              <div className="">
                <h1 className="text-white text-right align-middle md:text-[40px] xl:text-[50px] font-Palatino">Contact Us</h1>
              </div>
              <div className='flex flex-row-reverse gap-x-1'>
                <a href="https://www.instagram.com/smukiee/" target="blank">
                  <AiOutlineInstagram color="#f5f1be" size={45}/>
                </a>
                <a href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ" target="blank">
                  <AiOutlineYoutube color="#f5f1be" size={45}/>
                </a>
                <a href="https://www.tiktok.com/@smakonecup " target="blank">
                  <SiTiktok color="#f5f1be" size={38}/>
                </a>
              </div>
            </div>
          </div>
          <div className='font-Palatino text-[#f5f1be] text-center text-sm md:text-base mt-5 md:mt-10'>
            Copyright<sup>&copy;</sup> 2022 Smakonecup Atraxia All Rights Reserved
          </div>
      </div>
      {/* mobile view  */}
      <div className="visible md:hidden px-10 pb-2">
        <div className="text-center">
          <StaticImage 
            src= "../../images/SmakonecupLogo.png"
            alt= "logo"
            placeholder="blurred"
            // layout="fixed"
            height= {70}
            className=""
          />
        </div>
        <div className="text-[#f5f1be] font-Palatino text-center text-xs -mt-4 mb-2">
          Smakonecup Atraxia, and its logo marks are the property of Smakonecup, a part of SMAK 1 PENABUR Jakarta
        </div>
        <div className="mb-1 text-center">
          <h1 className="text-white text-2xl font-semibold font-Palatino">Contact Us</h1>
        </div>
        <div className='flex gap-x-1.5 pb-3 justify-center'>
          <a href="https://www.instagram.com/smukiee/" target="blank">
            <AiOutlineInstagram color="#f5f1be" size={35}/>
          </a>
          <a href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ" target="blank">
            <AiOutlineYoutube color="#f5f1be" size={35}/>
          </a>
          <a href="https://www.tiktok.com/@smakonecup " target="blank">
            <SiTiktok color="#f5f1be" size={28}/>
          </a>
        </div>
        <div className='font-Palatino text-[#f5f1be] text-center text-xs'>
          Copyright<sup>&copy;</sup> 2022 Smakonecup Atraxia<br/>All Rights Reserved
        </div>
    </div>
  </div>
  )
}
