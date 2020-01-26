import React from 'react'
import styles from './HappyDots.module.scss'

function happyDots( props ) {
  let data = [ {
      id: 'test',
      text: 'Market Place',
      lineColor: '#000',
      dotColor: ''
    },
    {
      id: 'test-1',
      text: 'Kochava Collective',
      lineColor: '',
      dotColor: ''
    },
    {
      id: 'test-2',
      text: 'Attribution',
      lineColor: '',
      dotColor: ''
    },
    {
      id: 'test-3',
      text: 'SmartLink',
      lineColor: '',
      dotColor: ''
    },
    {
      id: 'test-4',
      text: 'User Experience',
      lineColor: '',
      dotColor: ''
    }
  ]

  let test = React.createRef()
  let test1 = React.createRef()
  let test2 = React.createRef()

  function handleScrollTo( v ) {
    console.log( 'id :', v );
    test.current.scrollIntoView()
  }

  let happyDot = data.map( ( d, i ) => {
    return <li key={i} onClick={handleScrollTo.bind(this, d.id)} className={styles.HoverItem}>
            <div style={{backgroundColor: d.lineColor }} className={styles.Line}></div>
            <span style={{ width: `${props.textWidth}px`}} className={styles.Text}>{ d.text }</span>
          </li>
  } )

  return (
    <div>
      <ul style={{ height: `${props.height}px`}} className={styles.HappyDots}>
        { happyDot }
      </ul>

      <section style={{height: '500px', width: '100%', background: 'grey'}}></section>
      <section ref={test} style={{height: '500px', width: '100%', background: '#999'}}></section>
      <section ref={test1} style={{height: '500px', width: '100%', background: '#000'}}></section>
      <section ref={test2} style={{height: '500px', width: '100%', background: '#454545'}}></section>
    </div>
  )
}

export default happyDots
