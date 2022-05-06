import React from 'react';
import styles from './HappyDots.module.scss';

type HappyDotsProps = {
  height?: string;
  top?: string;
  zLayer?: string;
  data: {}[];
  textWidth?: string;
  dotColor?: string;
  textColor?: string;
  refs: {}[];
};

function Dots({
  height, top, zLayer, data, textWidth, dotColor, textColor, refs,
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
    <li
      key={d.id}
      onClick={() => handleScrollTo(refs[i])}
      style={{ background: dotColor, color: textColor }}
      className={styles.HoverItem}
    >
      <div className={styles.Line} />
      <span style={{ width: `${textWidth}px` }} className={styles.Text}>{ d.text }</span>
    </li>
  ));

  return (
    <>
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
      <div className={styles.HoverBackground} />
    </>
  );
}

export default Dots;
