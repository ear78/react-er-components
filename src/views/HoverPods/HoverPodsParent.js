import React from 'react'
import HoverPods from './HoverPods'
import { podData } from '../../assets/js/data'

class HoverPodsParent extends React.Component {
  render() {
    return <HoverPods podData={podData}/>
  }
}

export default HoverPodsParent
