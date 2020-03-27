import styled from 'styled-components'
import media from 'styled-media-query'

export const ListWrapper = styled.section`
    margin-bottom: 48px;
    ${media.greaterThan('small')`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `}
    ${media.greaterThan('large')`
        grid-template-columns: repeat(auto-fit, minmax(250px, calc(33.333% - 10px)));
    `}
`
export const Container = styled.div`
    width: 100%;
    /* max-width: var(--width-container); */
    margin: 0 auto;
    padding: 0 20px;

    ${media.greaterThan('large')`
    padding: 0 80px;
  `}
`
export const ContentWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1352px;
    width: 100%;
`
export const ContentHeader = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;

    ${media.greaterThan('large')`
        padding-top: 48px;
        padding-bottom: 48px;
    `}
`
export const ButtonBlock = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${media.greaterThan('medium')`
        flex-direction: row;
        justify-content: flex-start;
    `}
`
export const ThreeColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;

    ${media.greaterThan('medium')`
        flex-direction: row;
    `}
`
export const ThreeColumnColumn = styled.div`
    flex: 1 1 calc(100% / 3);
    margin: 0 0 32px;

    &:not(:last-child) {
        padding: 0 24px 0 0;

        ${media.greaterThan('small')`
            padding: 0 32px 0 0;    
        `}

        ${media.greaterThan('large')`
            padding: 0 84px 0 0;
        `}
    }
`
