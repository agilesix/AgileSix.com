import React from 'react'
import PropTypes from 'prop-types'

const CapabilitityPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
        <div className={'mt-6 md:mt-0 md:p-2 md:w-1/2 flex'}>
            <div className={'bg-grey-light p-1'}>
                <div className={'bg-white mb-3'}>
                <div className={'py-10 mx-auto'} style={{maxWidth: 250}}>
                    <img src={data.featuredimage} alt={data.title} />
                </div>
                </div>
                <div className={'p-8'}>
                <h2 className={'font-bold text-xl md:text-2xl text-blue-dark leading-tight mb-3'}>{data.title}</h2>
                <div className={'text-l md:text-xl leading-tight'}>{data.shortdescription}</div>
                </div>
            </div>
        </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

CapabilitityPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CapabilitityPreview