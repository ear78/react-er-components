import React from 'react';
import HoverPods from '../../components/HoverPods/HoverPods';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './HoverPodsView.module.scss';
import { podData } from '../../assets/js/data';

function HoverPodsView() {
  return (
    <section id={styles.HoverPodsView}>
      <PageTitle title="HoverPods" />
      <HoverPods podData={podData} />
    </section>
  );
}

export default HoverPodsView;
