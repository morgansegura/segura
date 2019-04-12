import React from 'react'
import { graphql } from 'gatsby'

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <section
      id="post"
      className={`container content__wrapper content__wrapper__with-sidebar post-${
        data.uid
      }`}
    >
      <div className="row">
        {/*
        <aside className="col-12 col-md-4">
          <Calendar />
        </aside>
        */}
        <div className="col-12">
          <h1>{data.title.text}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        </div>
      </div>
    </section>
  )
}

export default Post

export const postQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
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
`
