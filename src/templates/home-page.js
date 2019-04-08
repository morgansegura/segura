import React from 'react'

const HomePageTemplate = ({ data: { prismicHomepage } }) => {
  const { data } = prismicHomepage
  // console.log(prismicHomepage)
  return (
    <React.Fragment>
      <div className="container content__wrapper content__wrapper__with-sidebar">
        <div className="row">
          <aside className="col-12 col-md-4" />
          <section className="col-12 col-md-8">
            <h1>{data.title.text}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomePageTemplate
