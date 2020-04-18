import React from 'react'
import SEO from '../components/seo'
import Section from '../components/Section'
import { ColorButton } from '../components/Button'
import HeroImg from '../images/img-404.svg'
import * as S from '../components/ListWrapper/styled'
import { AiFillEnvironment } from 'react-icons/ai'

const NotFound = () => (
    <>
        <SEO title="404: Not found" />
        <Section classes="buffer-top">
            <div className="hero--inner text__on-light">
                <div className="hero-left">
                    <h1 className="headline">
                        Um, this doesn't usually happen.
                    </h1>
                    <h4 className="subline">
                        We are working diligently to figure out the problem. In
                        the meanwhile, you should check out some more of our
                        selections.
                    </h4>
                    <S.ButtonBlock>
                        <ColorButton
                            link="/"
                            classes="button primary with-icon round--4"
                        >
                            <AiFillEnvironment
                                className="material-icons icon-left"
                                translate="no"
                            />
                            Take me back!
                        </ColorButton>
                    </S.ButtonBlock>
                </div>
                <div className="hero-right">
                    <img
                        className="hero-bg-image abs-bottom-center"
                        src={HeroImg}
                        alt="Main Hero Section"
                    />
                </div>
            </div>
        </Section>
    </>
)

export default NotFound
