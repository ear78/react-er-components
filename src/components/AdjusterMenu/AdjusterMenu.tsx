import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AdjusterMenu.module.scss';

type AdjusterMenuProps = {
  click: () => void;
};

function AdjusterMenu({ click }: AdjusterMenuProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.MenuTrigger}
      onClick={click}
    >
      <FontAwesomeIcon icon={['fas', 'chevron-down']} />
    </div>
  );
}

export default AdjusterMenu;
