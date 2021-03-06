import React from 'react'
import PropTypes from 'prop-types'
import styles from './Banner.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function banner( props ) {
  let btnColor = props.btnColor ? props.btnColor : ''
  let overlay = props.overlay ? '' : styles.OverlayNone
  let overlayDark = props.overlayDark ? styles.Dark : ''
  let overlayFull = props.overlayFull ? styles.Full : ''
  let textAlign = props.textAlign === 'center' ? styles.Center : props.textAlign === 'right' ? styles.Right : ''
  let textColor = props.textColor === 'dark' ? styles.DarkText : ''
  let backgroundImg = {
    backgroundImage: `url(${props.bgImage})`
  }
  let preTitle = !props.preTitle ? 'Welcome to Page Banner' : props.preTitle
  let title = !props.title ? 'Page Banner' : props.title
  let subTitle = !props.subTitle ? 'Banners to help your site look great!' : props.subTitle
  let btnText = !props.btnText ? 'Kontakt' : props.btnText

  return (
    <div
      className={`${styles.BackgroundImg} ${textAlign}`}
        style={backgroundImg}>
        <div className={`${styles.Overlay} ${overlayFull} ${overlayDark} ${overlay}`}>
            <p className={`${styles.PreTitle} ${textColor}`}>{preTitle}</p>
              <h1 className={`${styles.Title} ${textColor}`}>{title}</h1>
                <p className={`${styles.SubTitle} ${textColor}`}>{subTitle}</p>
            <button style={{background: `${props.btnColor}`}} className={styles.Button}>
              <a href={props.ctaUrl}
                target={props.target ? '_blank' : ''}
                rel="noreferrer">{btnText}&nbsp;
                <FontAwesomeIcon className={styles.Arrow} icon={faArrowRight}/>
              </a>
            </button>
          </div>
        </div>
  )
}

banner.defaultProps = {
  target: true,
  overlay: true,
  overlayFull: false,
  overlayDark: false
};

banner.propTypes = {
  bgImage: PropTypes.string,
  btnColor: PropTypes.string,
  btnText: PropTypes.string,
  ctaUrl: PropTypes.string,
  preTitle: PropTypes.string,
  overlay: PropTypes.bool,
  subTitle: PropTypes.string,
  target: PropTypes.bool,
  textColor: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default banner
