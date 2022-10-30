import React, {useEffect} from "react";
import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import 'aos/dist/aos.css'; 

export default function Themesong() {
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
      data-aos="fade-in"
      data-aos-offset="500"
      data-aos-duration="1000"
      data-aos-delay="0"
      className="relative z-10 bg-[url('../images/Disc.webp')] bg-no-repeat bg-top bg-contain mx-0 px-0 md:px-12 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] ">
      <div className="text-center text-white font-Broadway text-5xl sm:text-6xl md:text-[80px] lg:text-[100px] overflow-hidden mb-3 mt-36 md:mt-44 lg:mt-52 xl:mt-60">THEME SONG</div>
      <div className="flex flex-row text-center gap-4 md:gap-16 place-content-center overflow-hidden py-3">
        <a href="https://open.spotify.com/track/0T2As24slCykVBhIPBKuPe?si=53fea39e0c1f401d" target="blank" className='text-red-600 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-white pt-0.5 sm:py-2 px-2 sm:px-4 hover:scale-110 duration-300 ease-in-out max-h-24'>
          <div className="inline mr-1 md:mr-3 font-ProductSansBold">SPOTIFY</div>
          <FaSpotify color="red" size={32} className="inline w-[13px] md:w-[30px] lg:w-[35px] -mt-0.5 md:-mt-1.5 h-fit overflow-fit"/>
        </a>
        <a href="https://www.youtube.com/user/SMAK1cup" target="blank" className='text-red-600 font-extrabold  text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-white pt-0.5 sm:py-2 px-2 sm:px-4 hover:scale-110 duration-300 ease-in-out max-h-24'>
          <p className="inline mr-1 md:mr-3 font-ProductSansBold">YOUTUBE</p>
          <AiFillYoutube color="red" size={32} className="inline w-[20px] md:w-[35px] lg:w-[45px] -mt-0.5 md:-mt-1.5 h-fit overflow-fit"/>
        </a>
      </div>
    </div>
  )
}