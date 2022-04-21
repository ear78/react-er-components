import React from 'react';
import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
  textAlign: any;
  children: React.ReactNode;
};

function SectionTitle({ textAlign, children }: SectionTitleProps) {
  return (
    <h2
      style={{ textAlign }}
      className={styles.SectionTitle}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
