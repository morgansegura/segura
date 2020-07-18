import React from 'react'
import { graphql } from 'gatsby'


import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

export default ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Resume" />
      <div class="section-inner custom-page-content">
        <div class="section-title-block second-style">
          <h2 class="section-title">Resume</h2>
          <h5 class="section-description">7 Years of Experience</h5>
        </div>

        <div class="section-content">
          <div class="row">
            <div class="col-xs-12 col-sm-8">
              <div class="col-inner bs-30">
                <div class="block-title">
                  <h3>Education</h3>
                </div>

                <div class="timeline timeline-second-style bs-30 clearfix">
                  <div class="timeline-item clearfix">
                    <div class="left-part">
                      <h5 class="item-period">2008</h5>
                      <span class="item-company">University of Studies</span>
                    </div>
                    <div class="divider"></div>
                    <div class="right-part">
                      <h4 class="item-title">Fronted Development</h4>
                      <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                    </div>
                  </div>

                  <div class="timeline-item clearfix">
                    <div class="left-part">
                      <h5 class="item-period">2007</h5>
                      <span class="item-company">University of Studies</span>
                    </div>
                    <div class="divider"></div>
                    <div class="right-part">
                      <h4 class="item-title">Graphic Design</h4>
                      <p>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                    </div>
                  </div>
                </div>

                <div class="block-title">
                  <h3>Experience<span></span></h3>
                </div>


                <div class="timeline timeline-second-style clearfix">
                  <div class="timeline-item clearfix">
                    <div class="left-part">
                      <h5 class="item-period">2016 - Current</h5>
                      <span class="item-company">Google</span>
                    </div>
                    <div class="divider"></div>
                    <div class="right-part">
                      <h4 class="item-title">Lead Ui/Ux Designer</h4>
                      <p>Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.</p>
                    </div>
                  </div>

                  <div class="timeline-item clearfix">
                    <div class="left-part">
                      <h5 class="item-period">2013 - 2016</h5>
                      <span class="item-company">Adobe</span>
                    </div>
                    <div class="divider"></div>
                    <div class="right-part">
                      <h4 class="item-title">Senior Ui/Ux Designer</h4>
                      <p>Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.</p>
                    </div>
                  </div>

                  <div class="timeline-item clearfix">
                    <div class="left-part">
                      <h5 class="item-period">2011 - 2013</h5>
                      <span class="item-company">Google</span>
                    </div>
                    <div class="divider"></div>
                    <div class="right-part">
                      <h4 class="item-title">Junior Ui/Ux Designer</h4>
                      <p>Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-4">
              <div class="col-inner">

                <div class="block-title">
                  <h3>Design Skills<span></span></h3>
                </div>

                <div class="skills-info skills-second-style">

                  <div class="clearfix">
                    <h4>Web Design</h4>
                    <div class="skill-value">95%</div>
                  </div>
                  <div class="skill-container">
                    <div class="skill-percentage skill-1"></div>
                  </div>

                  <div class="clearfix">
                    <h4>Print Design</h4>
                    <div class="skill-value">65%</div>
                  </div>
                  <div class="skill-container">
                    <div class="skill-percentage skill-2"></div>
                  </div>

                  <div class="clearfix">
                    <h4>Logo Design</h4>
                    <div class="skill-value">80%</div>
                  </div>
                  <div class="skill-container">
                    <div class="skill-percentage skill-3"></div>
                  </div>

                  <div class="clearfix">
                    <h4>Graphic Design</h4>
                    <div class="skill-value">90%</div>
                  </div>
                  <div class="skill-container">
                    <div class="skill-percentage skill-4"></div>
                  </div>

                </div>

                <div class="block-title ts-10">
                  <h3>Coding Skills<span></span></h3>
                </div>


                <div class="skills-info skills-second-style">

                  <div class="clearfix">
                    <h4>JavaScript</h4>
                    <div class="skill-value">85%</div>
                  </div>
                  <div class="skill-container">
                    <div class="skill-percentage skill-5"></div>
                  </div>

                  <div class="clearfix">
                    <h4>PHP</h4>
                    <div class="skill-value">70%</div>
                  </div>
                  <div class="skill-container">
                    <div class="skill-percentage skill-6"></div>
                  </div>

                  <div class="clearfix">
                    <h4>Python</h4>
                    <div class="skill-value">60%</div>
                  </div>
                  <div class="skill-container">
                    <div class="skill-percentage skill-7"></div>
                  </div>

                  <div class="clearfix">
                    <h4>Perl</h4>
                    <div class="skill-value">75%</div>
                  </div>
                  <div class="skill-container">
                    <div class="skill-percentage skill-8"></div>
                  </div>

                  <div class="clearfix">
                    <h4>HTML / CSS</h4>
                    <div class="skill-value">100%</div>
                  </div>
                  <div class="skill-container">
                    <div class="skill-percentage skill-9"></div>
                  </div>



                  <div class="clearfix">
                    <h4>Smarty / Twig</h4>
                    <div class="skill-value">80%</div>
                  </div>
                  <div class="skill-container">
                    <div class="skill-percentage skill-10"></div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12">
              <div class="col-inner ts-30">
                <a href="#" target="_blank" class="btn btn-primary">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ResumeQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`