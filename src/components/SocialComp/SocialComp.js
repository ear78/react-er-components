import React, { Component } from 'react'
import styles from './SocialComp.module.css'

import SocialIcon from '../SocialIcon/SocialIcon'

function socialComp( props ) {
  const socialIcon = props.data.map( ( item, index ) => {
    return <SocialIcon
                key={index}
                path={item.path}
                platform={item.platform}/>
  } )
  return (
    <div className={styles.SocialComp}>
        {socialIcon}
      </div>
  )
}

export default socialComp
