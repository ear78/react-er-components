import React from 'react'
import PropTypes from 'prop-types'

function pageTitle( props ) {
  let titleStyle = {
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: '400',
    letterSpacing: '13px',
    textTransform: 'uppercase'
  }
  return ( <h1 style={titleStyle}>&lt;{props.title}/&gt;</h1> )
}

pageTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default pageTitle
