import React from 'react'
import PropTypes from 'prop-types'
import styles from './H3Comp.module.scss'

function H3Comp(props) {
  const margin = {
    margin: props.margin,
    padding: props.padding
  }

  return <h3 style={margin} className={styles.H3Comp}>{props.title}</h3>
}

H3Comp.propTypes = {
  title: PropTypes.string,
  margin: PropTypes.string
}

export default H3Comp
