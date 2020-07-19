import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image"
import _ from "lodash";
import Layout from "../../components/Layout";
import PostCard from '../../components/PostCard'
/* Material UI */
import Grid from '@material-ui/core/Grid'
import * as S from '../../styles/author/styled'

export default ({ data }) => {
	const { bio, bioExcerpt, title: authorTitle, jobTitle, avatar } = data.authorYaml
	const posts = data.allMdx.edges

	return (
		<Layout>
			<div>
				<h2>{authorTitle}</h2>
				<p>{bioExcerpt}</p>
				<p>{bio}</p>
				<p>{jobTitle}</p>
				<p>{authorTitle}
					<Img
						fluid={avatar.childImageSharp.fluid}
						alt=""
					/>
				</p>
				<div>
					<h1>
						#Blog <span>({data.allMdx.totalCount})</span>
					</h1>
				</div>

				<Grid container spacing={3}>
					{posts.map(({ node: post }) => {
						return (
							<Grid key={post.fields.slug} item xs={12} md={6} xl={4}>
								<PostCard node={post} postClass={`post`} />
							</Grid>
						)
					})}
				</Grid>

			</div>
		</Layout>
	)
};

export const pageQuery = graphql`
  query PostsByAuthorId($authorId: String!) {
    allMdx(filter: { fields: { authorId: { eq: $authorId } } }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
            # authorId
          }
          frontmatter {
            title        
            date(formatString: "MMMM DD, YYYY")        
            meta {
              author
              category
              tags
            }
            content {
              body
              excerpt
              subheading
            #   thumbnail {
            #     childImageSharp {
            #       fluid(maxWidth: 680) {
            #         ...GatsbyImageSharpFluid
            #       }
            #     }
            #   }          
            }
          }
        }
      }
    }
    authorYaml(title: { eq: $authorId }) {
      bio
      bioExcerpt
      title
      jobTitle
      avatar {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }    
  }
`;

// export default () => (
// 	<div>All Author</div>
// )