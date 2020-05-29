import React from 'react'
import styles from './ContainerRight.module.scss'

function ContainerRight(props) {
  return (
    <div className={styles.ContainerRight}>{props.children}</div>
  )
}

export default ContainerRight
