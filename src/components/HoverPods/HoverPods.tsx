import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
        <div style={{ transitionDelay: `${index * delay}ms` }} className={styles.HP}>
          <div style={{ backgroundImage: `url(${pod.podBgImage})` }} className={`${styles.Pod} ${hoverPodSquared}`}>
            <a href={pod.podLink} rel="noreferrer" target={openTab ? '_blank' : ''}>
              <div style={{ backgroundColor: `${hoverColor}ad` }} className={`${styles.HoverColor} ${hoverPodSquared}`}>
                <p className={styles.HoverText}>{pod.podText}</p>
              </div>
            </a>
          </div>
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
