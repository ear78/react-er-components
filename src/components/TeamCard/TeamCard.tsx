import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TeamBuilding.module.scss';
import logo from '../../assets/img/er-logo.svg';
import { teamMembers } from '../../assets/js/data';
import PageTitle from '../PageTitle/PageTitle';

type TeamCardProps = {
  delay?: number;
};

function TeamCard({ delay = 0 }: TeamCardProps) {
  const members = teamMembers.map((member, i) => (
    <CSSTransition
      key={member.id}
      timeout={100}
      style={{
        transitionDelay: `${delay * i}ms`,
      }}
      classNames={{
        enterActive: styles.TCEnterActive,
        enterDone: styles.TCEnterDone,
        exitActive: styles.TCExit,
        exitDone: styles.TCExitActive,
      }}
    >
      <div style={{ transitionDelay: `${delay * i}ms` }} className={`${styles.Member} ${styles.TC}`}>
        <div className={styles.MemberHoverTrigger}>
          <img className={styles.Image} src={member.image} alt={member.name} />
          <h3 className={styles.Name}>{member.name}</h3>
          <p className={styles.JobTitle}>{member.jobTitle}</p>
          <img className={styles.CompanyLogo} src={logo} alt="Logo" />
          <div className={styles.icons}>
            <a href={member.facebook}>
              <FontAwesomeIcon icon={['fab', 'facebook-square']} />
            </a>
            <a href={member.twitter}>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href={member.linkedin}>
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
          </div>
        </div>
      </div>
    </CSSTransition>
  ));

  return (
    <div id={styles.TeamBuilding}>
      <PageTitle title="Team Building" />
      <TransitionGroup className={styles.TeamBuildingContainer} appear>
        {members}
      </TransitionGroup>
    </div>
  );
}

export default TeamCard;
