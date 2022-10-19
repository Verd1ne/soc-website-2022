import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

export default function Infolomba(props) {
  return (
    <div className='relative h-full overflow-hidden mx-4 sm:mx-12 md:mx-40 lg:mx-64 xl:mx-20 '>
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
        <div className="infoLomba absolute text-[#f5f1be] md:text-xl lg:text-2xl font-semibold space-y-3 xl:space-y-5 font-ProductSans text-left ml-12 lg:ml-16 xl:ml-20 overflow-hidden">
          <div className="">Jam Tayang :</div>
          <div className="">Penanggung Jawab :</div>
          {/* <div className="">Download PDF</div> */}
          <a href={"../../PDFrules/" + props.namaLomba + ".pdf"} download ><u>Download PDF Rules</u></a>
        </div>
      </div>
      <div>
        <a href="https://socregis.smakone.org/" target='_blank'>
          <StaticImage 
            src="../../images/RegistrasiButton.png"
            alt="Registrasi Button"
            placeholder="blurred"
            layout="constrained"
          />
        </a>
        
      </div>
    </div>
  )
}
