import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Dropper.module.scss';

type DropperProps = {
  title: string;
  iconName: any;
  children: React.ReactNode;
};

function Dropper({ title, iconName, children }: DropperProps) {
  const [isToggled, setToggled] = useState(false);

  const active = isToggled ? styles.Active : '';

  return (
    <section className={styles.Dropper}>
      <header role="button" tabIndex={0} onClick={() => setToggled(!isToggled)} className={`${styles.DropperHeader} ${active}`}>
        <p className={styles.DropperTitle}>{title}</p>
        <FontAwesomeIcon className={`${styles.DropperIcon} ${active}`} icon={iconName} />
      </header>
      <div className={`${styles.DropperContent} ${active}`}>
        {children}
      </div>
    </section>
  );
}

export default Dropper;
