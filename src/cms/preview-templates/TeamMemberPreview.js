import React from 'react'
import PropTypes from 'prop-types'

const TeamMemberPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <div className={'mt-6 md:mt-0 px-8 sm:p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'}>
        <div className={'mx-auto'}>
          <img src={data.picture} alt={data.name} />
        </div>
        <div className={'py-2'}>
          <h2 className={'font-bold text-l leading-tight'}>{data.name}</h2>
          <div className={'leading-tight'}>{data.position}</div>
        </div>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

TeamMemberPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TeamMemberPreview