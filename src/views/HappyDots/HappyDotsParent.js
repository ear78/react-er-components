import React from 'react'
import styles from './HappyDotsParent.module.scss'
import PageTitle from '../../components/PageTitle/PageTitle'
import Spacer from '../../components/Spacer/Spacer'
import Sections from '../../components/Sections/Sections'
import HappyDots from './HappyDots'
import { happyData, sectionData } from '../../assets/js/data'

class HappyDotsParent extends React.Component {
  render() {
    let elementRefs = sectionData.map(() => React.createRef());

    return (
      <div className={styles.HappyDotsParent}>
        <PageTitle title='HappyDots'/>
        <Spacer height={50}/>
        <div className={styles.HappyDotsContainer}>
          <HappyDots refs={elementRefs} data={happyData}  textColor='#fff'/>
          <Sections ref={elementRefs} data={sectionData}/>
        </div>
      </div>
    )
  }
}

export default HappyDotsParent
