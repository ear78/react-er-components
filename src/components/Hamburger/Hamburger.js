import React from 'react'
import styles from './Hamburger.module.scss'

function hamburger(props) {
  let isActive = props.isActive ? styles.isActive : ''
  return (
    <button onClick={props.click} className={`${styles.Hamburger} ${styles.HamburgerSlider} ${isActive}`} type="button">
      <span className={styles.HamburgerBox}>
        <span className={styles.HamburgerInner}></span>
      </span>
    </button>
  )
}

export default hamburger
