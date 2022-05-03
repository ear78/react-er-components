import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './HoverPods.module.scss';

type HoverPodsProps = {
  isSquared?: boolean;
  podData: {}[];
};

function HoverPods({ podData, isSquared = false }: HoverPodsProps) {
  const hoverPodSquared = isSquared ? styles.Squared : '';
  let hoverPod;
  if (podData.length) {
    hoverPod = podData.map((pod: any, index) => (
      <CSSTransition
        key={pod.podBgImage}
        classNames={{
          enterActive: styles.HPEnterActive,
          enterDone: styles.HPEnterDone,
          exitActive: styles.HPExit,
          exitDone: styles.HPExitActive,
        }}
        timeout={{
          appear: 900,
          enter: 100,
        }}
      >
        <div
          style={{ backgroundImage: `url(${pod.podBgImage})`, transitionDelay: `${index * 0.1}s` }}
          className={`${styles.Pod} ${styles.HP} ${hoverPodSquared}`}
        >
          <a href={pod.podLink} rel="noreferrer" target={pod.podNewTab ? '_blank' : ''}>
            <div style={{ backgroundColor: `${pod.podBgColor}` }} className={`${styles.HoverColor} ${hoverPodSquared}`}>
              <p style={{ color: `${pod.podTextColor}` }} className={styles.HoverText}>{pod.podText}</p>
            </div>
          </a>

        </div>
      </CSSTransition>
    ));
  } else {
    hoverPod = null;
  }

  return (
    <TransitionGroup className={styles.HoverPodsContainer} appear>
      {hoverPod}
    </TransitionGroup>
  );
}

export default HoverPods;
