import React from 'react'
import HappyDots from './HappyDots'
import { happyData, sectionData } from '../../assets/js/data'

class HappyDotsParent extends React.Component {
  render() {
    return <HappyDots data={happyData} sectionData={sectionData} textColor='#fff'/>
  }
}

export default HappyDotsParent
