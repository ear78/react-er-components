import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import styles from './DarkModeButton.module.scss';

interface DarkModeButtonProps {
  isDarkMode: boolean;
  handleDarkMode: () => void;
}

export default function DarkModeButton({ isDarkMode, handleDarkMode }: DarkModeButtonProps) {
  return (
    <button type="button" aria-label="Toggle dark mode" className={styles.DarkModeToggle} onClick={handleDarkMode}>
      <FontAwesomeIcon icon={faMoon} className={`${styles.Moon} ${!isDarkMode ? styles.active : ''}`} />
      <FontAwesomeIcon icon={faSun} className={`${styles.Sun} ${isDarkMode ? styles.active : ''}`} />
    </button>
  );
}
