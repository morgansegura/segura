import React from "react";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

/* Material UI */
import Grid from '@material-ui/core/Grid'
import * as S from '../styles/author/styled'

export default ({
  data: {
    allAuthorYaml: { edges: authorNodes },
  }
}) => (
    <Layout>
      <ul>
        {authorNodes.map(({ node: author }, index) => (
          <li key={`author-${author.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <Link to={`/author/${author.title.replace(/\s+/g, '-').toLowerCase()}`}>{author.title}
              <Img
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