import React from 'react';
import styles from './Spinner.module.scss';

type SpinnerProps = {
  mounted: boolean;
  isDarkMode: boolean;
};

function Spinner({ mounted, isDarkMode }: SpinnerProps) {
  const showSpinner = !mounted ? 'none' : 'block';
  return (
    <div style={{ display: showSpinner }} className={`${styles.Spinner} ${isDarkMode ? styles.Dark : ''}`}>
      <div className={styles.Circle}>
        <div className={styles.Circle2} />
      </div>
    </div>
  );
}

export default Spinner;
