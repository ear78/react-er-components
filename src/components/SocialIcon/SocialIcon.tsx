import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialIcon.module.scss';

type SocialIconProps = {
  path: string;
  platform: any;
  isDarkMode?: boolean;
};

function SocialIcon({ path, platform = 'linkedin', isDarkMode }: SocialIconProps) {
  return (
    <a
      className={`${styles.Links} ${isDarkMode ? styles.Dark : ''}`}
      href={path}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={['fab', platform]} />
    </a>
  );
}

export default SocialIcon;
