import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  display: string;
  padding: string | number;
  background?: string;
  children: React.ReactNode
};

function Container({
  display = 'flex', padding = '40px 15px 75px', background = 'inherit', children,
}: ContainerProps) {
  return (
    <section
      style={{
        display,
        padding,
        background,
      }}
      className={styles.Container}
    >
      {children}
    </section>
  );
}

export default Container;
