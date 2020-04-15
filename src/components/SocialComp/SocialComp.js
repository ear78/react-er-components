import React, { Component } from 'react'

import styles from './SocialComp.module.css'
import SocialLink from '../SocialLink/SocialLink'

class SocialComp extends Component {
  state = {
    socialItems: [
      { platform: 'linkedin',  path: 'https://linkedin.com'},
      { platform: 'twitter-square',  path: 'https://twitter.com'},
      { platform: 'github-square',  path: 'https://github.com/ear78'},
      { platform: 'instagram',  path: 'https://instagram.com/elliot.richardson'},
    ]
  }

  render(){
    const socialLink = this.state.socialItems.map((item,index) => {
      return <SocialLink
                key={index}
                path={item.path}
                platform={item.platform}/>
    })
    return (
      <div className={styles.SocialComp}>
        {socialLink}
      </div>
    )
  }

}

export default SocialComp
