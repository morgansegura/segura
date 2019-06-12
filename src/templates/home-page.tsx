import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const HomePageTemplate = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <section className="col-12 col-md-8">
            <h1>{data.title.text}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
            Hello
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default HomePageTemplate;
export const homePageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        shortName
      }
    }
    prismicHomepage {
      id
      data {
        title {
          text
        }
        content {
          html
        }
        countdown
        countdown_date
        splash_page
      }
    }
  }
`;
