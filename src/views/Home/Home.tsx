import React from 'react'
import styles from './Home.module.scss'
import PageTitle from '../../components/PageTitle/PageTitle'
import { homeData } from '../../assets/js/data'

function Home() {

  return (
    <div className={styles.HomeContainer}>
      <p className={styles.Left}>
        <span>Welcome to ER Components! </span>
        {homeData.desc}&nbsp;<span>{homeData.components}</span>
      </p>
      <p className={styles.Right}>
        <div className={styles.HomeTitle}>ER</div>
        <PageTitle title="Components"/>
      </p>
    </div>
  )
}

export default Home
