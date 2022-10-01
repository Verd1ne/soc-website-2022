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
          }
        }
      }
    }

  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/competition/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/competitionTemplate.js'),
      context: { slug: node.frontmatter.slug }
    })
  })  

}