import React from 'react';
import HoverPods from '../../components/HoverPods/HoverPods';
import { podData } from '../../assets/js/data';

type HoverPodsParentProps = {
  mounted: boolean;
};

function HoverPodsParent({ mounted }: HoverPodsParentProps) {
  return <HoverPods mounted={mounted} podData={podData} />;
}

export default HoverPodsParent;
