import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

export default function Infolomba(props) {
  let contact = props.contact.split("|")
  return (
    <div className='relative h-full overflow-hidden mx-4 sm:mx-12 md:mx-40 lg:mx-64 xl:mx-20 '>
      <div className="relative text-center">
        <StaticImage 
          src="../../images/NamaLomba.webp"
          alt="Frame"
          placeholder="  "
          layout="constrained"
        />
        <div className="namaLomba w-full text-3xl xl:text-4xl text-center font-Broadway z-[5] absolute overflow-hidden">{props.namaLomba}</div>
      </div>
      
      <div className="relative">
        <StaticImage 
          src="../../images/BorderJamTayang.webp"
          alt="Frame"
          placeholder="  "
          layout="constrained"
        />
        <div className="infoLomba absolute text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-left ml-12 lg:ml-12 xl:ml-13 md:-mt-1">
          <div className="">Penanggung Jawab :</div>
          <ul className="text md:text-base lg:text-lg font-normal ml-3 md:mb-2 list-disc">
            <li>{contact[0]}</li>
            <li className={`${!contact[1] ? "hidden" : ""}`}>{contact[1]}</li>
          </ul>
          <a href={"../../PDFrules/" + props.namaLomba + ".pdf"} download ><u>Download PDF Rules</u></a>
        </div>
      </div>
      <div>
        <a href="https://socregis.smakone.org/" target='_blank' rel="noreferrer">
          <StaticImage 
            src="../../images/RegistrasiButton.webp"
            alt="Registrasi Button"
            placeholder="  "
            layout="constrained"
          />
        </a>
        
      </div>
    </div>
  )
}
