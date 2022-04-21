import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialIcon.module.scss';

type SocialIconProps = {
  path: string;
  platform: any;
};

function SocialIcon({ path, platform = 'linkedin' }: SocialIconProps) {
  return (
    <a
      className={`${styles.Links}`}
      href={path}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={['fab', platform]} />
    </a>
  );
}

export default SocialIcon;
