import React from 'react';
import styles from './Footer.module.scss';
import { socialItems } from '../../assets/js/data';

import Copyright from '../Copyright/Copyright';
import SocialComp from '../SocialComp/SocialComp';

function Footer() {
  return (
    <div className={styles.Footer}>
      <SocialComp
        data={socialItems}
      />
      <Copyright />
    </div>
  );
}

export default Footer;
