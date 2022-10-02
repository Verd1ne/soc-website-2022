import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
// import Livescoreboard from '../components/ScoreboardPage/Livescoreboard'
// import Infolomba from '../components/ScoreboardPage/Infolomba'
// import Timeline from "../components/ScoreboardPage/Timeline"
// import Hadiah from "../components/ScoreboardPage/Hadiah"
import Template from "../components/ScoreboardPage/template"
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();

export default function Scoreboard({ data, }) {
  const { html } = data.markdownRemark
  const { date, slug, title } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Template title={ title } slug={ slug }/>
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
