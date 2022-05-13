import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './User.module.scss';

type GitData = {
  avatar_url: string;
  bio: string;
  login: string;
  name: string;
  type: string;
};

function User() {
  const [userDataReady, setUserDataReady] = useState(false);
  const [error, setError] = useState(false);
  const [gitData, setGitData] = useState<any>({} as GitData);

  useEffect(() => {
    fetch('https://api.github.com/users/ear78', {
      headers: {
        accept: 'application/vnd.github.v3+json',
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        setGitData(resp);
        // Fake delay to show skeleton
        setTimeout(() => {
          setUserDataReady(true);
        }, 1000);
      })
      .catch((err) => {
        setError(true);
        return `Something went wrong with fetching the data ${err}`;
      });
  }, [userDataReady]);

  let user;
  if (!userDataReady || error) {
    user = (
      <div className={styles.UserSkeleton}>
        <p className={styles.Image} />
        <p className={styles.Name} />
        <p className={styles.UserName} />
        <p className={styles.Description} />
      </div>
    );
  } else if (userDataReady) {
    user = (
      <CSSTransition
        in={userDataReady}
        timeout={100}
        appear
        classNames={{
          enterActive: styles.UserTransitionEnterActive,
          enterDone: styles.UserTransitionEnterDone,
          exitActive: styles.UserTransitionExit,
          exitDone: styles.UserTransitionExitActive,
        }}
      >
        <section className={`${styles.User} ${styles.UserTransition}`}>
          <img src={gitData.avatar_url} alt={`${gitData.type} ${gitData.login}`} />
          <h3 className={styles.Name}>{gitData.name}</h3>
          <p className={styles.Username}>{gitData.login}</p>
          <p className={styles.UserDescription}>{gitData.bio}</p>
        </section>
      </CSSTransition>
    );
  } else {
    user = null;
  }
  return user;
}

export default User;
