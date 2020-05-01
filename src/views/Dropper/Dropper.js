import React, { useState } from 'react'
import styles from './Dropper.module.scss'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Dropper = ( props ) => {

  const [isToggled, setToggled] = useState(false)

  let active = isToggled ? styles.Active : ''

  return ( <section>
    <header onClick={() => setToggled(!isToggled)} className={styles.DropperHeader}>
      <p className={styles.DropperTitle}>{props.title}</p>
      <FontAwesomeIcon className={`${styles.DropperIcon} ${active}`} icon={props.iconName} />
    </header>
    <div className={`${styles.DropperContent} ${active}`}>
      {props.children}
    </div>
  </section> )
}

export default Dropper
