import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { ButtonOutline } from '../components/Button'

// Material UI
import Grid from '@material-ui/core/Grid';

// import WrapGameElement from '../components/Games/Reacteroids'

// Styled components
import { Section, TitleBlock } from '../styles/Layout/styled'
import * as S from '../styles/home/styled'
import { ButtonBlock } from '../components/Button/styled'

// Images
import quoteImage from '../../static/assets/images/quote.jpg'

// Icons 
import { FcMultipleDevices, FcCommandLine, FcComboChart, FcStatistics, FcWorkflow, FcMindMap } from "react-icons/fc";
import { FaLaravel, FaVuejs, FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import { MdStyle } from "react-icons/md";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title="Blog"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />

      {/* <WrapGameElement /> */}

      <Section>
        <S.BioImageContainer>
          <S.BioImage
            style={{ backgroundImage: `url(${quoteImage})` }}
            alt=""
          />
        </S.BioImageContainer>

        <S.BioContent>
          <span>Web Developer</span>
          <h2>Morgan Segura</h2>
          <p>
            Hook leggings snapple dj jazzy jeff david duchovny end of the road
            gatorade, cornrows pulp fiction alta vista skate tees roseanne barr
            wesley snipes. Eminem bandanas fanny packs hot pink boy bands when
            you’re lost out there and you’re all alone.
          </p>
          <p>
            Flip flops wearing your cap backwards encarta I've fallen and I
            can't get up wayne gretzky tamagotchi. Nintendo 64 sup hip hop playa
            puff daddy, courtney love end of the road warheads push pencils.
          </p>
          <ButtonBlock>
            <ButtonOutline>Download CV</ButtonOutline>
          </ButtonBlock>
        </S.BioContent>
      </Section>

      <Section className="section--inner">
        <TitleBlock>
          <h3>What I Do</h3>
        </TitleBlock>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <S.ListColumn className="list-column--with-icon">
              <S.ListItemIcon>
                <FcMultipleDevices />
              </S.ListItemIcon>
              <S.ListColumnBody>
                <h4>UX/UI Theory and Design</h4>
                <p>
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                  tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                  nibh. Ut non sodales odio.
                  </p>
              </S.ListColumnBody>
            </S.ListColumn>
          </Grid>
          <Grid item xs={12} sm={6}>
            <S.ListColumn className="list-column--with-icon">
              <S.ListItemIcon>
                <FcCommandLine />
              </S.ListItemIcon>
              <S.ListColumnBody>
                <h4>Full Stack Development</h4>
                <p>
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                  tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                  nibh. Ut non sodales odio.
                  </p>
              </S.ListColumnBody>
            </S.ListColumn>
          </Grid>

          <Grid item xs={12} sm={6}>
            <S.ListColumn className="list-column--with-icon">
              <S.ListItemIcon>
                <FcComboChart />
              </S.ListItemIcon>
              <S.ListColumnBody>
                <h4>Experience Testing & Analytics</h4>
                <p>
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                  tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                  nibh. Ut non sodales odio.
                  </p>
              </S.ListColumnBody>
            </S.ListColumn>
          </Grid>
          <Grid item xs={12} sm={6}>
            <S.ListColumn className="list-column--with-icon">
              <S.ListItemIcon>
                <FcStatistics />
              </S.ListItemIcon>
              <S.ListColumnBody>
                <h4>SEO & Marketing</h4>
                <p>
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                  tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                  nibh. Ut non sodales odio.
                  </p>
              </S.ListColumnBody>
            </S.ListColumn>
          </Grid>
        </Grid>
      </Section>

      <Section className="section__stack section--inner section--offset-dark">
        <S.StackContainer>
          <S.StackIconContainer>
            <TitleBlock>
              <h3>Preferred Stacks</h3>
            </TitleBlock>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <S.Card className="card--offset">
                  <S.CardBody>
                    <Grid container spacing={3}>
                      <Grid item xs={4} className="t-center">
                        <a href="/">
                          <FaSass className="stack-icons sass" />
                          <p>Sass</p>
                        </a>
                      </Grid>
                      <Grid item xs={4} className="t-center">
                        <a href="/">
                          <FaVuejs className="stack-icons vue" />
                          <p>Vue JS</p>
                        </a>
                      </Grid>
                      <Grid item xs={4} className="t-center">
                        <a href="/">
                          <FaLaravel className="stack-icons laravel" />
                          <p>Laravel</p>
                        </a>
                      </Grid>
                    </Grid>
                  </S.CardBody>
                </S.Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <S.Card className="card--offset">
                  <S.CardBody>
                    <Grid container spacing={3}>
                      <Grid item xs={4} className="t-center">
                        <a href="/">
                          <MdStyle className="stack-icons scomp" />
                          <p>Styled C.</p>
                        </a>
                      </Grid>
                      <Grid item xs={4} className="t-center">
                        <a href="/">
                          <FaReact className="stack-icons react" />
                          <p>React JS</p>
                        </a>
                      </Grid>
                      <Grid item xs={4} className="t-center">
                        <a href="/">
                          <FaNodeJs className="stack-icons node" />
                          <p>Node JS</p>
                        </a>
                      </Grid>
                    </Grid>
                  </S.CardBody>
                </S.Card>
              </Grid>

            </Grid>
          </S.StackIconContainer>
        </S.StackContainer>
      </Section>

      <Section className="section--inner">
        <TitleBlock>
          <h3>Currently Learning</h3>
        </TitleBlock>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <S.ListColumn className="list-column--with-icon">
              <S.ListItemIcon>
                <FcWorkflow />
              </S.ListItemIcon>
              <S.ListColumnBody>
                <h4>Automation/Testing </h4>
                <p>
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                  tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                  nibh. Ut non sodales odio.
                  </p>
              </S.ListColumnBody>
            </S.ListColumn>
          </Grid>
          <Grid item xs={12} sm={6}>
            <S.ListColumn className="list-column--with-icon">
              <S.ListItemIcon>
                <FcMindMap />
              </S.ListItemIcon>
              <S.ListColumnBody>
                <h4>
                  Machine Learning + Data Science
                    </h4>
                <p>
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                  tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                  nibh. Ut non sodales odio.
                  </p>
              </S.ListColumnBody>
            </S.ListColumn>
          </Grid>

        </Grid>
      </Section>


      <Section className="section--inner">
        <TitleBlock>
          <h3>Testimonials</h3>
        </TitleBlock>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <S.TestimonialItem>

              <S.TestimonialContent>
                <S.TestimonialText>
                  <p>Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.</p>
                </S.TestimonialText>
              </S.TestimonialContent>

              <S.TestimonialCredits>
                <S.TestimonialPhoto>
                  <img src="https://uifaces.co/our-content/donated/s9W6Vk2d.jpg" alt="Jose Jimenez" />
                </S.TestimonialPhoto>
                <S.TestimonialAuthorInfo>
                  <S.TestimonialAuthor>Jose Jimenez</S.TestimonialAuthor>
                  <S.TestimonialFirm>Locost Accessories</S.TestimonialFirm>
                </S.TestimonialAuthorInfo>
              </S.TestimonialCredits>
            </S.TestimonialItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <S.TestimonialItem>

              <S.TestimonialContent>
                <S.TestimonialText>
                  <p>Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.</p>
                </S.TestimonialText>
              </S.TestimonialContent>

              <S.TestimonialCredits>
                <S.TestimonialPhoto>
                  <img src="https://images.generated.photos/qmdENySIv23bkva-PxTHsoxVbZQdB1Wka0ZPcH5shHY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzMDE4MzAuanBn.jpg" alt="Jose Jimenez" />
                </S.TestimonialPhoto>
                <S.TestimonialAuthorInfo>
                  <S.TestimonialAuthor>Mia Johnson</S.TestimonialAuthor>
                  <S.TestimonialFirm>Locost Accessories</S.TestimonialFirm>
                </S.TestimonialAuthorInfo>
              </S.TestimonialCredits>
            </S.TestimonialItem>
          </Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            # author
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            # meta {
            #   # author
            #   # tags
            #   # category
            # }            
            content {
              excerpt
              subheading
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 1360) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
