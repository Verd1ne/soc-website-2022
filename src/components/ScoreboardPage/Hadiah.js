import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Hadiah() {
  return (
    <div>
      <div className='font-Broadway text-6xl text-[#f5f1be] my-6 overflow-hidden text-center'>HADIAH</div>
      <StaticImage 
        src= "../../images/Hadiah.PNG"
        alt= "Hadiah"
        placeholder=""
        layout="constrained"
        width= {550}
      />
    </div>
  )
}
