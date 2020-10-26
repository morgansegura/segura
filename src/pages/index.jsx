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
import {FcMultipleDevices, FcCommandLine, FcComboChart, FcStatistics, FcWorkflow, FcMindMap} from "react-icons/fc";
import {FaLaravel, FaVuejs, FaReact, FaSass, FaNodeJs} from "react-icons/fa";
import {MdStyle} from "react-icons/md";
// import {SiTailwindcss, SiGatsby, SiNuxtDotJs} from "react-icons/si";

const BlogIndex = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout title={siteTitle}
                location={location}> <SEO
            title="Blog"
            keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
        />

            {/* <WrapGameElement /> */}

            <S.HeroBlock className="flex flex-col lg:flex-row">
                <S.BioImageContainer>
                    <S.BioImage
                        style={{backgroundImage: `url(${quoteImage})`}}
                        alt=""
                    />
                </S.BioImageContainer>
                <S.BioContent className="p-16">
                    <span className="block font-thin text-base font-headline tracking-normal">Creative Technologist</span>
                    <h2 className="font-sans font-headline text-5xl leading-10 font-bold mb-5">Morgan Segura</h2>
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

            <S.SkillsBlock className="p-10">
                <header className="mb-6">
                    <h3 className="inline-flex items-center px-4 py-2 font-sans font-semibold text-2xl">What I Do</h3>
                </header>
                <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card p-4 rounded-md hover:shadow">
                        <div className="flex items-center mb-1">
                            <FcMultipleDevices className="mr-3 w-8 h-8" />
                            <h4 className="font-semibold text-lg">UX/UI Theory and Design</h4>
                        </div>
                        <p className="p-2">
                            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet
                            ultricies ex lectus scelerisque nibh. Ut non sodales odio.
                        </p>
                    </div>
                    <div className="card p-4 rounded-md">
                        <div className="flex items-center mb-1">
                            <FcCommandLine className="mr-3 w-8 h-8" />
                            <h4 className="font-semibold text-lg">Full Stack Development</h4>
                        </div>
                        <p className="p-2">
                            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet
                            ultricies ex lectus scelerisque nibh. Ut non sodales odio.
                        </p>
                    </div>
                    <div className="card p-4 rounded-md">
                        <div className="flex items-center mb-1">
                            <FcComboChart className="mr-3 w-8 h-8" />
                            <h4 className="font-semibold text-lg">Experience Testing & Analytics</h4>
                        </div>
                        <p className="p-2">
                            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet
                            ultricies ex lectus scelerisque nibh. Ut non sodales odio.
                        </p>
                    </div>
                    <div className="card p-4 rounded-md">
                        <div className="flex items-center mb-1">
                            <FcStatistics className="mr-3 w-8 h-8" />
                            <h4 className="font-semibold text-lg">SEO & Marketing</h4>
                        </div>
                        <p className="p-2">
                            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa,
                            sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.
                        </p>
                    </div>
                </div>
            </S.SkillsBlock>

            <S.StackBlock className="p-10">
                <header className="mb-6">
                    <h3 className="font-sans font-light text-2xl lg:text-3xl">Preferred Stacks</h3>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card p-4 rounded-md shadow-md">
                        <div className="grid grid-cols-3 gap-4">
                            <a className="flex flex-col justify-center items-center font-sans font-normal text-sm" href="/">
                                <FaSass className="sass w-10 h-10"/>
                                <p>Sass</p>
                            </a>
                            <a className="flex flex-col justify-center items-center font-sans font-normal text-sm" href="/">
                                <FaVuejs className="vue w-10 h-10"/>
                                <p>Vue</p>
                            </a>
                            <a className="flex flex-col justify-center items-center font-sans font-normal text-sm" href="/">
                                <FaLaravel className="laravel w-10 h-10"/>
                                <p>Laravel</p>
                            </a>
                        </div>
                    </div>
                    <div className="card p-4 rounded-md shadow-md">
                        <div className="grid grid-cols-3 gap-4">
                            <a className="flex flex-col justify-center items-center font-sans font-normal text-sm" href="/">
                                <MdStyle className="scomp w-10 h-10"/>
                                <p>Styled C.</p>
                            </a>
                            <a className="flex flex-col justify-center items-center font-sans font-normal text-sm" href="/">
                                <FaReact className="react w-10 h-10"/>
                                <p>React</p>
                            </a>
                            <a className="flex flex-col justify-center items-center font-sans font-normal text-sm" href="/">
                                <FaNodeJs className="node w-10 h-10"/>
                                <p>Node</p>
                            </a>
                        </div>
                    </div>
                </div>
            </S.StackBlock>

            <S.StudyBlock>
                <header>
                    <h3>Currently Learning</h3>
                </header>

                <div>
                    <FcWorkflow/>
                    <h4>Automation/Testing</h4>
                    <p>
                        Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet
                        ultricies ex lectus scelerisque nibh. Ut non sodales odio.
                    </p>
                </div>
                <div>
                    <FcMindMap/>
                    <h4>
                        Machine Learning + Data Science
                    </h4>
                    <p>
                        Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa,
                        sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.
                    </p>

                </div>
            </S.StudyBlock>

            <S.TestimonialBlock>
                <header>
                    <h3 className="font-sans font-light text-2xl lg:text-3xl">Testimonials</h3>
                </header>
                <div>
                    <p>Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet
                       diam.
                    </p>
                </div>
                <div>
                    <img src="https://uifaces.co/our-content/donated/s9W6Vk2d.jpg"
                         alt="Jose Jimenez"/>
                    <span>Jose Jimenez</span>
                    <span>Locost Accessories</span>
                </div>
                <div>
                    <p>Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet
                       diam.
                    </p>
                </div>
                <div>
                    <img src="https://images.generated.photos/qmdENySIv23bkva-PxTHsoxVbZQdB1Wka0ZPcH5shHY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzMDE4MzAuanBn.jpg"
                         alt="Jose Jimenez"/>
                    <span>Mia Johnson</span>
                    <span>Locost Accessories</span>
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
