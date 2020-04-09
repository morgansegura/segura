import React from 'react'

/* CSS in JS */
import * as S from '../ListWrapper/styled'
import * as H from './styled'

const Section = ({ children, ...otherProps }) => {
    return (
        <section {...otherProps}>
            <H.Section>
                <S.Container>{children}</S.Container>
            </H.Section>
        </section>
    )
}

export default Section
