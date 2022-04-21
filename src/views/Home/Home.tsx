import React from 'react';
import Grid from '@mui/material/Grid';
import styles from './Home.module.scss';
import PageTitle from '../../components/PageTitle/PageTitle';
import { homeData } from '../../assets/js/data';

function Home() {
  return (
    <Grid container component="section" flexDirection={{ xs: 'column-reverse', md: 'row' }} className={styles.HomeContainer}>
      <Grid item xs={12} md={6} className={styles.Left}>
        <span>Welcome to ER Components! </span>
        {homeData.desc}
        &nbsp;
        <span>{homeData.components}</span>
      </Grid>
      <Grid item xs={12} md={6} className={styles.Right}>
        <div className={styles.HomeTitle}>ER</div>
        <PageTitle title="Components" />
      </Grid>
    </Grid>
  );
}

export default Home;
