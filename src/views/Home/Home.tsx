import React, { lazy, Suspense } from 'react';
import Grid from '@mui/material/Grid';
import styles from './Home.module.scss';
import { homeData, pageSectionData } from '../../assets/js/data';

// Lazy load components
const PageTitle = lazy(() => import('../../components/PageTitle/PageTitle'));
const PageSection = lazy(() => import('../../components/PageSection/PageSection'));

function Home() {
  const pageSection = pageSectionData.map((section) => (
    <PageSection key={section.id} data={section} />
  ));

  return (
    <>
      <Grid container component="section" flexDirection={{ xs: 'column-reverse', md: 'row' }} className={styles.HomeContainer}>
        <Grid item xs={12} md={6} className={styles.Left}>
          <span>Welcome to ER Components! </span>
          {homeData.desc}
        &nbsp;
          <span>{homeData.components}</span>
        </Grid>
        <Grid item xs={12} md={6} className={styles.Right}>
          <div className={styles.HomeTitle}>ER</div>
          <Suspense fallback="<div>Loading...</div>">
            <PageTitle title="Components" />
          </Suspense>
        </Grid>
      </Grid>
      <Suspense fallback="<div>Loading...</div>">
        {pageSection}
      </Suspense>

    </>
  );
}

export default Home;
