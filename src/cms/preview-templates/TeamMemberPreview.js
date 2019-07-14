import React from 'react'
import PropTypes from 'prop-types'
import {TeamTemplate} from '../../templates/team'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

const TeamPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data);

  if (data) {
    return (
        <TeamTemplate
            title={data.title}
            subtitle={data.subtitle}
            team_intro={remark().use(recommended).use(remarkHtml).processSync(data['team-intro']).toString()}
            join_title={data['join-title']}
            join_body={remark().use(recommended).use(remarkHtml).processSync(data['join-body']).toString()}
            cta={{
                cta_visible: data['cta-visible'],
                cta_title: data['cta-title'],
                cta_url: data['cta-url'],
                cta_description: data['cta-description'],
                cta_label: data['cta-label']
            }}
            preview={true}
        />
    )
  } else {
    return <div>Loading...</div>
  }
}

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TeamPagePreview