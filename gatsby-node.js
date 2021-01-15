const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    console.log(node.internal.type)
    if (node.internal.type === `MarkdownRemark`) {
        console.log(`found markdown node of type ${node.internal.type}`)
        const fileNode = getNode(node.parent)
        console.log(`\n`, fileNode.relativePath)
        console.log(createFilePath({ node, getNode }))
        const slug = createFilePath({ node, getNode })
        const prefix = fileNode.sourceInstanceName ? fileNode.sourceInstanceName : "content"
        createNodeField({
            node,
            name: `slug`,
            value: `/${prefix}${slug}`,
        })
    }
    if (node.internal.type === `Mdx`) {
        console.log(`found mdx node of type ${node.internal.type}`)
        const fileNode = getNode(node.parent)
        console.log(`\n`, fileNode.relativePath)
        console.log(createFilePath({ node, getNode }))
        const slug = createFilePath({ node, getNode })
        const prefix = fileNode.sourceInstanceName ? fileNode.sourceInstanceName : "content"
        createNodeField({
            node,
            name: `slug`,
            value: `/${prefix}${slug}`,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const markdownResult = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    console.log(JSON.stringify(markdownResult, null, 4))
    markdownResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/test-resource-layout.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })

  }

