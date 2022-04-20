import React from 'react';
import styles from './HappyDots.module.scss';

type HappyDotsProps = {
  height?: string;
  top?: string;
  zLayer?: string;
  data: {}[];
  textColor?: string;
  textWidth?: string;
  refs: {}[];
};

function Dots({
  height, top, zLayer, data, textColor, textWidth, refs,
}: HappyDotsProps) {
  // const elementRefs = data.map(() => useRef<HTMLUListElement>(null));

  function handleScrollTo(v: any) {
    v.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  }

  const happyDot = data.map((d: any, i) => (
    <li key={d.id} onClick={() => handleScrollTo(refs[i])} className={styles.HoverItem}>
      <div style={{ backgroundColor: d.lineColor }} className={styles.Line} />
      <span style={{ width: `${textWidth}px`, color: `${textColor}` }} className={styles.Text}>{ d.text }</span>
    </li>
  ));

  return (
    <ul
      style={{
        height: `${height}px`,
        top: `${top}px`,
        zIndex: `${zLayer}`,
      }}
      className={styles.HappyDots}
    >
      { happyDot }
    </ul>
  );
}

export default Dots;
