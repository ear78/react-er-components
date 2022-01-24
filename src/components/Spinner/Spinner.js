import React from 'react'
import styles from './Spinner.module.scss'

const Spinner = ({ mounted }) => {

  let showSpinner = mounted ? 'none' : 'block';
    return (
      <div style={{display: showSpinner}} className={styles.Spinner}>
        <div className={styles.Circle}>
          <div className={styles.Circle2}></div>
        </div>
      </div>
    )
}

export default Spinner
