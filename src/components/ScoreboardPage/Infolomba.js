import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

export default function Infolomba(props) {
  let contact = props.contact.split("|")
  return (
    <div className='relative h-full overflow-hidden mx-0 sm:mx-12 md:mx-40 lg:mx-64 xl:mx-20'>
      <div className="relative text-center">
        <div className="font-Broadway text-6xl text-[#f5f1be] overflow-hidden">{props.namaLomba}</div>
      </div>
      <div>
        <div className="infoLomba text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-left lg:ml-7 xl:ml-13 md:mt-32 border-4 border-[gold] p-3 md:p-5 mt-32 md:mt-40 mx-11 md:mx-0">
          <div className="">Penanggung Jawab :</div>
          <ul className="text md:text-base lg:text-lg font-normal ml-3 mb-2 lg:mb-5 list-disc">
            <li>{contact[0]}</li>
            <li className={`${!contact[1] ? "hidden" : ""}`}>{contact[1]}</li>
          </ul>
          <a href={"../../PDFrules/" + props.namaLomba + ".pdf"} download><u>Download PDF Rules</u></a>
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
    </div>
  )
}
