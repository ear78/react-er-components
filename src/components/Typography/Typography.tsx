import React from 'react';
import styles from './Typography.module.scss';

type TypographyProps = {
  margin?: string;
  padding?: string;
  title: string;
  variant: string;
};

function Typography({ margin, padding, variant, title }: TypographyProps) {
  const styleAdjust = {
    margin: margin,
    padding: padding,
  };

  let element;
  switch(variant) {
    case 'h1':
      element = <h1 style={styleAdjust} className={styles.Typography}>{title}</h1>;
      break;
    case 'h2':
      element = <h2 style={styleAdjust} className={styles.Typography}>{title}</h2>;
      break;
    case 'h3':
      element = <h3 style={styleAdjust} className={styles.Typography}>{title}</h3>;
      break;
    case 'h4':
      element = <h4 style={styleAdjust} className={styles.Typography}>{title}</h4>;
      break;
    case 'h5':
      element = <h5 style={styleAdjust} className={styles.Typography}>{title}</h5>;
      break;
    case 'h6':
      element = <h6 style={styleAdjust} className={styles.Typography}>{title}</h6>;
      break;
    default:
      element = <p style={styleAdjust} className={styles.Typography}>{title}</p>
  }

  return element;
}

export default Typography;
