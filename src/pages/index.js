import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import Hero from '../components/Hero'
import Button from '../components/Button'
import Card from '../components/Card'
// import TitlePage from '../components/TitlePage'
import LocalizedLink from '../components/LocalizedLink'
import useTranslations from '../components/useTranslations'
import HeroImg1 from '../images/home-office.svg'
import { MdPlayCircleFilled } from 'react-icons/md'

import * as S from '../components/ListWrapper/styled'
import * as C from '../components/Content/styled'

const Index = ({ data: { allMarkdownRemark } }) => {
    // useTranslations is aware of the global context (and therefore also "locale")
    // so it'll automatically give back the right translations
    const {
        sectionTitle,
        headline,
        subline,
        category,
        button1,
        button2,
        latestPosts,
        allPosts,
    } = useTranslations()

    const postList = allMarkdownRemark.edges

    return (
        <div className="homepage" style={{ paddingTop: '56px' }}>
            <SEO title="Home" />
            <Hero classes="bg-secondary text__on-dark">
                <S.Container>
                    <S.ContentWrapper>
                        <div className="hero__header-wrapper">
                            <div className="hero-left">
                                <h5 className="section-title">
                                    {sectionTitle}
                                </h5>
                                <h1 className="headline">{headline}</h1>
                                <p className="subline">{subline}</p>
                                <S.ButtonBlock>
                                    <LocalizedLink to={`/blog/`}>
                                        <Button classes="cta-button button--white">
                                            Get Started
                                        </Button>
                                    </LocalizedLink>
                                    <LocalizedLink to={`/blog/`}>
                                        <Button classes="cta-link link--white on__right">
                                            <MdPlayCircleFilled
                                                className="material-icons icon-left"
                                                translate="no"
                                            />
                                            Get Started
                                        </Button>
                                    </LocalizedLink>
                                </S.ButtonBlock>
                            </div>
                            <div className="hero-right">
                                <img
                                    style={{
                                        width: '75%',
                                        opacity: '.8',
                                        top: '10%',
                                        right: '-5%',
                                    }}
                                    className="hero-bg-image"
                                    src={HeroImg1}
                                    alt="Main Hero Section"
                                />
                            </div>
                        </div>
                        <Card>
                            <S.ThreeColumnWrapper>
                                <S.ThreeColumnColumn>
                                    <h5>
                                        Build apps fast, without managing
                                        infrastructure
                                    </h5>
                                    <p>
                                        Firebase gives you functionality like
                                        analytics, databases, messaging and
                                        crash reporting so you can move quickly
                                        and focus on your users.
                                    </p>
                                </S.ThreeColumnColumn>
                            </S.ThreeColumnWrapper>
                        </Card>
                    </S.ContentWrapper>
                </S.Container>
            </Hero>

            <S.Container>
                <h2>
                    <strong>{latestPosts}</strong>
                </h2>
                <br />
                <Card>
                    <S.ThreeColumnWrapper>
                        <S.ThreeColumnColumn>
                            <h5>
                                Build apps fast, without managing infrastructure
                            </h5>
                            <p>
                                Firebase gives you functionality like analytics,
                                databases, messaging and crash reporting so you
                                can move quickly and focus on your users.
                            </p>
                        </S.ThreeColumnColumn>
                    </S.ThreeColumnWrapper>
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
                                timeToRead,
                                fields: { slug },
                            },
                        }) => (
                            <PostItem
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
            </S.Container>
            <br />
            <LocalizedLink to={`/blog/`}>{allPosts}</LocalizedLink>
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
