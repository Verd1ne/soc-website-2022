import React from 'react'

export default function Preview() {
  return (
    <div>
        <div className="text-center text-white font-Broadway text-[50px] md:text-[90px] lg:text-[110px] mt-5 md:mt-12 leading-none overflow-hidden">PREVIEW</div>
        <div className="text-[#f5f1be] font-Palatino text-[30px] md:text-[50px] lg:text-[60px] text-center mb-1 leading-tight">our opening video</div>
        <div className="my-12 w-full">
          <iframe src="https://www.youtube-nocookie.com/embed/SpiGp5HNH68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='mx-auto w-[400px] h-[225px] md:w-[480px] md:h-[270px] lg:w-[560px] lg:h-[315px] xl:w-[640px] xl:h-[360px] 2xl:w-[800px] 2xl:h-[450px]'></iframe>
        </div>

    </div>
  )
}