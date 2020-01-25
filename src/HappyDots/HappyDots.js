import React from 'react'
import styles from './HappyDots.module.scss'

function happyDots(props){
  return (
    <ul className={styles.HappyDots} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '185px'}}>
      <li className={styles.HoverItem}>
        <div className={styles.Line}></div>
        <a className={styles.Text}>Hello</a>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
}

export default happyDots
