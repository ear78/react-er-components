import React from 'react'
import styles from './TeamBuilding.module.scss'

import logo from '../assets/img/er-logo.svg'
import { portfolios } from '../assets/js/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function teamBuilding(props) {
  let portfolio = portfolios.map((member, i) => {
    return <div key={i} className={styles.Member}>
                  <img className={styles.Image} src={member.image} alt={member.name}/>
                  <h3 className={styles.Name}>{member.name}</h3>
                  <p className={styles.JobTitle}>{member.jobTitle}</p>
                  <img className={styles.CompanyLogo} src={logo} />
                  <div className={styles.icons}>
                    <FontAwesomeIcon icon={['fab', 'facebook-square']}/>
                    <FontAwesomeIcon icon={['fab', 'twitter']}/>
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
                  </div>
                </div>
  })
  return (
    <div>
      <div id={styles.TeamBuildingContainer}>
          {portfolio}
      </div>
    </div>
  )
}

export default teamBuilding
