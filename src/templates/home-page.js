import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Team from '../components/Team'
import Clients from '../components/Clients'
import Work from '../components/Work'
import Contact from '../components/Contact'

const HomePageTemplate = ({ data: { prismicHomepage } }) => {
  const { data } = prismicHomepage
  // console.log(prismicHomepage)
  return (
    <React.Fragment>
      <Hero classes={`hero bg__gradient--blue-green`} />
      <Services />
      <About />
      <Team />
      <Clients />
      <Work />
      <Contact />
      <div className="container">
        <div className="row">
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
