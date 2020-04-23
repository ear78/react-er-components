import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import styles from "./SocialIcon.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const socialIcon = props => {
  return (
    <Link
      className={`${styles.Links}`}
      key={props.index}
      to={{pathname: props.path}}
      target="_blank"
    >
      <FontAwesomeIcon icon={["fab", props.platform]} />
    </Link>
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
