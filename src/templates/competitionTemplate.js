import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Livescoreboard from '../components/ScoreboardPage/Livescoreboard'
import Infolomba from '../components/ScoreboardPage/Infolomba'
import Timeline from "../components/ScoreboardPage/Timeline"
import Hadiah from "../components/ScoreboardPage/Hadiah"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function Scoreboard({ data, }) {
  const { html } = data.markdownRemark
  const { date, slug, title } = data.markdownRemark.frontmatter

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
            className="mx-auto mt-12 lg:mt-16 xl:mt-20 col-span-7">
          <Infolomba namaLomba={title}/>
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


export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
