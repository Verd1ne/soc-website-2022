import React, {useEffect} from "react";
import { StaticImage } from 'gatsby-plugin-image'
import 'aos/dist/aos.css'; 


export default function Sponsors() {
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
      data-aos-duration="3000"
      data-aos-delay="0"
      className='mb-4 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24'>
      <div className="text-center font-Broadway text-white text-5xl sm:text-6xl md:text-[80px] lg:text-[100px] overflow-hidden lg:mb-[40px] mt-36 md:mt-44 lg:mt-52 xl:mt-60 mx-auto">SPONSORS</div>
      {/* laptop view */}
      <div className="hidden lg:flex lg:mb-14 lg:mx-10 xl:mx-16"> 
        <StaticImage 
          src= "../../images/sponsor_desktop.webp"
          alt= "sponsor"
          layout="constrained"
        />
      </div>
      {/* mobile view */}
      <div className="flex lg:hidden mb-2 mx-5 md:mx-10">
        <StaticImage 
          src= "../../images/sponsor_mobile.webp"
          alt= "sponsor"
          layout="constrained"
        />
      </div>
    </div>
  )
}
