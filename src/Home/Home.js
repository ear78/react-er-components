import React from 'react'
import styles from './Home.module.scss'

function home() {
  let er = {
    fontSize: '10rem',
    lineHeight: '130px'
  }

  let components = {
    fontSize: '1rem',
    fontWeight: '400',
    letterSpacing: '13px',
    textTransform: 'uppercase'
  }

  let tag = {
    fontSize: '5rem'
  }
  return (
    <div className={styles.HomeContainer}>
      <p className={styles.Left}>
        <span>Welcome to ER Components!</span> Please use the navigation to preview and try out these components I built from the ground up with React.js.  The purpose of this project is show my skills as a Front End UI Developer, and also to show the process of building and design UI/UX components from the ground up.
      </p>
      <p className={styles.Right}>
        <div style={er}>ER</div>
        <div style={components}>&lt;Components/&gt;</div>
      </p>
    </div>
  )
}

export default home
