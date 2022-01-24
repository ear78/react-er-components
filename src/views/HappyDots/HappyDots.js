import React from 'react'
import PropTypes from 'prop-types'
import styles from './HappyDots.module.scss'

function HappyDots( props ) {

    function handleScrollTo( v ) {
        v.current.scrollIntoView( {
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        } )
    }

    let happyDot = props.data.map( ( d, i ) => {
        return <li key={i} onClick={handleScrollTo.bind(this, props.refs[i])} className={styles.HoverItem}>
            <div style={{backgroundColor: d.lineColor }} className={styles.Line}></div>
            <span style={{ width: `${props.textWidth}px`, color: `${props.textColor}`}} className={styles.Text}>{ d.text }</span>
          </li>
    } )

    return (
      <ul style={{ height: `${props.height}px`,
        top: `${props.top}px`,
        zIndex: `${props.zLayer}`}}
        className={styles.HappyDots}>
        { happyDot }
      </ul>
    )
}

HappyDots.propTypes = {
    height: PropTypes.string,
    top: PropTypes.string,
    zLayer: PropTypes.string,
    data: PropTypes.array,
    textWidth: PropTypes.string
}

export default HappyDots
