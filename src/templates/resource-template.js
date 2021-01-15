// import React from "react"
// import { graphql } from "gatsby"

// export default function Template({ data }) {
//   return (
//     <div className="show-container">
//       <div className="show-post">
//         <h1>{data.markdownRemark.frontmatter.title}</h1>
//         <h2>{data.markdownRemark.frontmatter.date}</h2>
//         <div
//           className="show-content"
//           dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
//         />
//       </div>
//     </div>
//   )
// }

// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { theSlug: { eq: $slug } }) {
//       html
//       fields {
//         theSlug
//       }
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         author
//         mainImage
//         tools
//         title
//       }
//     }
//   }
// `
