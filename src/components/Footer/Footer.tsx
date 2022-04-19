import React, { Component } from 'react'
import styles from './Footer.module.css'
import { socialItems } from '../../assets/js/data'

import Copyright from '../../components/Copyright/Copyright'
import SocialComp from '../../components/SocialComp/SocialComp'

class Footer extends Component {
  render() {
    return (
      <div className={styles.Footer}>
        <SocialComp
          data={socialItems}/>
        <Copyright />
      </div>
    )
  }
}

export default Footer
