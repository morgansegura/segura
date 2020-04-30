import React, { Fragment } from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'

const Tags = ({ tags, tagLink }) => {
  return (
    <div className="post-card-tags">
      {tags &&
        tags.map(tag => (
          <Fragment key={tag}>
            {tagLink ? (
              <span>
                <Link
                  className="post-card-tag-link"
                  // style={{ textDecoration: "none" }}
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
    </div>
  )
}

export default Tags
