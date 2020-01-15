import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import styles from './HoverPods.module.scss'
import PageTitle from '../components/PageTitle/PageTitle'

function hoverPods( props ) {

  let hoverPod = props.podData.map( ( pod, index ) => {
    return <div
    key={index}
    style={{ backgroundImage: `url(${pod.podBgImage})`, transitionDelay: `${ index * .1 }s` }}
    className={styles.Pod}>
    <div
      style={{ backgroundColor: `${pod.podBgColor}`}} className={styles.HoverColor}>
      <p
        style={{ color: `${pod.podTextColor}`}} className={styles.HoverText}>{pod.podText}</p>
    </div>
  </div>
  } )
  return (
    <section id={styles.HoverPodsPageContainer}>
      <PageTitle title="Hover Pods"/>
      <CSSTransitionGroup component="div" className={styles.HoverPodsContainer} transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionEnter={true}
      transitionLeave={true} transitionName={ {
      enter: styles.enter,
      enterActive: styles.enterActive,
      leave: styles.leave,
      leaveActive: styles.leaveActive,
      appear: styles.appear,
      appearActive: styles.appearActive
  } }>

  {hoverPod}
    </CSSTransitionGroup>
    </section>

  )
}

hoverPods.propTypes = {
  podData: PropTypes.array
}

export default hoverPods
