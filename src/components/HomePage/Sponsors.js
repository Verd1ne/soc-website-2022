import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Sponsors() {
  return (
    <div>
      <div className="text-center font-Broadway text-white text-[50px] md:text-8xl lg:text-9xl overflow-hidden mt-20 lg:mb-[40px]">SPONSORS</div>
      {/* laptop view */}
      <div className="hidden lg:flex"> 
        <StaticImage 
          src= "../../images/sponsor_desktop.webp"
          alt= "logo"
          placeholder="blurred"
          layout="constrained"
        />
      </div>
      {/* mobile view */}
      <div className="flex lg:hidden">
        <StaticImage 
          src= "../../images/sponsor_mobile.webp"
          alt= "logo"
          placeholder="blurred"
          layout="constrained"
        />
      </div>
    </div>
  )
}
