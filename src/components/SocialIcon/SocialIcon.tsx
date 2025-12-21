import React from 'react';
import styles from './SocialIcon.module.scss';

type SocialIconProps = {
  path: string;
  target?: boolean;
  isDarkMode?: boolean;
  children: React.ReactNode;
};

function SocialIcon({
  path, target = false, isDarkMode, children,
}: SocialIconProps) {
  return (
    <a
      className={`${styles.Links} ${isDarkMode ? styles.Dark : ''}`}
      href={path}
      target={target ? '_blank' : ''}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default SocialIcon;
