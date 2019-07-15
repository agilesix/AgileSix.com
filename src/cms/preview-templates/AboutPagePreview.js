import React from 'react'
import PropTypes from 'prop-types'
import {AboutTemplate} from '../../templates/about'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
        <AboutTemplate
            title={data.title}
            subtitle={data.subtitle}
            intro={remark().use(recommended).use(remarkHtml).processSync(data.intro).toString()}
            purpose_title={data['purpose-title']}
            purpose_body={remark().use(recommended).use(remarkHtml).processSync(data['purpose-body']).toString()}
            history_title={data['history-title']}
            history_body={remark().use(recommended).use(remarkHtml).processSync(data['history-body']).toString()}
            cta={data.cta}
            hero={data.hero}
            preview={true}
        />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview