import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { HeroHome } from '../components/Hero'
import { ColumnWrapper, Column } from '../components/Grid'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'
// import Card from '../components/Card'
// import PostItem from '../components/PostItem'
import useTranslations from '../components/useTranslations'
import Button from '../components/Button'

/* Third party Libs */
import { AnimateNumber, ThreeDimensionalHover } from '../components/Animations'

/* Icons */
import { MdArrowForward } from 'react-icons/md'
import { FaLongArrowAltRight, FaQuoteLeft } from 'react-icons/fa'

/* CSS in JS */
import * as S from '../components/ListWrapper/styled'
// import * as Crd from '../components/Card/styled'

const Index = ({ data: { allMarkdownRemark } }) => {
    const { latestPosts, allPosts } = useTranslations()

    const postList = allMarkdownRemark.edges

    return (
        <div className="homepage">
            <SEO title="Home" />
            <HeroHome />

            <Section className="section bg-dark">
                {/* Intorduction Left */}
                <ColumnWrapper>
                    <Column className="two-columns">
                        <div className="clean-wrap--left">
                            <span className="super-text">Introduction</span>
                            <h3 className="section-subline">
                                User Experience Designer{' '}
                                <span className="line-break">
                                    {' '}
                                    and Full Stack
                                </span>
                            </h3>
                            <p>
                                Deploy revolutionary tagclouds user-centred
                                virtual; standards-compliant 24/365 feeds
                                innovate monetize.
                            </p>
                            <Link className="href href--large" to="/">
                                Get in touch{' '}
                                <FaLongArrowAltRight className="icon-right" />
                            </Link>
                        </div>
                    </Column>
                    {/* Intorduction Right */}
                    <Column className="two-columns">
                        <h4 className="section-subline">
                            User Experience Designer and Full Stack Web
                            Developer for the love of everything and waste
                            water.
                        </h4>
                        <p>
                            Deploy revolutionary tagclouds user-centred virtual;
                            standards-compliant 24/365 feeds innovate monetize,
                            synergies expedite ubiquitous reintermediate,
                            world-class maximize compelling, transition granular
                            out-of-the-box, bleeding-edge remix;
                        </p>
                        <div className="counters">
                            <div className="counter-item">
                                <div className="numbers">
                                    <p className="number">
                                        <AnimateNumber start="1" end="12" />
                                    </p>
                                    <p className="description-small">
                                        Years of
                                        <span className="line-break">
                                            Experience{' '}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="counter-item">
                                <div className="numbers">
                                    <p className="number">
                                        <AnimateNumber start="1" end="133" />
                                    </p>
                                    <p className="description-small">
                                        Learning
                                        <span className="line-break">
                                            Moments{' '}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Column>
                </ColumnWrapper>
            </Section>

            {/* Skills */}
            {/* Portfolio */}
            <Section className="section">
                <ColumnWrapper>
                    <Column className="three-columns">
                        <Link className="no-underline" to="/">
                            <ThreeDimensionalHover className="square-card">
                                <h4 className="section-subline section-subline--small">
                                    UI / UX
                                    <span className="line-break">
                                        Design{' '}
                                        <FaLongArrowAltRight className="icon-right push-down" />
                                    </span>
                                </h4>
                            </ThreeDimensionalHover>
                        </Link>
                    </Column>
                    <Column className="three-columns">
                        <Link className="no-underline" to="/">
                            <ThreeDimensionalHover className="square-card">
                                <h4 className="section-subline section-subline--small">
                                    Web & Mobile
                                    <span className="line-break">
                                        Development{' '}
                                        <FaLongArrowAltRight className="icon-right push-down" />
                                    </span>
                                </h4>
                            </ThreeDimensionalHover>
                        </Link>
                    </Column>
                    <Column className="three-columns">
                        <Link className="no-underline" to="/">
                            <ThreeDimensionalHover className="square-card">
                                <h4 className="section-subline section-subline--small">
                                    Data Analysis
                                    <span className="line-break">
                                        & Integration{' '}
                                        <FaLongArrowAltRight className="icon-right push-down" />
                                    </span>
                                </h4>
                            </ThreeDimensionalHover>
                        </Link>
                    </Column>
                </ColumnWrapper>
                {/* Portfolio left */}
                <ColumnWrapper>
                    <Column className="two-columns">
                        <div className="clean-wrap--left">
                            <span className="super-text">Portfolio</span>
                            <h2 className="section-subline">
                                All Creative Works,
                                <span className="line-break">
                                    Selected Projects
                                </span>
                            </h2>
                            <p>
                                Deploy revolutionary tagclouds user-centred
                                virtual; standards-compliant 24/365 feeds
                                innovate monetize, synergies expedite ubiquitous
                                reintermediate.
                            </p>
                            <Button
                                className="button medium primary round--4"
                                to="/"
                            >
                                Load More{' '}
                                <MdArrowForward className="icon-right" />
                            </Button>
                        </div>
                    </Column>
                    <Column className="two-columns">
                        <h4 className="section-subline">
                            User Experience Designer and Full Stack Web
                            Developer for the love of everything and waste
                            water.
                        </h4>
                        <p>
                            Deploy revolutionary tagclouds user-centred virtual;
                            standards-compliant 24/365 feeds innovate monetize,
                            synergies expedite ubiquitous reintermediate,
                            world-class maximize compelling, transition granular
                            out-of-the-box, bleeding-edge remix;
                        </p>
                    </Column>
                </ColumnWrapper>
            </Section>

            {/* Posts */}
            <Section className="section bg-dark">
                <ColumnWrapper>
                    <Column className="two-columns">
                        <span className="super-text">Blog</span>
                        <h2 className="section-subline">
                            All Creative Works,
                            <span className="line-break">
                                Selected Projects
                            </span>
                        </h2>
                        <p>
                            Deploy revolutionary tagclouds user-centred virtual.
                        </p>
                        <div className="list-sorter">
                            <Link to="/" className="list-anchor">
                                Tutorials
                            </Link>
                            <Link to="/" className="list-anchor">
                                Projects
                            </Link>
                            <Link to="/" className="list-anchor">
                                Case Study
                            </Link>
                            <Link to="/" className="list-anchor">
                                Quick Tips
                            </Link>
                        </div>
                    </Column>
                    <Column className="two-columns">
                        {postList.map(
                            ({
                                node: {
                                    frontmatter: { category, date, title },
                                    id,
                                    timeToRead,
                                    fields: { slug },
                                },
                            }) => (
                                <Link
                                    key={id}
                                    to={`/blog/${slug}`}
                                    className="post-item no-underline"
                                >
                                    <div className="meta">
                                        <span className="date">{date}</span>
                                        <span className="category">
                                            {category}
                                        </span>
                                        <span className="time-to-read">
                                            {timeToRead}
                                        </span>
                                    </div>
                                    <h5 className="title">
                                        {title} <MdArrowForward />
                                    </h5>
                                </Link>
                            )
                        )}
                    </Column>
                </ColumnWrapper>
            </Section>

            {/* Testimonials */}
            <Section className="section bg-dark">
                <ColumnWrapper>
                    <Column className="two-columns">
                        <div className="clean-wrap--left">Images Go Here</div>
                    </Column>
                    <Column className="two-columns">
                        <FaQuoteLeft className="quote-icon" />
                        <h4 className="quote-text">
                            User Experience Designer and Full Stack Web
                            Developer for the love of everything and waste
                            water.
                        </h4>
                        <p className="name">Jared Warner</p>
                        <p className="job-title">Job Title / Resource</p>
                        <div className="slide-links">
                            <div className="slide-link active"></div>
                            <div className="slide-link"></div>
                            <div className="slide-link"></div>
                            <div className="slide-link"></div>
                        </div>
                    </Column>
                </ColumnWrapper>
            </Section>

            {/* Contact */}
            <Section className="section">
                <ColumnWrapper>
                    <Column className="two-columns">
                        <div className="clean-wrap--left">
                            <span className="super-text">Contact</span>
                            <h2 className="section-subline">
                                All Creative Works,
                                <span className="line-break">
                                    Selected Projects
                                </span>
                            </h2>
                            <p>
                                Deploy revolutionary tagclouds user-centred
                                virtual; standards-compliant 24/365 feeds
                                innovate monetize.
                            </p>
                        </div>
                    </Column>
                    <Column className="two-columns">
                        <h4 className="section-subline">
                            Have any thoughts?
                            <span className="line-break">
                                Let's Work Together!
                            </span>
                        </h4>
                        <ContactForm />
                    </Column>
                </ColumnWrapper>
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
                                    <ThreeColumnColumn>
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
                                    </ThreeColumnColumn>
                                    <ThreeColumnColumn>
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
                                    </ThreeColumnColumn>
                                    <ThreeColumnColumn>
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
                                    </ThreeColumnColumn>
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
