import React, { Fragment } from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'

import * as S from './styled'

const Tags = ({ tags, tagLink }) => {
  return (
    <div className="post-card-tags">
      <p>
        {tags &&
          tags.map(tag => (
            <Fragment key={tag}>
              {tagLink ? (
                <span>
                  <Link to={`/tags/${_.kebabCase(tag)}`}>
                    <S.Tag>#{tag}</S.Tag>
                  </Link>{' '}
                </span>
              ) : (
                <Fragment key={tag}>
                  <S.Tag>#{tag}</S.Tag>{' '}
                </Fragment>
              )}
            </Fragment>
          ))}
      </p>
    </div>
  )
}

export default Tags
