import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './HoverPods.module.scss';
import PageTitle from '../PageTitle/PageTitle';

type HoverPodsProps = {
  podData: {}[];
};

function HoverPods({ podData }: HoverPodsProps) {
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
        timeout={100}
      >
        <div
          style={{ backgroundImage: `url(${pod.podBgImage})`, transitionDelay: `${index * 0.1}s` }}
          className={`${styles.Pod} ${styles.HP}`}
        >
          <a href={pod.podLink} rel="noreferrer" target={pod.podNewTab ? '_blank' : ''}>
            <div style={{ backgroundColor: `${pod.podBgColor}` }} className={styles.HoverColor}>
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
    <section id={styles.HoverPodsPageContainer}>
      <PageTitle title="Hover Pods" />
      <TransitionGroup className={styles.HoverPodsContainer} appear>
        {hoverPod}
      </TransitionGroup>
    </section>

  );
}

export default HoverPods;
