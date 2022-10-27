import React, {useEffect, useState } from "react";
import Infolomba from './Infolomba'
import Timeline from "./Timeline"
import Hadiah from "./Hadiah"
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
      <div className='grid grid-cols-1 xl:grid-cols-2 relative mt-32 mb-16 md:mb-20 lg:mb-24 xl:mx-16 2xl:mx-64'>
        {/* <div data-aos="fade-in"
            data-aos-duration="3000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto mt-12 col-span-1 xl:col-span-5">
          <Hadiah/>
        </div> */}
        <div data-aos="fade-in"
            data-aos-duration="3000"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto mt-12 col-span-1">
          <Scoreboard bidang={ props.slug }/>
        </div>
        <div data-aos="fade-in"
            data-aos-duration="3000"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto mt-12 lg:mt-16 xl:mt-20 col-span-1">
          <Infolomba namaLomba={ props.title } contact={ props.contact }/>
        </div>
        <div data-aos="fade-in"
            data-aos-duration="3000"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto mt-12 col-span-1">
          <Timeline tm={ props.tm }/>
        </div>
        {/* <div data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto mt-12 col-span-1 xl:col-span-6">
          <Hadiah/>
        </div> */}
      </div>
  )
}