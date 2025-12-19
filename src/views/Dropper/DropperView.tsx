import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { dropperData } from '../../assets/js/data';
import styles from './DropperView.module.scss';
import colors from '../../assets/js/colors';

// Lazy load components
const PageTitle = lazy(() => import('../../components/PageTitle/PageTitle'));
const Dropper = lazy(() => import('../../components/Dropper/Dropper'));

function DropperParent() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const dropper = dropperData.map((d) => (
    <Dropper key={d.id} title={d.title} iconName={d.icon} isDarkMode={isDarkMode}>
      {d.content}
    </Dropper>
  ));

  return (
    <Grid container component="section" flexDirection={{ xs: 'column', sm: 'row' }} className={styles.DropperParent}>
      <Grid container flexDirection={{ xs: 'column', sm: 'row' }} className={styles.DropperWrapper}>
        <Grid size={{ xs: 12, sm: 5 }} className={styles.Left}>
          <Suspense fallback="<div>Loading...</div>">
            <PageTitle title="Dropper" color={colors.hotPink} />
          </Suspense>
        </Grid>
        <Grid size={{ xs: 12, sm: 7 }} className={styles.Right}>
          <Suspense fallback="<div>Loading...</div>">
            {dropper}
          </Suspense>
        </Grid>
      </Grid>
    </Grid>

  );
}

export default DropperParent;
