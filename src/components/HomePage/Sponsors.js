import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Sponsors() {
  return (
    <div>
      <div className="text-center font-Broadway text-white text-[50px] md:text-8xl lg:text-9xl overflow-hidden mt-20 lg:mb-[40px]">SPONSORS</div>
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
