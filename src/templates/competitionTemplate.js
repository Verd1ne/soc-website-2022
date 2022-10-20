import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Template from "../components/ScoreboardPage/template"

export default function Scoreboard({ data, }) {
  // const { html } = data.markdownRemark
  const { date, slug, title, tm } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Template title={ title } slug={ slug } date={ date } tm={ tm }/>
    </Layout>
  )
}


export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date
        slug
        title
        tm
      }
    }
  }
`