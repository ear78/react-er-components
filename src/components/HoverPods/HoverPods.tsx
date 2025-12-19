import React from 'react';
import { useSelector } from 'react-redux';
import styles from './HoverPods.module.scss';

type HoverPodsProps = {
  isSquared?: boolean;
  hoverColor?: string;
  openTab?: boolean;
  podData: {}[];
  delay?: number;
};

function HoverPods({
  delay = 0, podData, isSquared = false, hoverColor = '', openTab = true,
}: HoverPodsProps) {
  const hoverPodSquared = isSquared ? styles.Squared : '';
  const isLoading = useSelector((state: any) => state.app.appLoading);

  let hoverPod;
  if (podData.length) {
    hoverPod = podData.map((pod: any, index) => (
      <div style={{ transitionDelay: `${index * delay}ms` }} className={`${styles.HP} ${!isLoading ? styles.FadeIn : ''}`}>
        <div style={{ backgroundImage: `url(${pod.podBgImage})` }} className={`${styles.Pod} ${hoverPodSquared}`}>
          <a href={pod.podLink} rel="noreferrer" target={openTab ? '_blank' : ''}>
            <div style={{ backgroundColor: `${hoverColor}ad` }} className={`${styles.HoverColor} ${hoverPodSquared}`}>
              <p className={styles.HoverText}>{pod.podText}</p>
            </div>
          </a>
        </div>
      </div>
    ));
  } else {
    hoverPod = null;
  }

  return (
    <div className={`${styles.HoverPodsContainer}`}>
      {hoverPod}
    </div>
  );
}
export default HoverPods;
