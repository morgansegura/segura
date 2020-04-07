import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import Section from '../components/Section'
import Card from '../components/Card'
import useTranslations from '../components/useTranslations'
import Button from '../components/Button'

/* Icons */

import { MdArrowForward } from "react-icons/md";
import { FaLongArrowAltRight, FaGithubAlt, FaTwitter, FaLinkedinIn } from "react-icons/fa";
/* CSS in JS */
import * as S from '../components/ListWrapper/styled'
import * as Crd from '../components/Card/styled'

const Index = ({ data: { allMarkdownRemark } }) => {

    const {
        latestPosts,
        allPosts,
    } = useTranslations()

    const postList = allMarkdownRemark.edges

    return (
        <div className="homepage">
            <SEO title="Home" />
            <Section className="text__on-dark buffer-y">
                <div className="section--inner">
                    <div className="section-left flex-60">
                        <h1 className="section-headline">Morgan <span className="line-break">Segura.</span></h1>
                        <div className="social-block">
                            <a href="#" title="Follow me on Github">
                                <FaGithubAlt />
                            </a>
                            <a href="#" title="Connect with me on Linkedin">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" title="Follow me on Twitter">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    <div className="section-right flex-40">
                        <div className="clean-wrap--small">
                            <span className="super-text">Introduction</span>
                            <h2 className="section-subline">
                                User Experience Designer and Full Stack Web Developer
                            </h2>
                            <p>Deploy revolutionary tagclouds user-centred virtual; standards-compliant 24/365 feeds innovate monetize, synergies expedite ubiquitous reintermediate, world-class maximize compelling, transition granular out-of-the-box, bleeding-edge remix;</p>
                            <Button className="button medium primary round--4" to="/">
                                My Story <MdArrowForward className="icon-right" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className="text__on-dark bg-dark buffer-y">
                <div className="section--inner">
                    <div className="section-right flex-50">
                        <div className="clean-wrap">
                            <span className="super-text">Introduction</span>
                            <h3 className="section-subline">
                                User Experience Designer <span className="line-break"> and Full Stack</span>
                            </h3>
                            <p>Deploy revolutionary tagclouds user-centred virtual; standards-compliant 24/365 feeds innovate monetize.</p>
                            <Link className="href href--large" to="/">
                                Get in touch <FaLongArrowAltRight className="icon-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="section-left flex-50 ">
                        <div className="clean-wrap--small">
                            <h4 className="section-subline">
                                User Experience Designer and Full Stack Web Developer for the love of everything and waste water.
                            </h4>
                            <p>Deploy revolutionary tagclouds user-centred virtual; standards-compliant 24/365 feeds innovate monetize, synergies expedite ubiquitous reintermediate, world-class maximize compelling, transition granular out-of-the-box, bleeding-edge remix;</p>
                            <Button className="href href--large buffer-top-y" to="/">
                                <span className="underline">My Story</span> <FaLongArrowAltRight className="icon-right" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
            {/* 
            <section className="text__on-light">
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
            */}
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
