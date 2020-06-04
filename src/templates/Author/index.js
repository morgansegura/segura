import React from 'react'

// export default ({
//   data: {
//     // authorYaml: { id, bio, twitter },
//     allMdx: { edges: postNodes },
//   },
// }) => (
//   <div>
//     <div>
//       {console.log(postNodes)}
//       <h2>{postNodes[0].node.frontmatter.author}</h2>
//       {/*      <a href={`https://twitter.com/${twitter}/`} target="_blank">
//         {`@${twitter}`}
//       </a> */}
//       <p>{/*<em>{bio}</em>*/}</p>
//     </div>
//     <hr />
//     <p>{`Posted by ${postNodes[0].node.frontmatter.author}: `}</p>
//     {postNodes.map(({ node: post }, idx) => (
//       <div key={post.id}>
//         <a href={post.fields.slug}>{post.frontmatter.title}</a>
//       </div>
//     ))}
//   </div>
// )

// export const pageQuery = graphql`
//   query PostsByAuthorId($authorId: String!) {
//     allMdx(filter: { fields: { authorId: { eq: $authorId } } }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             author
//           }
//           fields {
//             authorId
//             slug
//           }
//         }
//       }
//     }
//     # authorYaml(id: { eq: $authorId }) {
//     #   id
//     #   bio
//     #   twitter
//     # }
//   }
// `

export default () => (
  <div>Individual Author</div>
)