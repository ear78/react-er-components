import React from 'react'
import styles from './HoverPods.module.scss'

import building from '../assets/img/pinkBuilding.jpg'

function hoverPods(props) {
  return (
    <section>
      <div style={{ backgroundImage: `url(${building})`}} className={styles.Pod}>

        <div className={styles.HoverColor}>
          <p className={styles.HoverText}>Hello</p>
        </div>
      </div>
    </section>
  )
}

export default hoverPods
