import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import styles from './TeamBuilding.module.scss'
import logo from '../assets/img/er-logo.svg'
import { teamMembers } from '../assets/js/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function teamBuilding( props ) {
  /* Object generated team member page with array of Objects.  Recommended using square format for images. Example.
  [{
  {
    image: portfolio1,
    name: 'Jack Reacher',
    jobTitle: 'Professional Hitman',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com'
  }
  }]
  */
  let members = teamMembers.map( ( member, i ) => {
    return <div key={i} style={{
        transitionDelay: `${ props.delay * i }ms`
      }} className={styles.Member}>
      <div className={styles.MemberHoverTrigger}>
        <img className={styles.Image} src={member.image} alt={member.name}/>
        <h3 className={styles.Name}>{member.name}</h3>
        <p className={styles.JobTitle}>{member.jobTitle}</p>
        <img className={styles.CompanyLogo} src={logo}/>
        <div className={styles.icons}>
          <a href={member.facebook}>
            <FontAwesomeIcon icon={[ 'fab', 'facebook-square', ]}/>
          </a>
          <a href={member.twitter}>
            <FontAwesomeIcon icon={[ 'fab', 'twitter', ]}/>
          </a>
          <a href={member.linkedin}>
            <FontAwesomeIcon icon={[ 'fab', 'linkedin-in', ]}/>
          </a>
        </div>
      </div>
    </div>
  } )
  return ( <div id={styles.TeamBuilding}>
    <h1>&lt;Team Building/&gt;</h1>
    <CSSTransitionGroup component="div" className={styles.TeamBuildingContainer} transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionEnter={true} transitionLeave={true} transitionName={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        leave: styles.leave,
        leaveActive: styles.leaveActive,
        appear: styles.appear,
        appearActive: styles.appearActive,
      }}>
      {members}
    </CSSTransitionGroup>
  </div> )
}
teamBuilding.propTypes = {
  delay: PropTypes.number
}
export default teamBuilding
