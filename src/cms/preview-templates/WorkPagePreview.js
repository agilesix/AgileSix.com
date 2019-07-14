import React from 'react'
import PropTypes from 'prop-types'
import {WorkTemplate} from '../../templates/work'

const WorkPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
        <WorkTemplate
            title={data.title}
            subtitle={data.subtitle}
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

WorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default WorkPagePreview