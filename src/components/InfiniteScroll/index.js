import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'

function InfiniteScroll({ pageContext: { edges } }) {
    const [hasMore, setMore] = useState(edges.length > 10)
    const [currentList, addToList] = useState([...edges.slice(0, 10)])

    const loadEdges = () => {
        const currentLength = currentList.length
        const more = currentLength < edges.length
        const nextEdges = more
            ? edges.slice(currentLength, currentLength + 20)
            : []
        setMore(more)
        addToList([...currentList, ...nextEdges])
    }
    const handleTouchEnd = e => {
        e.preventDefault()
        handleScroll()
    }
    const handleScroll = () => {
        if (!hasMore || isLoading) return
        if (
            window &&
            window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight
        ) {
            loadEdges()
        }
    }

    useEffect(() => {
        window && window.addEventListener('scroll', handleScroll)
        window && window.addEventListener('resize', handleScroll)
        window && window.addEventListener('touchend', handleTouchEnd)
        return () => {
            window && window.removeEventListener('scroll', handleScroll)
            window && window.removeEventListener('resize', handleScroll)
            window && window.removeEventListener('touchend', handleTouchEnd)
        }
    }, [hasMore, currentList])

    return (
        <>
            <ul>
                {currentList.map(({ node: { fields } }, idx) => {
                    return (
                        <li key={`fields-${idx}`} index={idx + 1}>
                            {
                                /* you will know the specifics here from how you load your data */
                                fields
                            }
                        </li>
                    )
                })}
            </ul>
            {!hasMore && <div>All Businesses Loaded!</div>}
            {hasMore && <div>Scroll Down to Load More...</div>}}
        </>
    )
}

function InfiniteScrollTemplate(props) {
    return (
        <Layout {...props}>
            <InfiniteScroll {...props} />
        </Layout>
    )
}

export default InfiniteScrollTemplate
