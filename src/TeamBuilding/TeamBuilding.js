import React from 'react'
import styles from './TeamBuilding.module.scss'

import logo from '../assets/img/er-logo.svg'
import image from '../assets/img/jack-reacher.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function teamBuilding() {
  let portfolios = [
    {
      name: 'Jack Reacher',
      jobTitle: 'Professional Hitman',
    },
    {
      name: 'Jack Reacher',
      jobTitle: 'Professional Hitman',
    },
    {
      name: 'Jack Reacher',
      jobTitle: 'Professional Hitman',
    },
    {
      name: 'Jack Reacher',
      jobTitle: 'Professional Hitman',
    },
  ]

  let portfolio = portfolios.map(member => {
    return <div className={styles.Portfolio}>
                  <img className={styles.Image} src={image} alt="Jack Reacher"/>
                  <h3 className={styles.Name}>Jack Reacher</h3>
                  <p className={styles.JobTitle}>Professional Killer</p>
                  <img className={styles.CompanyLogo} src={logo} />
                  <div className={styles.icons}>
                    <FontAwesomeIcon icon={['fab', 'facebook-square']}/>
                    <FontAwesomeIcon icon={['fab', 'twitter']}/>
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
                  </div>
                </div>
  })
  return (
    <div id={styles.TeamBuildingContainer}>
      {portfolio}
    </div>
  )
}

export default teamBuilding
