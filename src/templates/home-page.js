import React from 'react'

const HomePageTemplate = () => {
  // const { data } = prismicHomepage
  // console.log(prismicHomepage)
  return (
    <React.Fragment>
      <div className="container content__wrapper content__wrapper__with-sidebar">
        <div className="row">
          <aside className="col-12 col-md-4" />
          <section className="col-12 col-md-8" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomePageTemplate
