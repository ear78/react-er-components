import React from 'react'
import styles from './HappyDots.module.scss'

function happyDots( props ) {
  let data = [
    {
      text: 'Market Place',
      lineColor: '#000',
      dotColor: ''
    },
    {
      text: 'Kochava Collective',
      lineColor: '',
      dotColor: ''
    },
    {
      text: 'Attribution',
      lineColor: '',
      dotColor: ''
    },
    {
      text: 'SmartLink',
      lineColor: '',
      dotColor: ''
    },
    {
      text: 'SmartLink',
      lineColor: '',
      dotColor: ''
    }
  ]

  let happyDot = data.map( d => {
    return <li className={styles.HoverItem}>
            <div style={{backgroundColor: d.lineColor }} className={styles.Line}></div>
            <a className={styles.Text}>{ d.text }</a>
          </li>
  } )

  return (
    <ul style={{ height: `${props.height}px`}} className={styles.HappyDots}>
      { happyDot }
    </ul>
  )
}

export default happyDots
