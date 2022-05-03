import React, { useRef } from 'react';
import styles from './HappyDotsParent.module.scss';
import PageTitle from '../../components/PageTitle/PageTitle';
import Spacer from '../../components/Spacer/Spacer';
import Dots from './Dots';
import { happyData, sectionData } from '../../assets/js/data';

function HappyDots() {
  const elementRefs = sectionData.map(() => useRef<HTMLUListElement>(null));

  const sections = sectionData.map((d, i) => (
    <section
      key={d.id}
      ref={elementRefs[i]}
      className={(i % 2 !== 0) ? styles.RefReverse : styles.RefSection}
    >
      <div
        className={styles.BgImage}
        style={{ backgroundImage: `url(${d.img})` }}
      />
      <div className={styles.TextBox}>{d.text}</div>
    </section>
  ));

  return (
    <div className={styles.HappyDotsParent}>
      <PageTitle title="HappyDots" />
      <Spacer height={50} />
      <div className={styles.HappyDotsContainer}>
        <Dots refs={elementRefs} data={happyData} textColor="#fff" />
        {sections}
      </div>
    </div>
  );
}

export default HappyDots;
