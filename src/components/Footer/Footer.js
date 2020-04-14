import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

// import Button from '../Button/Button'
import Copyright from '../Copyright/Copyright'
import SocialComp from '../SocialComp/SocialComp'

class Footer extends Component {
  // state = {
  //   path: '/portfolio',
  //   label: 'Kontakt'
  // }
  render() {
    return (
      <div className={styles.Footer}>
        {/*<Button
          path={this.state.path}>Kontakt</Button>*/}

        <SocialComp />
        <Copyright />
      </div>
    )
  }
}

export default Footer
