import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import styles from './HoverPods.module.scss'
import PageTitle from '../../components/PageTitle/PageTitle'

class hoverPods extends React.Component {
  state = {
    hoverPodsMounted: false
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState( ( state ) => {
        return { hoverPodsMounted: !state.hoverPodsMounted }
      } )
    }, 900 )

  }
  render() {
    let hoverPod
    if ( this.state.hoverPodsMounted ) {
      hoverPod = this.props.podData.map( ( pod, index ) => {
        return <div
        key={index}
        style={{ backgroundImage: `url(${pod.podBgImage})`, transitionDelay: `${ index * .1 }s` }}
        className={styles.Pod}>
        <a href={pod.podLink} rel="noreferrer" target={pod.podNewTab ? '_blank' : ''}>
          <div style={{ backgroundColor: `${pod.podBgColor}`}} className={styles.HoverColor}>
            <p style={{ color: `${pod.podTextColor}`}} className={styles.HoverText}>{pod.podText}</p>
          </div>
        </a>

      </div>
      } )
    } else {
      hoverPod = null
    }

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
}

hoverPods.propTypes = {
  podData: PropTypes.array
}

export default hoverPods
