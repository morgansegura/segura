import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Menu from '../components/Menus/MenuOptions'

const Blog = ({ data: allPrismicPost }) => {
  const { edges: posts } = allPrismicPost.allPrismicPost
  return (
    <Layout>
      <Menu />
      <section id="blog" className="blog ">
        <div className="container">
          <div className="row post__list">
            {!!posts ? (
              posts.map(({ node: post }) => {
                return (
                  <article
                    key={post.id}
                    id={`post-${post.uid}`}
                    className={`post post-${post.uid}`}
                  >
                    <h1>{post.data.title.text}</h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.data.content.html,
                      }}
                    />
                    <Link to={`blog/${post.uid}`}>Read More</Link>
                  </article>
                )
              })
            ) : (
              <h1>Sorry. No posts available.</h1>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const blogQuery = graphql`
  query {
    allPrismicPost(
      sort: { fields: [last_publication_date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          last_publication_date
          uid
          id
          data {
            title {
              text
            }
            content {
              html
            }
          }
        }
      }
    }
  }
`
