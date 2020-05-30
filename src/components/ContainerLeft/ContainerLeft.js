import React from 'react'
import PropTypes from 'prop-types'
import styles from './ContainerLeft.module.scss'

function ContainerLeft(props) {
  return (
    <div
      style={{ background: props.background }}
      className={styles.ContainerLeft}>{props.children}</div>
  )
}

ContainerLeft.defaultProps = {
  background: 'transparent'
}

ContainerLeft.propTypes = {
  background: PropTypes.string
}

export default ContainerLeft
