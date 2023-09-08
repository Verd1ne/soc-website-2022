import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Infolomba(props) {
	let contact = props.contact.split("|");
	// mx-5 sm:mx-10 md:mx-40 lg:mx-64 xl:mx-20
	return (
		<div className="mx-8 sm:mx-20 md:mx-36 lg:mx-12">
			<div className="font-Broadway text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-[#f5f1be] overflow-hidden text-center my-10">
				{props.namaLomba}
			</div>
			<div>
				<div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-left border-4 border-[gold] p-4 md:p-10">
					<div className="">Penanggung Jawab :</div>
					<ul className="text-sm md:text-lg lg:text-xl xl:text-xl font-normal ml-3 mb-2 lg:mb-5 list-disc">
						<li>{contact[0]}</li>
						<li className={`${!contact[1] ? "hidden" : ""}`}>{contact[1]}</li>
					</ul>
					<a href="../../PDFrules/" download={props.namaLomba + ".pdf"}>
						<u>Download PDF Rules</u>
					</a>
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
	);
}
