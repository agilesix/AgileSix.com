import React from 'react'
import PropTypes from 'prop-types'
import {BlogTemplate} from '../../templates/blog'

const BlogPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
        <BlogTemplate
            title={data.title}
            subtitle={data.subtitle}
            hero={data.hero}
            cta={{
                cta_visible: data['cta-visible'],
                cta_title: data['cta=title'],
                cta_url: data['cta-url'],
                cta_description: data['cta-description'],
                cta_label: data['cta-label'],
            }}
            preview={true}
        />
    )
  } else {
    return <div>Loading...</div>
  }
}

BlogPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BlogPagePreview