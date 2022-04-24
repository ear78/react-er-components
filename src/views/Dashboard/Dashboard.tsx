import React from 'react';
import Grid from '@mui/material/Grid';
import styles from './Dashboard.module.scss';
import UserMale from '../../assets/img/UserMale.svg';
import logo from '../../assets/img/er-logo.svg';
import PageTitle from '../../components/PageTitle/PageTitle';

function Dashboard() {
  return (
    <Grid container columnSpacing={2} className={styles.Dashboard}>
      <Grid item xs={12} mb={6}>
        <PageTitle title="Dashboard" />
      </Grid>
      <Grid item className={styles.User} xs={12} sm={3}>
        <div className={styles.ImageContainer}>
          <img src={UserMale} alt="user male" />
        </div>
        <h3 className={styles.Name}>Elliot Richardson</h3>
        <p className={styles.Username}>ear78</p>
        <p className={styles.UserDescription}>
          This is a description of this users profile. They can write whatever
          they want to write within this space.
        </p>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} md={6}>
            <div className={styles.Card}>
              <p className={styles.Header}>
                <img src={logo} alt="logo" />
                Some Title
              </p>
              <p className={styles.Description}>
                Some sort of description printing out the different settings.
              </p>
              <p className={styles.Footer}>
                <span className={styles.Circle} />
                Banner settings
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={styles.Card}>
              <p className={styles.Header}>
                <img src={logo} alt="logo" />
                Some Title
              </p>
              <p className={styles.Description}>
                Some sort of description printing out the different settings.
              </p>
              <p className={styles.Footer}>
                <span className={styles.Circle} />
                Banner settings
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={styles.Card}>
              <p className={styles.Header}>
                <img src={logo} alt="logo" />
                Some Title
              </p>
              <p className={styles.Description}>
                Some sort of description printing out the different settings.
              </p>
              <p className={styles.Footer}>
                <span className={styles.Circle} />
                Banner settings
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={styles.Card}>
              <p className={styles.Header}>
                <img src={logo} alt="logo" />
                Some Title
              </p>
              <p className={styles.Description}>
                Some sort of description printing out the different settings.
              </p>
              <p className={styles.Footer}>
                <span className={styles.Circle} />
                Banner settings
              </p>
            </div>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}

export default Dashboard;
