import React from 'react';
import styles from '@/components/Heading/Heading.module.scss';

type TypographyProps = {
  sx?: object;
  variant: string;
  children: React.ReactNode;
};

function Typography({
  sx, variant, children,
}: TypographyProps) {
  let element;
  switch (variant) {
    case 'h1':
      element = <h1 style={sx} className={styles.Typography}>{children}</h1>;
      break;
    case 'h2':
      element = <h2 style={sx} className={styles.Typography}>{children}</h2>;
      break;
    case 'h3':
      element = <h3 style={sx} className={styles.Typography}>{children}</h3>;
      break;
    case 'h4':
      element = <h4 style={sx} className={styles.Typography}>{children}</h4>;
      break;
    case 'h5':
      element = <h5 style={sx} className={styles.Typography}>{children}</h5>;
      break;
    case 'h6':
      element = <h6 style={sx} className={styles.Typography}>{children}</h6>;
      break;
    default:
      element = <p style={sx} className={styles.Typography}>{children}</p>;
  }

  return element;
}

export default Typography;
