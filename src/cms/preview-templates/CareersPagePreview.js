import React from 'react'
import PropTypes from 'prop-types'
import {CareersTemplate} from '../../templates/careers'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

const CareersPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
        <CareersTemplate
            title={data.title}
            subtitle={data.subtitle}
            hero={data.hero}
            careers_intro={remark().use(recommended).use(remarkHtml).processSync(data['careers-intro']).toString()}
            join_title={data['join-title']}
            join_body={remark().use(recommended).use(remarkHtml).processSync(data['join-body']).toString()}
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

CareersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default CareersPagePreview