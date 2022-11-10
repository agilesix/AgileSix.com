import React from 'react'
import PropTypes from 'prop-types'
import {BlogPostTemplate} from '../../templates/blogpost'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

const BlogPostPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <BlogPostTemplate
          title={data.title}
          subtitle={data.subtitle}
          hero={data.hero}
          body={remark().use(recommended).use(remarkHtml).processSync(data.body).toString()}
          audio={data?.audio}
          background={data.background}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

BlogPostPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BlogPostPagePreview
