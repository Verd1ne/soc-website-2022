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
    <div className="mx-5 md:mx-0 lg:mx-10 xl:mx-20 2xl:mx-32">
      <div className="inline-block mt-32 md:mt-36 lg:mt-40 xl:mt-44">
            <Link className="text-2xl text-white cursor-pointer inline underline" to="/competition/">
              &lt; Back
            </Link>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 mb-16 md:mb-20 lg:mb-24'>
        <div data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="row-span-1">
            <Infolomba namaLomba={ props.title } contact={ props.contact }/>
        </div>
        <div data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="row-span-1">
          <Timeline tm={ props.tm }/>
        </div>
        {/*  <div data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto mt-12 col-span-1 xl:col-span-6">
          <Hadiah/>
        </div> */ }
      </div>
    </div>
  )
}