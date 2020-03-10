import React from 'react'
import PropTypes from 'prop-types'
import styles from './PageTitle.module.scss'

function pageTitle( props ) {
  return ( <h1 className={styles.PageTitle}>&lt;{props.title}/&gt;</h1> )
}

pageTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default pageTitle
