import React from "react";
import PropTypes from "prop-types";

import styles from "./SocialIcon.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const socialIcon = props => {
  return (
    <a className={`${styles.Links}`}
      key={props.index}
      href={props.path}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={["fab", props.platform]} />
    </a>
  );
};

socialIcon.defaultProps = {
  platform: "linkedin"
};

socialIcon.propTypes = {
  path: PropTypes.string,
  platform: PropTypes.string
};

export default socialIcon;
