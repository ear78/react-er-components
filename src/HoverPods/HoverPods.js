import React from 'react'
import PropTypes from 'prop-types'
import styles from './HoverPods.module.scss'

import building from '../assets/img/pinkBuilding.jpg'

function hoverPods(props) {
let podData = [
  { podBgImage: building,
    podBgColor: '#c50043ad',
    podTextColor: '#fff',
    podText: 'Hello'
  },
  { podBgImage: building,
    podBgColor: '#c50043ad',
    podTextColor: '#fff',
    podText: 'Hello'
  },
  { podBgImage: building,
    podBgColor: '#c50043ad',
    podTextColor: '#fff',
    podText: 'Hello'
  },
  { podBgImage: building,
    podBgColor: '#c50043ad',
    podTextColor: '#fff',
    podText: 'Hello'
  },
]

let hoverPod = podData.map(pod => {
  return <div
    style={{ backgroundImage: `url(${pod.podBgImage})`}}
    className={styles.Pod}>
    <div
      style={{ backgroundColor: `${pod.podBgColor}`}} className={styles.HoverColor}>
      <p
        style={{ color: `${pod.podTextColor}`}} className={styles.HoverText}>{pod.podText}</p>
    </div>
  </div>
})
  return (
    <section className={styles.HoverPodsContainer}>
      { hoverPod }
    </section>
  )
}

hoverPods.propTypes = {
  podBgColor: PropTypes.string,
  podTextColor: PropTypes.string,
  podText: PropTypes.string
}

export default hoverPods
