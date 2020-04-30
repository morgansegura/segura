import React, { Fragment } from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'

const Tags = ({ tags, tagLink }) => {
  return (
    <div className="post-card-tags">
      <p>
        {tags &&
          tags.map(tag => (
            <Fragment key={tag}>
              {tagLink ? (
                <span>
                  <Link
                    className="post-card-tag-link"
                    to={`/tags/${_.kebabCase(tag)}`}
                  >
                    #{tag}
                  </Link>{' '}
                </span>
              ) : (
                <Fragment key={tag}>
                  <span>#{tag}</span>{' '}
                </Fragment>
              )}
            </Fragment>
          ))}
      </p>
    </div>
  )
}

export default Tags
