import * as React from "react"
import Infolomba from './Infolomba'
import Timeline from "./Timeline"
import Hadiah from "./Hadiah"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function Template( props ) {
  return (
      <div className='grid grid-cols-1 xl:grid-cols-12 relative mt-32 mb-16 md:mb-20 lg:mb-24 xl:mx-16 2xl:mx-64'>
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
            className="mx-auto mt-12 lg:mt-16 xl:mt-20 col-span-1 xl:col-span-6">
          <Infolomba namaLomba={ props.title } contact={ props.contact }/>
        </div>
        <div data-aos="fade-in"
            data-aos-duration="3000"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto mt-12 col-span-1 xl:col-span-6">
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