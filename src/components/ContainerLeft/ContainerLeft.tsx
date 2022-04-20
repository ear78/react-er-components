import React from 'react';
import styles from './ContainerLeft.module.scss';

type ContainerLeftProps = {
  background: string;
  children: React.ReactNode;
};
function ContainerLeft({ background = 'transparent', children }: ContainerLeftProps) {
  return (
    <div
      style={{ background }}
      className={styles.ContainerLeft}
    >
      {children}

    </div>
  );
}

export default ContainerLeft;
