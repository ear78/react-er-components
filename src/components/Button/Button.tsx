import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  target?: boolean;
  center?: boolean;
  margin?: string;
  click?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({
  children, href = '/', target, center, margin, click,
}:ButtonProps) {
  const isCentered = center ? styles.ButtonCenter : '';
  const isTarget = target ? '_blank' : '';
  const styleObj = {
    margin,
  };

  return (
    <button type="button" onClick={click} style={styleObj} className={`${styles.Button} ${isCentered}`}>
      <Link to={href} target={isTarget} rel="noreferrer">
        {children}
        <FontAwesomeIcon className={styles.Arrow} icon={faArrowRight} />
      </Link>
    </button>
  );
}

export default Button;
