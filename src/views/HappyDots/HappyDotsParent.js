import React from 'react'
import styles from './HappyDotsParent.module.scss'
import PageTitle from '../../components/PageTitle/PageTitle'
import Spacer from '../../components/Spacer/Spacer'
import HappyDots from './HappyDots'
import { happyData, sectionData } from '../../assets/js/data'

class HappyDotsParent extends React.Component {
  render() {
    return (
      <div className={styles.HappyDotsParent}>
        <PageTitle title='HappyDots'/>
        <Spacer height={50}/>
        <HappyDots data={happyData} sectionData={sectionData} textColor='#fff'/>
      </div>
    )
  }
}

export default HappyDotsParent
