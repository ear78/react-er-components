import React from 'react';
import styles from './ContainerRight.module.scss';

type ContainerRightProps = {
  children: React.ReactNode;
};

function ContainerRight({ children }: ContainerRightProps) {
  return (
    <div className={styles.ContainerRight}>{children}</div>
  );
}

export default ContainerRight;
