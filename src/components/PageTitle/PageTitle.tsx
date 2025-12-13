import React from 'react';
import styles from './PageTitle.module.scss';

type PageTitleProps = {
  alt?: boolean;
  color?: string;
  title: string;
  isDarkMode?: boolean;
};

function PageTitle({
  alt, color, title, isDarkMode,
}: PageTitleProps) {
  const alternateStyle = alt ? styles.Alt : '';

  return (
    <h1 style={{ color }} className={`${styles.PageTitle} ${alternateStyle} ${isDarkMode ? styles.Dark : ''}`}>
      &lt;
      {title}
      /&gt;
    </h1>
  );
}

export default PageTitle;
