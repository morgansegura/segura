import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'

// import WrapGameElement from '../components/Games/Reacteroids'
// Styled components
import * as S from '../styles/home/styled'
// Images
import quoteImage from '../../static/assets/images/quote.jpg'

// Icons

import {FaGithubAlt} from "react-icons/fa";
import {SiIndeed, SiGlassdoor, SiLinkedin} from "react-icons/si";
import {HiOutlineMail} from "react-icons/hi";

/* Imported Data TODO: add this to NetlifyCMS as modules and pull in via GraphQL */
import {skills, studies, technology} from '../data'

const BlogIndex = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title
    return (
        <Layout title={siteTitle}
                location={location}> <SEO
            title="Blog"
            keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
        />

            {/* <WrapGameElement /> */}

            <S.HeroBlock className="flex flex-col xl:flex-row">
                <S.BioImageContainer>
                    <S.BioImage
                        className="w-full h-full"
                        style={{backgroundImage: `url(${quoteImage})`}}
                        alt=""
                    />
                </S.BioImageContainer>
                <S.BioContent className="p-10 lg:p-16">
                    <span className="block font-thin text-base font-sans tracking-normal">Creative Technologist</span>
                    <h2 className="font-sans font-headline text-5xl leading-10 font-semibold mb-5">Morgan Segura</h2>
                    <div className="font-sans text-sm leading-loose">
                        <p className="mb-3 pt-2">
                            Hook leggings snapple dj jazzy jeff david duchovny end of the road gatorade, cornrows pulp
                            fiction alta vista skate tees roseanne barr wesley snipes. Eminem bandanas fanny packs hot pink
                            boy bands when you’re lost out there and you’re all alone.
                        </p>
                        <p className="pt-2">
                            Flip flops wearing your cap backwards encarta I've fallen and I can't get up wayne gretzky
                            tamagotchi. Nintendo 64 sup hip hop playa puff daddy, courtney love end of the road warheads
                            push pencils.
                        </p>
                    </div>
                    <S.Button className="mt-6 ml-auto text-center inline-flex lg:block py-3 px-6 rounded-md shadow-md font-semibold text-lg font-sans" to={'/'}>Download CV</S.Button>
                </S.BioContent>
            </S.HeroBlock>

            <S.SkillsBlock className="p-10 lg:p-16">
                <header className="mb-6">
                    <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">Areas of expertise</h3>
                </header>
                <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        skills.map(skill => (
                            <div className="card p-4 rounded-md shadow-lg">
                                <div className="flex items-center mb-1">
                                    {skill.icon}
                                    <h4 className="font-semibold text-lg">{skill.title}</h4>
                                </div>
                                <p className="p-2">
                                    {skill.body}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </S.SkillsBlock>

            <S.StackBlock className="p-10 lg:p-16">
                <header className="mb-6">
                    <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">Preferred Tech</h3>
                </header>

                <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
                    {
                        technology.map(tech => (
                            <a className="card relative col-span-1 flex justify-center py-8 px-8" href={tech.url}>
                                <div className="icon-container rounded-full p-2">{tech.icon}</div>
                                <p className="absolute right-0 mr-8 flex h-6 pl-2 pr-3 items-center text-sm font-headline pl-2 bg-gray-200 rounded-tl-full rounded-tr-full rounded-br-full">
                                    {tech.caption}
                                </p>
                            </a>
                        ))
                    }
                </div>
            </S.StackBlock>

            <S.StudyBlock className="p-10 lg:p-16">
                <header className="mb-6">
                    <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">Currently Learning</h3>
                </header>
                <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        studies.map(study => (
                            <div className="card p-4 rounded-md shadow-lg">
                                <div className="flex items-center mb-1">
                                    {study.icon}
                                    <h4 className="font-semibold text-lg">{study.title}</h4>
                                </div>
                                <p className="p-2">
                                    {study.body}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </S.StudyBlock>

            <S.TestimonialBlock className="p-10 lg:p-16">
                <header className="mb-6">
                    <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">My Network</h3>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                    <div className="relative md:mr-24 lg:mr-0">
                        <img className="avatar -mb-2 ml-6 bottom-0 md:mt-0 md:mb-4 w-20 h-20 rounded-full absolute" src="https://uifaces.co/our-content/donated/s9W6Vk2d.jpg"
                             alt="Jose Jimenez"/>
                        <div className="md:ml-20 card p-4 font-sans text-sm flex rounded-md shadow-lg">
                            <p>
                                Dallas cowboys roseanne barr keds game boy color. Once you pop you can’t stop pearl jam flip flops tommy hilfiger chillax renting movies at a store, acid wash the simpsons push pencils nirvana. Pop punk dawg destiny’s child dial-up minesweeper cut-off jean shorts. Visor blockbuster video skidz and zubas your mom.
                            </p>
                        </div>
                        <div className="label mt-2 ml-32 md:mr-32 flex flex-col font-sans rounded-tr-full rounded-br-full rounded-bl-full py-2 pl-6">
                            <span className="text-base font-semibold -mb-2">Jose Jimenez</span>
                            <span className="text-sm">Locost Accessories</span>
                        </div>
                    </div>
                    <div className="relative md:ml-24 lg:ml-0">
                        <img className="avatar -mb-2 ml-6 bottom-0 md:mt-0 md:mb-4 w-20 h-20 rounded-full absolute"
                             src="https://images.generated.photos/qmdENySIv23bkva-PxTHsoxVbZQdB1Wka0ZPcH5shHY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzMDE4MzAuanBn.jpg"
                             alt="Jose Jimenez"/>
                        <div className="md:ml-20 card font-sans p-4 text-sm flex rounded-md shadow-lg">
                            <p>
                                Fargo gatorade courtney love flat tops scrunchies, toy story dennis rodman big lebowski kicks. Generation Y skifree push pencils alternative rock, goosebumps baywatch madonna desert storm magic johnson. Tupac shakur warheads sup gak, kazaa velcro sneakers berry lips steve urkel. Hush puppies pizza bagels apollo 13 julia roberts g-shocks keepin’ it real.
                            </p>
                        </div>
                        <div className="label mt-2 ml-32 md:mr-32 flex flex-col font-sans rounded-tr-full rounded-br-full rounded-bl-full py-2 pl-6">
                            <span className="text-base font-semibold -mb-2">Mia Johnson</span>
                            <span className="text-sm">Locost Accessories</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative mt-6 md:mr-24 lg:mr-56 lg:ml-56">
                        <img className="avatar -mb-2 ml-6 bottom-0 md:mt-0 md:mb-4 w-20 h-20 rounded-full absolute"
                             src="https://images.generated.photos/qmdENySIv23bkva-PxTHsoxVbZQdB1Wka0ZPcH5shHY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzMDE4MzAuanBn.jpg"
                             alt="Jose Jimenez"/>
                        <div className="md:ml-20 card font-sans p-4 text-sm flex rounded-md shadow-lg">
                            <p>
                                Ghost pottery scene alternative rock wesley snipes push pencils, beavis and butthead the macarena I don’t want no scrubs forrest gump. Playstation tommy hilfiger my heart will go on acid wash fly bomber jacket. Sitcoms trl roseanne barr leggings, overalls quiet storm bop it west wing tae bo. Geo metro ring pops internet cable modem dotcom bubble, members only jackets i'm king of the world millenials daria desert storm.
                            </p>
                        </div>
                        <div className="label mt-2 ml-32 md:mr-32 flex flex-col font-sans rounded-tr-full rounded-br-full rounded-bl-full py-2 pl-6">
                            <span className="text-base font-semibold -mb-2">Mia Johnson</span>
                            <span className="text-sm">Locost Accessories</span>
                        </div>
                    </div>
                </div>
                <div className="relative mt-6 flex items-center justify-end">
                    <div className="z-0 social absolute flex justify-evenly items-center px-3 py-2 rounded-md pr-10 mr-3">
                        <a className="mr-2" href="" title="">
                            <FaGithubAlt className="w-6 h-6" />
                        </a>
                        <a className="mr-2" href="" title="">
                            <SiLinkedin className="w-6 h-6" />
                        </a>
                        <a className="mr-2" href="" title="">
                            <SiIndeed className="w-6 h-6" />
                        </a>
                        <a className="mr-2" href="" title="">
                            <SiGlassdoor className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="relative z-10 cursor-pointer email p-3 rounded-full shadow-lg">
                        <HiOutlineMail className="w-6 h-6" />
                    </div>
                </div>
            </S.TestimonialBlock>
        </Layout>
    )
}

const indexQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    fields {
                        slug
                        # author
                    }
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        title
                        author
                        tags
                        category
                        excerpt
                        subheading
                        # thumbnail {
                        #   childImageSharp {
                        #     fluid(maxWidth: 1360) {
                        #       ...GatsbyImageSharpFluid
                        #     }
                        #   }
                        # }

                    }
                }
            }
        }
    }
`
export default props => (
    <StaticQuery
        query={indexQuery}
        render={data => (
            <BlogIndex location={props.location}
                       props
                       data={data} {...props} />
        )}
    />
)
