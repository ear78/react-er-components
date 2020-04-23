import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import HappyDots from './HappyDots'
import { happyData, sectionData } from '../../assets/js/data'

class HappyDotsParent extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title='HappyDots' alt={true}/>
        <HappyDots data={happyData} sectionData={sectionData} textColor='#fff'/>
      </div>
    )
  }
}

export default HappyDotsParent
