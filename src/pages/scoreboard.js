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
      <div className='grid grid-cols-2 relative mt-[64px]'>
        <div>
          <Timeline/>
        </div>
        <div>
          <Hadiah/>
        </div>
      </div>
      <div className="mt-[800px]"></div>
    </Layout>
  )
}

export default Scoreboard