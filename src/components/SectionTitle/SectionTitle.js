import React from 'react'
import styles from './SectionTitle.module.scss'

function SectionTitle(props) {
  return <h2
    style={{ textAlign: props.textAlign }} className={styles.SectionTitle}>{props.children}</h2>
}

export default SectionTitle
