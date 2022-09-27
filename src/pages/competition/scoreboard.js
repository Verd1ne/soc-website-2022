import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout/Layout"
import Livescoreboard from '../../components/ScoreboardPage/Livescoreboard'
import Infolomba from '../../components/ScoreboardPage/Infolomba'
import Timeline from "../../components/ScoreboardPage/Timeline"
import Hadiah from "../../components/ScoreboardPage/Hadiah"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Scoreboard = () => {
  return (
    <Layout>
      <div className='grid grid-cols-1 xl:grid-cols-12 relative mt-32 mb-16 md:mb-20 lg:mb-24 mx-0 xl:mx-16 2xl:mx-64'>
        <div data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto mt-12 col-span-5">
          <Hadiah/>
        </div>
        <div data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mt-12 lg:mt-16 xl:mt-20 mx-auto col-span-7">
          <Infolomba namaLomba="NAMA LOMBA 123"/>
        </div>
        <div data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto mt-12 col-span-6">
          <Timeline/>
        </div>
        <div data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="mx-auto mt-12 col-span-6">
          <Hadiah/>
        </div>
      </div>
    </Layout>
  )
}

export default Scoreboard