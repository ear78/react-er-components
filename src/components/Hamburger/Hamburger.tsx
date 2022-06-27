import React from 'react';
import styles from './Hamburger.module.scss';

type HamburgerProps = {
  isActive: boolean;
  click: () => void;
};

function Hamburger({ isActive, click }: HamburgerProps) {
  const styleActive = isActive ? styles.isActive : '';
  return (
    <button aria-pressed={isActive} onClick={click} className={`${styles.Hamburger} ${styles.HamburgerSlider} ${styleActive}`} type="button">
      <span className={styles.HamburgerBox}>
        <span className={styles.HamburgerInner} />
      </span>
    </button>
  );
}

export default Hamburger;
