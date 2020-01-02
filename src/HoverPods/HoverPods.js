import React from 'react'
import PropTypes from 'prop-types'
import styles from './HoverPods.module.scss'

function hoverPods(props) {

let hoverPod = props.podData.map((pod, index) => {
  return <div
    key={index}
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
  podData: PropTypes.array
}

export default hoverPods
