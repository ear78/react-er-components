import React, { useRef } from 'react';
import styles from './Sections.module.scss';

type SectionsProps = {
  data: {}[];
};

function Sections({ data }: SectionsProps) {
  const elementRefs = data.map(() => useRef<HTMLElement>(null));
  const section = data.map((d: any, i) => (
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
  return section;
}

export default Sections;
