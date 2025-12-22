import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  target?: boolean;
  center?: boolean;
  sx?: React.CSSProperties;
  click?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({
  children, href = '/', primary, secondary, tertiary, target, center, click, sx,
}: ButtonProps) {
  const primaryClass = primary ? styles.Primary : '';
  const secondaryClass = secondary ? styles.Secondary : '';
  const tertiaryClass = tertiary ? styles.Tertiary : '';
  const centeredClass = center ? styles.ButtonCenter : '';
  const isTarget = target ? '_blank' : '';

  return (
    <button
      type="button"
      onClick={click}
      style={{ ...sx }}
      className={`${styles.Button} ${centeredClass} ${primaryClass} ${secondaryClass} ${tertiaryClass}`}
    >
      <Link to={href} target={isTarget} rel="noreferrer">
        {children}
        <FontAwesomeIcon className={styles.Arrow} icon={faArrowRight} />
      </Link>
    </button>
  );
}

export default Button;
