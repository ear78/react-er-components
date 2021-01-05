import React from 'react'
import styles from './ParaText.module.scss'

function ParaText(props) {
  return (
    <p className={styles.ParaText}>{props.children}</p>
  )
}

export default ParaText
