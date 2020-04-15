import React, { Component} from 'react'
import { Link } from 'react-router-dom'

import styles from './SocialLink.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const socialLink = (props) => {
    return (
      <Link
        className={`${styles.Links}`}
        key={props.index}
        to={{pathname: props.path}}
        target="_blank">
        {/*<i className={`fa ${props.platform}`} aria-hidden="true"></i>*/}
        <FontAwesomeIcon icon={[ 'fab', props.platform ]}/>
      </Link>
    )
}

export default socialLink
