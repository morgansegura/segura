import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";
import config from "../../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMdx.edges;
    return (
      <Layout>
        <div className="category-container">
          <Helmet
            title={`Posts in category "${category}" | ${config.siteTitle}`}
          />
          <PostCard postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: [fields___slug], order: DESC }
      filter: { frontmatter: { meta:{ category: { eq: $category } } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            # date
          }
          timeToRead
          frontmatter {
            title        
            date(formatString: "MMMM DD, YYYY")        
            meta {
              # author
              category
              tags
            }
            content {
              body
              excerpt
              subheading
              thumbnail {
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
    }
  }
`;