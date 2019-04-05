const path = require('path')

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const posts = await graphql(`
//     {
//       allPrismicPost {
//         edges {
//           node {
//             id
//             uid
//           }
//         }
//       }
//     }
//   `)
//   const pages = await graphql(`
//     {
//       allPrismicPage {
//         edges {
//           node {
//             id
//             uid
//           }
//         }
//       }
//     }
//   `)

//   const pageTemplate = path.resolve('src/templates/page.js')
//   const postTemplate = path.resolve('src/templates/post.js')

//   posts.data.allPrismicPost.edges.forEach(edge => {
//     createPage({
//       path: `/${edge.node.uid}`,
//       component: postTemplate,
//       context: {
//         uid: edge.node.uid,
//       },
//     })
//   })

//   pages.data.allPrismicPage.edges.forEach(edge => {
//     createPage({
//       path: `/${edge.node.uid}`,
//       component: pageTemplate,
//       context: {
//         uid: edge.node.uid,
//       },
//     })
//   })
// }

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /smooth-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
