import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  once: true,
  mirror: false, 
});

export default function Preview() {
  return (
    <div 
      data-aos="fade-in"
      data-aos-offset="1000"
      data-aos-duration="3000"
      className='mt-48 md:mt-52 lg:mt-56 xl:mt-60'>
      <div 

      className="text-center text-white font-Broadway text-[50px] md:text-[90px] lg:text-[110px] mt-5 md:mt-12 leading-none overflow-hidden">PREVIEW</div>
      <div className="text-[#f5f1be] font-Palatino text-[30px] md:text-[50px] lg:text-[60px] text-center mb-1 leading-tight">our opening video</div>
      <div className="my-12 w-full">
        <iframe src="https://www.youtube-nocookie.com/embed/SpiGp5HNH68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className='mx-auto w-[336px] h-[189px] sm:w-[400px] sm:h-[225px] md:w-[480px] md:h-[270px] lg:w-[560px] lg:h-[315px] xl:w-[640px] xl:h-[360px] 2xl:w-[800px] 2xl:h-[450px]' allowfullscreen></iframe>
      </div>
    </div>
  )
}