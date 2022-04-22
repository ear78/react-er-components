import React from 'react';
import styles from './Typography.module.scss';

type TypographyProps = {
  margin?: string;
  padding?: string;
  variant: string;
  children: React.ReactNode;
};

function Typography({
  margin, padding, variant, children,
}: TypographyProps) {
  const styleAdjust = {
    margin,
    padding,
  };

  let element;
  switch (variant) {
    case 'h1':
      element = <h1 style={styleAdjust} className={styles.Typography}>{children}</h1>;
      break;
    case 'h2':
      element = <h2 style={styleAdjust} className={styles.Typography}>{children}</h2>;
      break;
    case 'h3':
      element = <h3 style={styleAdjust} className={styles.Typography}>{children}</h3>;
      break;
    case 'h4':
      element = <h4 style={styleAdjust} className={styles.Typography}>{children}</h4>;
      break;
    case 'h5':
      element = <h5 style={styleAdjust} className={styles.Typography}>{children}</h5>;
      break;
    case 'h6':
      element = <h6 style={styleAdjust} className={styles.Typography}>{children}</h6>;
      break;
    default:
      element = <p style={styleAdjust} className={styles.Typography}>{children}</p>;
  }

  return element;
}

export default Typography;
