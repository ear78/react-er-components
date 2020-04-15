import React from 'react'

import styles from './Copyright.module.css'

const copyright = (props) => {
  let d = new Date()
  let year = d.getFullYear()

  return (
    <div className={styles.Copyright}>
      <p>
        All Rights Reserved Elliot Richardson &copy; { year }
      </p>
    </div>
  )
}

export default copyright
