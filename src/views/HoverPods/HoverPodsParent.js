import React from 'react'
import HoverPods from '../../components/HoverPods/HoverPods'
import { podData } from '../../assets/js/data'

const HoverPodsParent = ({ mounted}) => {
  return <HoverPods mounted={mounted} podData={podData} />
}

export default HoverPodsParent
