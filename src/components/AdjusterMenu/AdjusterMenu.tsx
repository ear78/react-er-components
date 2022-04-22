import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AdjusterMenu.module.scss';

type AdjusterMenuProps = {
  click: () => void;
  children: React.ReactNode;
  menuActive: boolean;
  bgColor?: string;
};

function AdjusterMenu({
  click, children, menuActive, bgColor,
}: AdjusterMenuProps) {
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={styles.MenuTrigger}
        onClick={click}
      >
        <FontAwesomeIcon icon={['fas', 'chevron-down']} />
      </div>
      <div style={{ background: bgColor }} className={`${styles.Sidebar} ${menuActive ? styles.active : ''}`}>
        {children}
      </div>
    </>
  );
}

export default AdjusterMenu;
