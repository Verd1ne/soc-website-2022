import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

export default function Infolomba(props) {
  let contact = props.contact.split("|")
  // mx-5 sm:mx-10 md:mx-40 lg:mx-64 xl:mx-20
  return (
    <div className='w-full h-fit overflow-hidden '>
      <div className="font-Broadway text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl text-[#f5f1be] overflow-hidden text-center">{props.namaLomba}</div>
      <div>
        <div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-left border-4 border-[gold] mt-10 md:mt-14 p-3 md:p-10">
          <div className="">Penanggung Jawab :</div>
          <ul className="text-sm md:text-lg lg:text-xl xl:text-xl font-normal ml-3 mb-2 lg:mb-5 list-disc">
            <li>{contact[0]}</li>
            <li className={`${!contact[1] ? "hidden" : ""}`}>{contact[1]}</li>
          </ul>
          <a href={"../../PDFrules/" + props.namaLomba + ".pdf"} download><u>Download PDF Rules</u></a>
        </div>
        {/* <div>
          <a href="https://socregis.smakone.org/" target='_blank' rel="noreferrer">
            <StaticImage 
              src="../../images/RegistrasiButton.webp"
              alt="Registrasi Button"
              placeholder=""
              layout="constrained"
              className="-mt-8 lg:-mt-12 xl:-mt-16 2xl:-mt-20"
            />
          </a>   
        </div> */}
      </div>
    </div>
  )
}
