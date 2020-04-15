import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    xsmall: '250px',
    small: '450px',
    medium: '768px',
    large: '1024px',
    xlarge: '1200px',
    huge: '1400px',
})

export const truncateString = (str, count, replacement) => {
    return str.length > count ? str.substring(0, count) + replacement : str
}
