import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import Livescoreboard from '../components/ScoreboardPage/Livescoreboard'
import Infolomba from '../components/ScoreboardPage/Infolomba'
import Timeline from "../components/ScoreboardPage/Timeline"
import Hadiah from "../components/ScoreboardPage/Hadiah"

const Scoreboard = () => {
  return (
    <Layout>
      <div className='grid grid-cols-1 xl:grid-cols-12 relative mt-[64px] mb-[100px] mx-0 xl:mx-16 2xl:mx-64'>
        <div className="mx-auto mt-12 col-span-5">
          <Hadiah/>
        </div>
        <div className="mt-12 lg:mt-16 xl:mt-20 mx-auto col-span-7">
          <Infolomba namaLomba="NAMA LOMBA 123"/>
        </div>
        <div className="mx-auto mt-12 col-span-6">
          <Timeline/>
        </div>
        <div className="mx-auto mt-12 col-span-6">
          <Hadiah/>
        </div>
      </div>
      <div className=""></div>
    </Layout>
  )
}

export default Scoreboard