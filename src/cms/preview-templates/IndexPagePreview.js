import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../../components/hero'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        className={`bg-blue-dark`}
        textClass={`text-white`}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview