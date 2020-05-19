import React from 'react'
import PropTypes from 'prop-types'
import styles from './HappyDots.module.scss'

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
      behavior: "smooth", block: "center", inline: "nearest"
    })
  }

  let happyDot = props.data.map( ( d, i ) => {
    return <li key={i} onClick={handleScrollTo.bind(this, d.id)} className={styles.HoverItem}>
            <div style={{backgroundColor: d.lineColor }} className={styles.Line}></div>
            <span style={{ width: `${props.textWidth}px`, color: `${props.textColor}`}} className={styles.Text}>{ d.text }</span>
          </li>
  })

  let sections = props.sectionData.map( (d, i) => {
    return <section
      id={d.id}
      ref={refs[i]}
      className={styles.RefSection}>
      <div
        className={styles.BgImage}
        style={{backgroundImage: `url(${d.img})`}}></div>
      <div className={styles.TextBox}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.</div>
    </section>
  })

  return (
    <div className={styles.HappyDotsContainer}>
      <ul style={{ height: `${props.height}px`,
        top: `${props.top}px`,
        zIndex: `${props.zLayer}`}}
        className={styles.HappyDots}>
        { happyDot }
      </ul>

      {sections}

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
