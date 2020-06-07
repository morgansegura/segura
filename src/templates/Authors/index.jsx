import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import Layout from "../../components/Layout";

/* Material UI */
import Grid from '@material-ui/core/Grid'
import * as S from '../../styles/author/styled'

export default ({
  data: {
    allAuthorYaml: { edges: authorNodes },
  }
}) => (
  <Layout>
    <ul>
      {authorNodes.map(({ node: author }, index) => (
        <li key={`author-${_.kebabCase(author.title)}`}>
          <Link to={`/author/${_.kebabCase(author.title)}`}>{author.title}
              <S.PostCardImage
                fluid={author.avatar.childImageSharp.fluid}
                alt=""
              />
          </Link>   
        </li>
      ))}
    </ul>
    
  </Layout>
);

export const pageQuery = graphql`
  query AuthorsQuery {
    site {
      siteMetadata {
        title
        author
      }
    }

    allAuthorYaml {
      edges {
        node {
          # id
          bio
          bioExcerpt
          title
          jobTitle
          avatar {
            childImageSharp {
              fluid(maxWidth: 680) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }    
    }    
  }
`
// export default () => (
//   <div>Authors</div>
// )