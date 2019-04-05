import React from 'react'
import { graphql } from 'gatsby'

const Page = ({ data: { prismicPage } }) => {
  const { data } = prismicPage
  return (
    <section
      id="page"
      className={`container content__wrapper content__wrapper__with-sidebar page-${
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

export default Page

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
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
