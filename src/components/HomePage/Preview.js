import React, {useEffect} from "react";
import 'aos/dist/aos.css'; 


export default function Preview() {
  let AOS;

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <div 
      data-aos="zoom-in-down"
      data-aos-offset="500"
      data-aos-duration="3000"
      data-aos-delay="0">
      <div 
      className="text-center text-white font-Broadway text-5xl sm:text-6xl md:text-[80px] lg:text-[100px] mt-36 md:mt-44 lg:mt-52 xl:mt-60 leading-none overflow-hidden">PREVIEW</div>
      <div className="text-[#f5f1be] font-Palatino text-[30px] md:text-[50px] lg:text-[60px] text-center mb-1 leading-tight">our opening video</div>
      <div className="my-12 w-full">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/a4U9VrC-X2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="mx-auto w-[336px] h-[189px] sm:w-[400px] sm:h-[225px] md:w-[480px] md:h-[270px] lg:w-[560px] lg:h-[315px] xl:w-[640px] xl:h-[360px] 2xl:w-[800px] 2xl:h-[450px]" allowfullscreen></iframe>
        {/* <iframe src="https://www.youtube-nocookie.com/embed/SpiGp5HNH68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className='' allowfullscreen></iframe> */}
      </div>
    </div>
  )
}