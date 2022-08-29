import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'


export default function Infolomba() {
  return (
    <div className='relative'>
      <StaticImage 
        src="../images/NamaLomba.webp"
        alt="Frame"
        placeholder="blurred"
        width={1920}
      >
      </StaticImage>
    </div>
  )
}
