import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import styles from './TeamBuilding.module.scss'

import logo from '../assets/img/er-logo.svg'
import { portfolios } from '../assets/js/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function teamBuilding(props) {
  let portfolio = portfolios.map((member, i) => {
    return <div key={i}  style={{ transitionDelay: `${ i * .15 }s` }} className={styles.Member}>
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
    <div id={styles.TeamBuilding}>
      <h1>&lt;Team Building/&gt;</h1>
        <CSSTransitionGroup component="div" className={styles.TeamBuildingContainer} transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={100} transitionEnter={true}
        transitionLeave={true} transitionName={ {
        enter: styles.enter,
        enterActive: styles.enterActive,
        leave: styles.leave,
        leaveActive: styles.leaveActive,
        appear: styles.appear,
        appearActive: styles.appearActive
    } }>
          {portfolio}
      </CSSTransitionGroup>
    </div>
  )
}

export default teamBuilding
