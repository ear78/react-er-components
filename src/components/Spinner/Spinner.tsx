import React from 'react';
import styles from './Spinner.module.scss';

type SpinnerProps = {
  mounted: boolean;
};

function Spinner({ mounted }: SpinnerProps) {
  const showSpinner = mounted ? 'none' : 'block';
  return (
    <div style={{ display: showSpinner }} className={styles.Spinner}>
      <div className={styles.Circle}>
        <div className={styles.Circle2} />
      </div>
    </div>
  );
}

export default Spinner;
