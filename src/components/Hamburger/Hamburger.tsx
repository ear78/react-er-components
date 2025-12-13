import React from 'react';
import styles from './Hamburger.module.scss';

type HamburgerProps = {
  isActive: boolean;
  click: () => void;
  isDarkMode?: boolean;
};

function Hamburger({ isActive, click, isDarkMode }: HamburgerProps) {
  const styleActive = isActive ? styles.isActive : '';
  return (
    <button aria-pressed={isActive} aria-label="Toggle menu" onClick={click} className={`${styles.Hamburger} ${styles.HamburgerSlider} ${styleActive} ${isDarkMode ? styles.Dark : ''}`} type="button">
      <span className={styles.HamburgerBox}>
        <span className={styles.HamburgerInner} />
      </span>
    </button>
  );
}

export default Hamburger;
