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
                placeholder=""
                layout="constrained"
                height= {80}
                className="md:-mt-4 lg:-mt-2 lg:-ml-3"
              />
              <div className="text-[#f5f1be] font-Palatino text-left md:text-lg lg:text-xl md:-mt-3">
                Smakonecup Atraxia and its logo marks are the property of Smakonecup, a part of SMAK 1 PENABUR Jakarta
              </div>
            </div>
            <div className=''>
              <div className="">
                <h1 className="text-white text-right align-middle md:text-[40px] xl:text-[50px] font-ProductSans">Contact Us</h1>
              </div>
              <div className='flex flex-row-reverse gap-x-1 mt-2'>
                <a href="https://www.instagram.com/smukiee/" target="_blank" rel="noreferrer">
                  <AiOutlineInstagram color="#f5f1be" size={45} className="hover:-translate-y-1 duration-300"/>
                </a>
                <a href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ" target="_blank" rel="noreferrer">
                  <AiOutlineYoutube color="#f5f1be" size={45} className="hover:-translate-y-1 duration-300"/>
                </a>
                <a href="https://www.tiktok.com/@smakonecup" target="_blank" rel="noreferrer">
                  <SiTiktok color="#f5f1be" size={35} className="hover:-translate-y-1 duration-300"/>
                </a>
              </div>
            </div>
          </div>
          <div className="text-[#f5f1be] font-Palatino text-center md:text-lg lg:text-xl mt-5 md:mt-10">
            Jl. Tanjung Duren Raya No.4, RT.12/RW.2, Tj. Duren Utara, <br className="flex xl:hidden"/>Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470
          </div>
          <div className='font-Palatino text-[#f5f1be] text-center text-sm md:text-base '>
            Copyright<sup>&copy;</sup> 2022 Smakonecup Atraxia All Rights Reserved
          </div>
      </div>
      {/* mobile view  */}
      <div className="visible md:hidden px-10 pb-2">
        <div className="text-center">
          <StaticImage 
            src= "../../images/SmakonecupLogo.png"
            alt= "logo"
            placeholder=""
            // layout="fixed"
            height= {70}
            className=""
          />
        </div>
        <div className="text-[#f5f1be] font-Palatino text-center text-xs -mt-3 mb-2">
          Smakonecup Atraxia and its logo marks are the property of Smakonecup, a part of SMAK 1 PENABUR Jakarta
        </div>
        <div className="mb-1 text-center">
          <h1 className="text-white text-2xl font-semibold font-ProductSans">Contact Us</h1>
        </div>
        <div className='flex gap-x-1.5 pb-3 justify-center'>
          <a href="https://www.instagram.com/smukiee/" target="_blank" rel="noreferrer">
            <AiOutlineInstagram color="#f5f1be" size={35} className="hover:-translate-y-1 duration-300"/>
          </a>
          <a href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ" target="_blank" rel="noreferrer">
            <AiOutlineYoutube color="#f5f1be" size={35} className="hover:-translate-y-1 duration-300"/>
          </a>
          <a href="https://www.tiktok.com/@smakonecup" target="_blank" rel="noreferrer">
            <SiTiktok color="#f5f1be" size={28} className="hover:-translate-y-1 duration-300"/>
          </a>
        </div>
        <div className='font-Palatino text-[#f5f1be] text-center text-xs '>
          Copyright<sup>&copy;</sup> 2022 Smakonecup Atraxia<br/>All Rights Reserved
        </div>
    </div>
  </div>
  )
}
