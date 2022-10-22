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
      data-aos-offset="700"
      data-aos-duration="3000"
      data-aos-delay="0">
      <div className="text-center font-Broadway text-white text-[50px] md:text-8xl lg:text-9xl overflow-hidden lg:mb-[40px] mt-48 md:mt-52 lg:mt-56 xl:mt-60 mx-8 md:mt-12 lg:mt-16 xl:mt-20">SPONSORS</div>
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
