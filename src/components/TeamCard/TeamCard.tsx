import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TeamCard.module.scss';
import logo from '../../assets/img/er-logo.svg';
import { teamMembers } from '../../assets/js/data';

type TeamCardProps = {
  delay?: number;
  altLayout?: boolean;
  isDarkMode?: boolean;
};

function TeamCard({ delay = 0, altLayout = false, isDarkMode = false }: TeamCardProps) {
  const members = teamMembers.map((member, i) => {
    if (altLayout) {
      return (
        <CSSTransition
          key={member.id}
          timeout={{
            appear: 900,
            enter: 100,
          }}
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
            <div className={`${styles.MemberHoverTrigger} ${styles.AltLayout}`}>
              <div className={styles.AltLayoutLeft}>
                <img className={styles.Image} src={member.image} alt={member.name} />
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
              <div className={styles.AltLayoutRight}>
                <h3 className={`${styles.Name} ${isDarkMode ? styles.Dark : ''}`}>{member.name}</h3>
                <p className={styles.JobTitle}>{member.jobTitle}</p>
              </div>
              <img className={styles.CompanyLogo} src={logo} alt="Logo" />
            </div>
          </div>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition
        key={member.id}
        timeout={{
          appear: 900,
          enter: 100,
        }}
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
            <h3 className={`${styles.Name} ${isDarkMode ? styles.Dark : ''}`}>{member.name}</h3>
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
    );
  });

  return (
    <TransitionGroup className={styles.TeamBuildingContainer} appear>
      {members}
    </TransitionGroup>
  );
}

export default TeamCard;
