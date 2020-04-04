import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import HeroContact from '../components/HeroContact'
import Card from '../components/Card'
import LocalizedLink from '../components/LocalizedLink'
import useTranslations from '../components/useTranslations'

/* UX Components */
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

import * as S from '../components/ListWrapper/styled'
import * as Crd from '../components/Card/styled'

const Index = ({ data: { allMarkdownRemark } }) => {
    // useTranslations is aware of the global context (and therefore also "locale")
    // so it'll automatically give back the right translations
    const {
        headline,
        subline,
        latestPosts,
        allPosts,
    } = useTranslations()

    const postList = allMarkdownRemark.edges

    return (
        <div className="homepage" style={{ paddingTop: '56px' }}>
            <SEO title="Home" />

            <HeroContact headline={headline} subline={subline} />
            <section className="buffer-y text__on-light">
                <S.Container>
                    <S.ContentWrapper>
                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
                                    {({ opacity }) =>
                                        <S.ContentHeader style={{ opacity }}>
                                            <h2 className="section-title">{latestPosts}</h2>
                                        </S.ContentHeader>
                                    }
                                </Spring>
                            )}
                        </VisibilitySensor>
                        <Card>
                            <Crd.CardContent>
                                <S.ThreeColumnWrapper>
                                    <S.ThreeColumnColumn>
                                        <h5>
                                            Build apps fast, without managing
                                            infrastructure
                                        </h5>
                                        <p>
                                            Firebase gives you functionality
                                            like analytics, databases, messaging
                                            and crash reporting so you can move
                                            quickly and focus on your users.
                                        </p>
                                    </S.ThreeColumnColumn>
                                    <S.ThreeColumnColumn>
                                        <h5>
                                            Build apps fast, without managing
                                            infrastructure
                                        </h5>
                                        <p>
                                            Firebase gives you functionality
                                            like analytics, databases, messaging
                                            and crash reporting so you can move
                                            quickly and focus on your users.
                                        </p>
                                    </S.ThreeColumnColumn>
                                    <S.ThreeColumnColumn>
                                        <h5>
                                            Build apps fast, without managing
                                            infrastructure
                                        </h5>
                                        <p>
                                            Firebase gives you functionality
                                            like analytics, databases, messaging
                                            and crash reporting so you can move
                                            quickly and focus on your users.
                                        </p>
                                    </S.ThreeColumnColumn>
                                </S.ThreeColumnWrapper>
                            </Crd.CardContent>
                            <Crd.CardFooter>Footer Stuff</Crd.CardFooter>
                        </Card>
                        <S.ListWrapper>
                            {postList.map(
                                ({
                                    node: {
                                        frontmatter: {
                                            background,
                                            category,
                                            date,
                                            description,
                                            title,
                                            image,
                                        },
                                        id,
                                        timeToRead,
                                        fields: { slug },
                                    },
                                }) => (
                                        <PostItem
                                            key={id}
                                            slug={`/blog/${slug}`}
                                            background={background}
                                            category={category}
                                            date={date}
                                            timeToRead={timeToRead}
                                            title={title}
                                            description={description}
                                            image={image}
                                        />
                                    )
                            )}
                        </S.ListWrapper>

                        <S.ButtonBlock>
                            <LocalizedLink to="/blog">{allPosts}</LocalizedLink>
                        </S.ButtonBlock>
                    </S.ContentWrapper>
                </S.Container>
            </section>
        </div>
    )
}

export default Index

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            category
            background
            image
            date(formatString: $dateFormat)
          }
          id
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`
