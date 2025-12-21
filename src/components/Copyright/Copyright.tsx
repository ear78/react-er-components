import React from 'react';
import styles from './Copyright.module.scss';

const copyright = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div data-testid='copyright-component' className={styles.Copyright}>
      <p>
        All Rights Reserved Elliot Richardson &copy;
        {' '}
        {year}
      </p>
    </div>
  );
};

export default copyright;
