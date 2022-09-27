import React from 'react'

export default function Preview() {
  return (
    <div>
        <div className="text-center text-white font-Broadway text-[50px] md:text-[90px] lg:text-[110px] mt-5 md:mt-12 leading-none overflow-hidden">PREVIEW</div>
        <div className="text-[#f5f1be] font-Palatino text-[30px] md:text-[50px] lg:text-[60px] text-center mb-1 leading-tight">our opening video</div>
        <div className="h-[140px] md:h-[300px] lg:h-[500px] bg-contain bg-[url('../images/BorderVideo.png')] bg-no-repeat bg-center mb-5"/>
    </div>
  )
}