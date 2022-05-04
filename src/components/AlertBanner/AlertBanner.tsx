import React from 'react';
import styles from './AlertBanner.module.scss';

type AlertBannerProps = {
  children: React.ReactNode;
};

function AlertBanner({ children }: AlertBannerProps) {
  return (
    <article className={styles.AlertBanner}>
      {children}
    </article>
  );
}

export default AlertBanner;
