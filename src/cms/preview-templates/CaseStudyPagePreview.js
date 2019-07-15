import React from 'react'
import PropTypes from 'prop-types'
import {CaseStudyTemplate} from '../../templates/casestudy'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

const CaseStudyPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <CaseStudyTemplate
          title={data.title}
          subtitle={data.subtitle}
          hero={data.hero}
          body={remark().use(recommended).use(remarkHtml).processSync(data.body).toString()}
          background={data.background}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CaseStudyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CaseStudyPagePreview