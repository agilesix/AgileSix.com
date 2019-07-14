import React from 'react'
import PropTypes from 'prop-types'
import ContactTemplate from '../../templates/contact'

const ContactPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
        <ContactTemplate
            title={data.title}
            subtitle={data.subtitle}
            preview={true}
        />
    )
  } else {
    return <div>Loading...</div>
  }
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPagePreview