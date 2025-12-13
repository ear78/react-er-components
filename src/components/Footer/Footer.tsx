import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Footer.module.scss';
import { socialItems } from '../../assets/js/data';

import Copyright from '../Copyright/Copyright';
import SocialComp from '../SocialComp/SocialComp';

function Footer() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  return (
    <div className={styles.Footer}>
      <SocialComp
        data={socialItems}
        isDarkMode={isDarkMode}
      />
      <Copyright />
    </div>
  );
}

export default Footer;
