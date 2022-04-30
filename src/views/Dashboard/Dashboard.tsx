import React from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import styles from './Dashboard.module.scss';
import UserMale from '../../assets/img/UserMale.svg';
import logo from '../../assets/img/er-logo.svg';
import PageTitle from '../../components/PageTitle/PageTitle';

function Dashboard() {
  const settingsData = useSelector((state: any) => state.app);
  const dashboard = useSelector((state: any) => state.dashboard);

  let cards;
  if (settingsData) {
    cards = settingsData.components.map((component: any) => (
      <Grid key={component.id} item xs={12} md={6}>
        <div className={styles.Card}>
          <p className={styles.Header}>
            <img src={logo} alt="logo" />
            {component.component}
          </p>
          <p className={styles.Description}>
            {component.description}
            { Object.keys(component.settings).length > 1
              ? Object.values(component.settings).map((setting: any) => (
                <span key={setting.id} className={styles.SettingsPill}>
                  {typeof setting === 'boolean' ? 'Boolean' : setting}
                </span>
              ))
              : <span key="Hello" className={styles.SettingsPill}>Default Settings</span>}
          </p>
          <p className={styles.Footer}>
            <span className={styles.Circle} />
            {component.component}
          &nbsp; settings
          </p>
        </div>
      </Grid>
    ));
  } else {
    cards = null;
  }

  return (
    <Grid container columnSpacing={2} className={styles.Dashboard}>
      <Grid item xs={12} mb={6}>
        <PageTitle title="Dashboard" />
      </Grid>
      <Grid item className={styles.User} xs={12} sm={3}>
        <div className={styles.ImageContainer}>
          <img src={UserMale} alt="user male" />
        </div>
        <h3 className={styles.Name}>{dashboard.user.fullName}</h3>
        <p className={styles.Username}>{dashboard.user.userName}</p>
        <p className={styles.UserDescription}>{dashboard.user.description}</p>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {cards}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
