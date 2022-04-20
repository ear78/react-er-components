import React from 'react';
import styles from './ParaText.module.scss';

type ParaTextProps = {
  children: React.ReactNode;
};

function ParaText({ children }: ParaTextProps) {
  return (
    <p className={styles.ParaText}>{children}</p>
  );
}

export default ParaText;
