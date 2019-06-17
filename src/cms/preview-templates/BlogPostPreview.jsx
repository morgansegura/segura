import React from 'react';
import PropTypes from 'prop-types';
import BlogIndex from '../../pages/blog';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogIndex
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
