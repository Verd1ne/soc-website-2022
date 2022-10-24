const path = require('path')

exports.createPages = async ({ graphql, actions}) => {

  const { data } = await graphql (`
    query Competition{
      allMarkdownRemark {
        nodes {
          frontmatter {
            date
            slug
            title
            tm
            contact
          }
        }
      }
    }

  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/competition/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/competitionTemplate.js'),
      context: { date: node.frontmatter.date, slug: node.frontmatter.slug, title: node.frontmatter.title, tm: node.frontmatter.tm, contact: node.frontmatter.contact }
    })
  })  

}