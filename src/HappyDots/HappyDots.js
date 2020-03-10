import React from 'react'
import PropTypes from 'prop-types'
import styles from './HappyDots.module.scss'

import echoTower from '../assets/img/echoTower.jpg'
import jail from '../assets/img/jail.jpg'
import stairway from '../assets/img/stairway.jpg'
import stripes from '../assets/img/stripes.jpg'
import chairs from '../assets/img/chairs.jpg'

function happyDots( props ) {

  let test = React.createRef()
  let test1 = React.createRef()
  let test2 = React.createRef()
  let test3 = React.createRef()
  let test4 = React.createRef()
  let refs = [test, test1, test2, test3, test4]

  function handleScrollTo( v ) {
    let found = refs.find(ref => {
      return ref.current.id === v
    })
    found.current.scrollIntoView({
      behavior: "smooth", block: "end", inline: "nearest"
    })
  }

  let happyDot = props.data.map( ( d, i ) => {
    return <li key={i} onClick={handleScrollTo.bind(this, d.id)} className={styles.HoverItem}>
            <div style={{backgroundColor: d.lineColor }} className={styles.Line}></div>
            <span style={{ width: `${props.textWidth}px`, color: `${props.textColor}`}} className={styles.Text}>{ d.text }</span>
          </li>
  } )

  return (
    <div className={styles.HappyDotsContainer}>
      <ul style={{ height: `${props.height}px`,
        top: `${props.top}px`,
        zIndex: `${props.zLayer}`}}
        className={styles.HappyDots}>
        { happyDot }
      </ul>

      <section
        id="test"
        ref={test}
        className={styles.RefSection}>
        <div
          className={styles.BgImage}
          style={{backgroundImage: `url(${echoTower})`}}></div>
        <div className={styles.TextBox}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.</div>
      </section>
      <section
        id="test1"
        ref={test1}
        className={styles.RefSection}>
        <div
          className={styles.BgImage}
          style={{backgroundImage: `url(${jail})`}}></div>
        <div className={styles.TextBox}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.</div>
      </section>
      <section
        id="test2"
        ref={test2}
        className={styles.RefSection}>
        <div
          className={styles.BgImage}
          style={{backgroundImage: `url(${stairway})`}}></div>
        <div className={styles.TextBox}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.</div>
      </section>
      <section
        id="test3"
        ref={test3}
        className={styles.RefSection}>
          <div
            className={styles.BgImage}
            style={{backgroundImage: `url(${stripes})`}}></div>
          <div className={styles.TextBox}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.</div>
      </section>
      <section id="test4"
        ref={test4}
        className={styles.RefSection}
        >
        <div className={styles.BgImage} style={{backgroundImage: `url(${chairs})`}}></div>
        <div className={styles.TextBox}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.</div>

      </section>
    </div>
  )
}

happyDots.propTypes = {
  height: PropTypes.string,
  top: PropTypes.string,
  zLayer: PropTypes.string,
  data: PropTypes.array,
  textWidth: PropTypes.string
}

export default happyDots
