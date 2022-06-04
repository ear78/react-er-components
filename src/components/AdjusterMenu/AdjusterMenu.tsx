import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AdjusterMenu.module.scss';

type AdjusterMenuProps = {
  click?: () => void;
  children: React.ReactNode;
  menuActive?: boolean;
  bgColor?: string;
};

function AdjusterMenu({
  click, children, menuActive, bgColor,
}: AdjusterMenuProps) {
  return (
    <>
      <button
        type="button"
        aria-pressed={menuActive}
        className={styles.MenuTrigger}
        onClick={click}
      >
        <FontAwesomeIcon icon={['fas', 'chevron-down']} />
      </button>
      <div style={{ background: bgColor }} className={`${styles.Sidebar} ${menuActive ? styles.active : ''}`}>
        {children}
      </div>
    </>
  );
}

export default AdjusterMenu;
