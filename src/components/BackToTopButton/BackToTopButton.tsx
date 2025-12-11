import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './BackToTopButton.module.scss';

export default function BackToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={styles.BackToTop}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
}
