import React, {useEffect, useState } from "react";
import Infolomba from './Infolomba';
import Timeline from "./Timeline";
// import Hadiah from "./Hadiah";
import { Link } from 'gatsby'
import 'aos/dist/aos.css';
  
export default function Template( props ) {
  let AOS;

  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <div>
      <div className="mx-5 my-5 inline-block">
            <Link className="text-xl lg:text-2xl text-white font-bold cursor-pointer" to="/competiton">
                &lt; Kembali
            </Link>
        </div>
    
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-24 md:mt-32 mb-16 md:mb-20 lg:mb-24 mx-5 md:mx-0 lg:mx-10 xl:mx-20 2xl:mx-32'>
        
        <div data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="lg:mt-16 xl:mt-20 row-span-1">
            <Infolomba namaLomba={ props.title } contact={ props.contact }/>
        </div>
        <div data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mt-12 lg:m-16 row-span-1">
          <Timeline tm={ props.tm }/>
        </div>
        {/*  <div data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto mt-12 col-span-1 xl:col-span-6">
          <Hadiah/>
        </div> */}
      </div>
    </div>
  )
}