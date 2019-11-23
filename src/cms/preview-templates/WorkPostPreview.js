import React from 'react'
import PropTypes from 'prop-types'
import { WorkPostTemplate } from '../../templates/work-post'

const WorkPostPreview = ({ entry, widgetFor }) => (
  <WorkPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

WorkPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WorkPostPreview
