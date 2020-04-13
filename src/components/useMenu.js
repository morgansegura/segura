import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext } from './Layout'

function useMenu() {
    // Grab the locale (passed through context) from the Context Provider
    const { locale } = React.useContext(LocaleContext)
    // Query the JSON files in <rootDir>/i18n/translations
    const { rawData } = useStaticQuery(query)

    // Simplify the response from GraphQL
    const simplified = rawData.edges.map(item => {
        return {
            itemId: item.node.translations.id,
            name: item.node.name,
            menus: {
                blogMenuItems: item.node.translations.blogMenuItems,
                siteMenuItems: item.node.translations.siteMenuItems,
                menuItems: item.node.translations.menuItems,
            },
        }
    })
    // console.log(simplified)
    // console.log(simplified.filter(lang => lang.name === 'en')[0])
    // Only return menu for the current locale
    const { menus } = simplified.filter(lang => lang.name === 'en')[0]

    return menus
}

export default useMenu

const query = graphql`
    query useMenu {
        rawData: allFile(filter: { sourceInstanceName: { eq: "menu" } }) {
            edges {
                node {
                    name
                    translations: childMenuJson {
                        id
                        blogMenuItems {
                            link
                            name
                        }
                        siteMenuItems {
                            link
                            name
                        }
                        menuItems {
                            link
                            name
                        }
                    }
                }
            }
        }
    }
`
