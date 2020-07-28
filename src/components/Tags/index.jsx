import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import * as S from './styled'

const Tags = ({ tags, tagLink }) => {
  return (
    <div className="post-card-tags">
      <p>
        {tags &&
          tags.map(tag => (
            <Fragment key={tag}>
              <span>
                <S.Tag
                  to={`/tags/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                  className={tag.replace(/\s+/g, '-').toLowerCase()}
                >
                  #{tag}
                </S.Tag>
              </span>
            </Fragment>
          ))}
      </p>
    </div >
  )
}

export default Tags
