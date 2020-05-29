import React from 'react'
import styles from './ContainerLeft.module.scss'

function ContainerLeft(props) {
  return (
    <div className={styles.ContainerLeft}>{props.children}</div>
  )
}

export default ContainerLeft
