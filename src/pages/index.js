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
import * as Crd from '../components/Card/styled'

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
            <Hero style={{ backgroundColor: '#ffca28' }}>
                <S.Container>
                    <S.ContentWrapper>
                        <div className="hero__header-wrapper text__on-dark">
                            <div className="hero-left">
                                <h5 className="section-title">
                                    {sectionTitle}
                                </h5>
                                <h1 className="headline">{headline}</h1>
                                {/*<p className="subline">{subline}</p>*/}
                                <S.ButtonBlock>
                                    <Button
                                        link="/"
                                        classes="button primary round--4"
                                    >
                                        Get Started
                                    </Button>

                                    <Button
                                        link="/"
                                        classes="button transparent__on-dark with-icon round--30"
                                    >
                                        <MdPlayCircleFilled
                                            className="material-icons icon-left"
                                            translate="no"
                                        />
                                        Get Started
                                    </Button>
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
                    </S.ContentWrapper>
                </S.Container>
            </Hero>
            <section className="buffer-y text__on-light">
                <S.Container>
                    <S.ContentWrapper>
                        <S.ContentHeader>
                            <h2 className="section-title">{latestPosts}</h2>
                        </S.ContentHeader>
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
