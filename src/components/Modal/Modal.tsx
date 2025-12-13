import React from 'react';
import Close from '@mui/icons-material/Close';
import styles from './Modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
  isModalActive?: boolean;
  isDarkMode?: boolean;
  click?: any;
};

function Modal({
  children, isModalActive, click, isDarkMode,
}: ModalProps) {
  return (
    <div className={`${styles.Modal} ${isDarkMode ? styles.Dark : ''} ${isModalActive ? styles.ModalActive : ''}`}>
      <div className={styles.Content}>
        <Close role="button" tabIndex={0} onClick={click} className={styles.CloseBtn} fontSize="inherit">close</Close>
        {children}
      </div>
    </div>
  );
}

export default Modal;
