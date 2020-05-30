import React from 'react'
import styles from './Home.module.scss'
import PageTitle from 'components/PageTitle/PageTitle'
import { homeData } from 'assets/js/data'

function home() {
  let er = {
    fontSize: '10rem',
    lineHeight: '130px'
  }

  let tag = {
    fontSize: '5rem'
  }
  return (
    <div className={styles.HomeContainer}>
      <p className={styles.Left}>
        <span>Welcome to ER Components! </span>
        {homeData.desc}&nbsp;<span>{homeData.components}</span>
      </p>
      <p className={styles.Right}>
        <div style={er}>ER</div>
        <PageTitle title="Components"/>
      </p>
    </div>
  )
}

export default home
