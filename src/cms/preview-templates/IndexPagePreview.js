import React from "react"
import PropTypes from "prop-types"
import Hero from "../../components/hero"

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        hero={data.hero}
        className="bg-blue-dark"
        titleClass="text-white"
        subtitleClass="text-blue-light"
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
