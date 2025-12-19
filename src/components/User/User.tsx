import React, { useEffect, useState } from 'react';
// import { CSSTransition } from 'react-transition-group';
import styles from './User.module.scss';

type GitData = {
  avatar_url: string;
  bio: string;
  login: string;
  name: string;
  type: string;
};

function User({ profileId = 'ear78' }: { profileId?: string }) {
  const [userDataReady, setUserDataReady] = useState(false);
  // const [error, setError] = useState(false);
  const [gitData, setGitData] = useState<any>({} as GitData);

  useEffect((): void => {
    try {
      const fetchData = async () => {
        const response = await fetch(`https://api.github.com/users/${profileId}`, {
          headers: {
            accept: 'application/vnd.github.v3+json',
          },
        });

        const data = await response.json();
        setGitData(data);
        // Fake delay to show skeleton
        setTimeout(() => {
          setUserDataReady(true);
        }, 2000);
      };
      fetchData();
      return undefined;
    } catch (err) {
      // setError(true);
      return console.error(`Something went wrong with fetching the data ${err}`);
    }
  }, [userDataReady]);

  return (
    <>
      <div className={`${styles.UserSkeleton} ${!userDataReady ? styles.FadeIn : styles.UserTransition}`}>
        <p className={styles.Image} />
        <p className={styles.Name} />
        <p className={styles.Username} />
        <p className={styles.Description} />
      </div>
      <section className={`${styles.User} ${styles.UserTransition} ${userDataReady ? styles.FadeIn : ''}`}>
        <img src={gitData.avatar_url} alt={`${gitData.type} ${gitData.login}`} />
        <h3 className={styles.Name}>{gitData.name}</h3>
        <p className={styles.Username}>{gitData.login}</p>
        <p className={styles.UserDescription}>{gitData.bio}</p>
      </section>
    </>
  );
}

export default User;
