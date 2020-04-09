import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    xsmall: '250px',
    small: '450px',
    medium: '768px',
    large: '1024px',
    xlarge: '1200px',
    huge: '1400px',
})

export const ListWrapper = styled.section`
    margin-bottom: 48px;
    ${customMedia.greaterThan('small')`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `}
    ${customMedia.greaterThan('large')`
        grid-template-columns: repeat(auto-fit, minmax(250px, calc(33.333% - 10px)));
    `}
`
export const Container = styled.div`
    width: 100%;
    margin: 0 auto;

    margin-left: auto;
    margin-right: auto;
    max-width: var(--width-container);
    overflow: hidden;
    /* background: teal; */

    ${customMedia.greaterThan('small')`

    `}
`

export const ContentHeader = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;

    ${customMedia.greaterThan('medium')`
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

    ${customMedia.greaterThan('medium')`
        flex-direction: row;
        justify-content: flex-start;
    `}
`
export const ThreeColumnWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex-wrap: wrap;

    ${customMedia.greaterThan('small')`
        flex-direction: row;
        margin-left: -20px;
        margin-right: -20px;        
    `}
`
export const ThreeColumnColumn = styled.div`
    margin: 0 0 40px;
    padding: 0;

    ${customMedia.lessThan('xlarge')`
        flex: 1 1 calc(100% / 2);
        padding-left: 20px;
        padding-right: 20px;
    `}
    ${customMedia.greaterThan('large')`
        flex: 1 1 calc(100% / 3);
        padding-left: 20px;
        padding-right: 20px;
    `}
`
