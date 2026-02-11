import React, { lazy, Suspense } from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import PageTitle from '@/components/PageTitle/PageTitle';
import styles from './Home.module.scss';
import { homeData, pageSectionData } from '../../assets/js/data';

// Lazy load components
// @ts-ignore
const PageSection = lazy(() => import('@/components/PageSection/PageSection.tsx'));

function Home() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const pageSection = pageSectionData.map((section) => (
    <PageSection key={section.id} data={section} />
  ));

  return (
    <>
      <Grid container spacing={2} component="section" flexDirection={{ xs: 'column-reverse', md: 'row' }} className={`${styles.HomeContainer} ${isDarkMode ? styles.Dark : ''}`}>
        <Grid size={{ xs: 12, md: 6 }} className={styles.Left}>
          <span>Welcome to ER Components! </span>
          {homeData.desc}
          &nbsp;
          <span>{homeData.components}</span>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={styles.Right}>
          <div className={styles.HomeTitle}>ER</div>
          <Suspense fallback="<div>Loading...</div>">
            <PageTitle title="Components" isDarkMode={isDarkMode} />
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
