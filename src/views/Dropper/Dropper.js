import React from 'react'
import styles from './Dropper.module.scss'

const dropper = ( props ) => {
  return ( <section>
    <header onClick={props.click} className={styles.DropperHeader}>
      I'm a DropperHeader
    </header>
    <div className={styles.DropperContent}>
      I'm the content that is connected to the dropper...
    </div>
  </section> )
}

export default dropper
