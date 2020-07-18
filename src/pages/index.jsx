import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'

// Material UI
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
// import WrapGameElement from '../components/Games/Reacteroids'

// Styled components
import * as S from '../styles/home/styled'

// Images
import quoteImage from '../../static/assets/images/quote.jpg'

// Icons 
import { FcMultipleDevices, FcCommandLine, FcComboChart, FcStatistics, FcWorkflow, FcMindMap, FcTimeline } from "react-icons/fc";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title="Blog"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />

      {/* <WrapGameElement /> */}

      <S.Section>
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
          <S.ButtonBlock>
            <S.Button>Download CV</S.Button>
          </S.ButtonBlock>
        </S.BioContent>
      </S.Section>
      <S.Section className="section--inner">
        <S.TitleBlock>
          <h3>What I Do</h3>
        </S.TitleBlock>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <S.ListColumn class="list-column--with-icon">
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
            <S.ListColumn class="list-column--with-icon">
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
            <S.ListColumn class="list-column--with-icon">
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
            <S.ListColumn class="list-column--with-icon">
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
          <Grid item xs={12} sm={6}>
            <S.ListColumn class="list-column--with-icon">
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
            <S.ListColumn class="list-column--with-icon">
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


      </S.Section>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            tags
            description
            # thumbnail
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
`
export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
