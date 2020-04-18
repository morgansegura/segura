import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { HeroHome } from '../components/Hero'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import useTranslations from '../components/useTranslations'
import { ColorButton, ColorPill } from '../components/Button'

import Grid from '@material-ui/core/Grid'

/* Animations & Transitions */
import { AnimateNumber, div } from '../components/Animations'

/* Icons */
import { MdArrowForward, MdDateRange, MdTimelapse } from 'react-icons/md'
import { TiTag } from 'react-icons/ti'
import { FaLongArrowAltRight, FaQuoteLeft } from 'react-icons/fa'

/* CSS in JS */
import * as S from '../components/ListWrapper/styled'
// import * as Crd from '../components/Card/styled'

const Index = ({ data: { allMarkdownRemark } }) => {
    const { latestPosts, allPosts } = useTranslations()
    const postList = allMarkdownRemark.edges

    return (
        <div style={{ width: '100%' }}>
            <SEO title="Home" />

            <Section className="section">
                <HeroHome />
            </Section>

            <Section className="section bg-dark">
                {/* Intorduction Left */}
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <div className="clean-wrap--left">
                            <span className="super-text">Introduction</span>
                            <h3 className="section-subline">
                                User Experience Designer{' '}
                                <span className="line-break">
                                    and Full Stack
                                </span>
                            </h3>
                            <p>
                                Deploy revolutionary tagclouds user-centred
                                virtual; standards-compliant 24/365 feeds
                                innovate monetize.
                            </p>
                            <Link className="href href--large buffer-y" to="/">
                                Get in touch{' '}
                                <FaLongArrowAltRight className="icon-right" />
                            </Link>
                        </div>
                    </Grid>

                    {/* Intorduction Right */}
                    <Grid item xs={12} md={6}>
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
                                    <p className="number">12</p>
                                    <p className="description-small">
                                        Years of{' '}
                                        <span className="line-break">
                                            Experience{' '}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="counter-item">
                                <div className="numbers">
                                    <p className="number">52k</p>
                                    <p className="description-small">
                                        Coding hours
                                        <span className="line-break">
                                            & Counting{' '}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Section>

            <Section className="section border-bottom">
                <Tabs>
                    <TabList className="tab-bottom">
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={4}>
                                <Tab className="tab-button">
                                    <div className="square-card">
                                        <div className="square-card--inner">
                                            <h4 className="section-subline section-subline--small">
                                                UI / UX{' '}
                                                <span className="line-break">
                                                    Design{' '}
                                                    <FaLongArrowAltRight className="icon-right push-down" />
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                </Tab>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Tab className="tab-button">
                                    <div className="square-card">
                                        <div className="square-card--inner">
                                            <h4 className="section-subline section-subline--small">
                                                Web & Mobile{' '}
                                                <span className="line-break">
                                                    Development{' '}
                                                    <FaLongArrowAltRight className="icon-right push-down" />
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                </Tab>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Tab className="tab-button">
                                    <div className="square-card">
                                        <div className="square-card--inner">
                                            <h4 className="section-subline section-subline--small">
                                                Data Analysis{' '}
                                                <span className="line-break">
                                                    & Integration{' '}
                                                    <FaLongArrowAltRight className="icon-right push-down" />
                                                </span>
                                            </h4>{' '}
                                        </div>
                                    </div>
                                </Tab>
                            </Grid>
                        </Grid>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <div className="clean-wrap--left">
                                        <span className="super-text">
                                            UI/UX Design
                                        </span>
                                        <h2 className="section-subline ">
                                            All Creative Works,{' '}
                                            <span className="line-break">
                                                Selected Projects
                                            </span>
                                        </h2>
                                        <p>
                                            Deploy revolutionary tagclouds
                                            user-centred virtual;
                                            standards-compliant 24/365 feeds
                                            innovate monetize, synergies
                                            expedite ubiquitous reintermediate.
                                        </p>
                                        <ColorButton className="buffer-y">
                                            Load More{' '}
                                            <MdArrowForward className="icon-right" />
                                        </ColorButton>
                                    </div>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <h4 className="section-subline">
                                        User Experience Designer and Full Stack
                                        Web Developer for the love of everything
                                        and waste water.
                                    </h4>
                                    <p>
                                        Deploy revolutionary tagclouds
                                        user-centred virtual;
                                        standards-compliant 24/365 feeds
                                        innovate monetize, synergies expedite
                                        ubiquitous reintermediate, world-class
                                        maximize compelling, transition granular
                                        out-of-the-box, bleeding-edge remix;
                                    </p>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <div className="clean-wrap--left">
                                        <span className="super-text">
                                            Web & Mobile Development
                                        </span>
                                        <h2 className="section-subline">
                                            All Creative Works,{' '}
                                            <span className="line-break">
                                                Selected Projects
                                            </span>
                                        </h2>
                                        <p>
                                            Deploy revolutionary tagclouds
                                            user-centred virtual;
                                            standards-compliant 24/365 feeds
                                            innovate monetize, synergies
                                            expedite ubiquitous reintermediate.
                                        </p>
                                        <ColorButton className="buffer-y">
                                            Load More{' '}
                                            <MdArrowForward className="icon-right" />
                                        </ColorButton>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <h4 className="section-subline">
                                        User Experience Designer and Full Stack
                                        Web Developer for the love of everything
                                        and waste water.
                                    </h4>
                                    <p>
                                        Deploy revolutionary tagclouds
                                        user-centred virtual;
                                        standards-compliant 24/365 feeds
                                        innovate monetize, synergies expedite
                                        ubiquitous reintermediate, world-class
                                        maximize compelling, transition granular
                                        out-of-the-box, bleeding-edge remix;
                                    </p>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <div className="clean-wrap--left">
                                        <span className="super-text">
                                            Data Analysis & Integration
                                        </span>
                                        <h2 className="section-subline">
                                            All Creative Works,{' '}
                                            <span className="line-break">
                                                Selected Projects
                                            </span>
                                        </h2>
                                        <p>
                                            Deploy revolutionary tagclouds
                                            user-centred virtual;
                                            standards-compliant 24/365 feeds
                                            innovate monetize, synergies
                                            expedite ubiquitous reintermediate.
                                        </p>
                                        <ColorButton className="buffer-y">
                                            Load More{' '}
                                            <MdArrowForward className="icon-right" />
                                        </ColorButton>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <h4 className="section-subline">
                                        User Experience Designer and Full Stack
                                        Web Developer for the love of everything
                                        and waste water.
                                    </h4>
                                    <p>
                                        Deploy revolutionary tagclouds
                                        user-centred virtual;
                                        standards-compliant 24/365 feeds
                                        innovate monetize, synergies expedite
                                        ubiquitous reintermediate, world-class
                                        maximize compelling, transition granular
                                        out-of-the-box, bleeding-edge remix;
                                    </p>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Section>

            {/* Posts */}

            <Section className="section">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <span className="super-text">Blog</span>
                        <h2 className="section-subline">
                            All Creative Works,{' '}
                            <span className="line-break">
                                Selected Projects
                            </span>
                        </h2>
                        <p>
                            Deploy revolutionary tagclouds user-centred virtual;
                            standards-compliant 24/365 feeds innovate monetize,
                            synergies expedite ubiquitous reintermediate.
                        </p>
                        <div className="list-sorter buffer-y">
                            <ColorPill to="/" className="list-anchor">
                                Tutorials
                            </ColorPill>
                            <ColorPill to="/" className="list-anchor">
                                Projects
                            </ColorPill>
                            <ColorPill to="/" className="list-anchor">
                                Case Study
                            </ColorPill>
                            <ColorPill to="/" className="list-anchor">
                                Quick Tips
                            </ColorPill>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="post-item-wrapper">
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
                                            <span className="date">
                                                <MdDateRange className="icon-left" />
                                                {date}
                                            </span>
                                            <span className="category">
                                                <TiTag className="icon-left" />
                                                {category}
                                            </span>
                                            <span className="time-to-read">
                                                <MdTimelapse className="icon-left" />{' '}
                                                {timeToRead}
                                            </span>
                                        </div>
                                        <h5 className="title">
                                            {title} <MdArrowForward />
                                        </h5>
                                    </Link>
                                )
                            )}
                        </div>
                    </Grid>
                </Grid>
            </Section>

            {/* Testimonials */}

            <Section className="section bg-dark">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <div className="clean-wrap--left">Images Go Here</div>
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                    </Grid>
                </Grid>
            </Section>

            {/* Contact */}

            <Section className="section">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <div className="clean-wrap--left">
                            <span className="super-text">Contact</span>
                            <h2 className="section-subline">
                                All Creative Works,{' '}
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
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h4 className="section-subline">
                            Have any thoughts?{' '}
                            <span className="line-break">
                                Let's Work Together!
                            </span>
                        </h4>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Section>
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
