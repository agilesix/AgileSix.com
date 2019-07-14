import React from 'react'
import PropTypes from 'prop-types'
import {CapabilitiesTemplate} from '../../templates/capabilities'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

const CapabilitiesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
        <CapabilitiesTemplate
            title={data.title}
            subtitle={data.subtitle}
            hero={data.hero}
            capabilities={data.capabilities}
            intro={remark().use(recommended).use(remarkHtml).processSync(data.intro).toString()}
            capabilities_title={data['capabilities-title']}
            capabilities_body={remark().use(recommended).use(remarkHtml).processSync(data['capabilities-body']).toString()}
            contracts_body={remark().use(recommended).use(remarkHtml).processSync(data['contracts-body']).toString()}
            process_title={data['process-title']}
            process_body={remark().use(recommended).use(remarkHtml).processSync(data['process-body']).toString()}
            cta={data.cta}
            preview={true}
        />
    )
  } else {
    return <div>Loading...</div>
  }
}

CapabilitiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CapabilitiesPagePreview