import React from 'react';
import styles from './AlertBanner.module.scss';

type AlertBannerProps = {
  isDarkMode?: boolean;
  children: React.ReactNode;
};

function AlertBanner({ isDarkMode, children }: AlertBannerProps) {
  return (
    <article data-testid="alert-banner" className={`${styles.AlertBanner} ${isDarkMode ? styles.Dark : ''}`}>
      {children}
    </article>
  );
}

export default AlertBanner;
