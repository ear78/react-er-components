import React from 'react'
import PropTypes from 'prop-types'
import styles from './PageTitle.module.scss'

function pageTitle( props ) {
  let alt = props.alt ? styles.Alt : ''

  return ( <h1 style={{color: props.color}} className={`${styles.PageTitle} ${alt}`}>&lt;{props.title}/&gt;</h1> )
}

pageTitle.propTypes = {
  alt: PropTypes.bool,
  title: PropTypes.string.isRequired
}

export default pageTitle
