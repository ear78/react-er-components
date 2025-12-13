import React from 'react';
import styles from './SocialComp.module.scss';
import SocialIcon from '../SocialIcon/SocialIcon';

type SocialCompProps = {
  data: {}[];
  isDarkMode?: boolean;
};

function SocialComp({ data, isDarkMode }: SocialCompProps) {
  const socialIcon = data.map((item: any) => (
    <SocialIcon
      key={item.path}
      path={item.path}
      platform={item.platform}
      isDarkMode={isDarkMode}
    />
  ));
  return (
    <div className={styles.SocialComp}>
      {socialIcon}
    </div>
  );
}

export default SocialComp;
