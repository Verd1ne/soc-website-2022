import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  once: true,
  mirror: false, 
});

export default function Sponsors() {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="500"
      data-aos-duration="3000"
      data-aos-delay="0">
      <div className="text-center font-Broadway text-white text-5xl sm:text-6xl md:text-[80px] lg:text-[100px] overflow-hidden lg:mb-[40px] mt-36 md:mt-44 lg:mt-52 xl:mt-60 mx-8">SPONSORS</div>
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
