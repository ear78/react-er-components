import React from 'react'
import PropTypes from 'prop-types'
import styles from './Banner.module.scss'

function banner( props ) {
  let btnColor = props.btnColor
  let overlayDark = props.overlayDark ? styles.Dark : ''
  let overlayFull = props.overlayFull ? styles.Full : ''
  let textAlign = props.textAlign === 'center' ? styles.Center : props.textAlign === 'right' ? styles.Right : ''
  let textColor = props.textColor === 'dark' ? styles.DarkText : ''
  let backgroundImg = {
    backgroundImage: `url(${props.bgImage})`
  }

  return (
    <div
      className={`${styles.BackgroundImg} ${textAlign}`}
        style={backgroundImg}>
        <div className={`${styles.Overlay} ${overlayFull} ${overlayDark}`}>
            <p className={`${styles.PreTitle} ${textColor}`}>{props.preTitle}</p>
              <h1 className={`${styles.Title} ${textColor}`}>{props.title}</h1>
                <p className={`${styles.SubTitle} ${textColor}`}>{props.subTitle}</p>
            <button style={{background: `${props.btnColor}`}} className={styles.Button}>
              <a  href={props.cta}
                target={props.target ? '_blank' : ''}>{props.btnText}</a>
            </button>
          </div>
        </div>
  )
}

banner.defaultProps = {
  target: true,
  overlayFull: false,
  overlayDark: false
};

banner.propTypes = {
  bgImage: PropTypes.string,
  btnColor: PropTypes.string,
  preTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  btnText: PropTypes.string,
  cta: PropTypes.string,
  target: PropTypes.bool,
  textColor: PropTypes.string
}

export default banner
