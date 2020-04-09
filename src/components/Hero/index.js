import React from 'react'

import Section from '../Section'
import { ColumnWrapper, Column } from '../Grid'
import Button from '../Button'

/* SVG Icons */
import { FaGithubAlt, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { MdArrowForward } from 'react-icons/md'

export const HeroHome = () => (
    <Section className="section">
        <ColumnWrapper>
            <Column className="two-columns">
                <h1 className="section-headline">
                    Morgan <span className="line-break">Segura.</span>
                </h1>
                <div className="social-block">
                    <a href="#" title="Follow me on Github">
                        <FaGithubAlt />
                    </a>
                    <a href="#" title="Follow me on Twitter">
                        <FaTwitter />
                    </a>
                    <a href="#" title="Connect with me on Linkedin">
                        <FaLinkedinIn />
                    </a>
                </div>
            </Column>
            {/* Main Header right */}
            <Column className="two-columns">
                <div className="clean-wrap--right">
                    <span className="super-text">Introduction</span>
                    <h2 className="section-subline">
                        User Experience Designer and Full Stack Web Developer
                    </h2>
                    <p>
                        Deploy revolutionary tagclouds user-centred virtual;
                        standards-compliant 24/365 feeds innovate monetize,
                        synergies expedite ubiquitous reintermediate,
                        world-class maximize compelling, transition granular
                        out-of-the-box, bleeding-edge remix;
                    </p>
                    <Button className="button medium primary round--4" to="/">
                        My Story <MdArrowForward className="icon-right" />
                    </Button>
                </div>
            </Column>
        </ColumnWrapper>
    </Section>
)
