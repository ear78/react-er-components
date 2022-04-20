import React from 'react';
import styles from './SocialComp.module.scss';
import SocialIcon from '../SocialIcon/SocialIcon';

type SocialCompProps = {
  data: {}[];
};

function SocialComp({ data }: SocialCompProps) {
  const socialIcon = data.map((item: any) => (
    <SocialIcon
      key={item.path}
      path={item.path}
      platform={item.platform}
    />
  ));
  return (
    <div className={styles.SocialComp}>
      {socialIcon}
    </div>
  );
}

export default SocialComp;
