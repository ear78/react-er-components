import React from 'react';
import HoverPods from '../../components/HoverPods/HoverPods';
import { podData } from '../../assets/js/data';

function HoverPodsView() {
  return <HoverPods podData={podData} />;
}

export default HoverPodsView;
