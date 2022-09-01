import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

export default function Infolomba(props) {
  return (
    <div className='relative h-full overflow-hidden mx-12 lg:mx-16 xl:mx-20 '>
      <div className="relative text-center">
        <StaticImage 
          src="../../images/NamaLomba.png"
          alt="Frame"
          placeholder="blurred"
          layout="constrained"
        />
        <div className="namaLomba w-full text-3xl xl:text-4xl text-center font-Broadway z-[5] absolute overflow-hidden">{props.namaLomba}</div>
      </div>
      
      <div className="relative">
        <StaticImage 
          src="../../images/BorderJamTayang.PNG"
          alt="Frame"
          placeholder="blurred"
          layout="constrained"
        />
        <div className="infoLomba absolute text-[#f5f1be] text-2xl font-semibold space-y-3 xl:space-y-5 font-ProductSans text-left ml-20 overflow-hidden ">
          <div className="">Jam Tayang :</div>
          <div className="">Penanggung Jawab :</div>
          <div className=""><u>Download PDF</u></div>
        </div>
      </div>
    </div>
  )
}
