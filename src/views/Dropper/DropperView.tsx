import React from 'react';
import Grid from '@mui/material/Grid';
import { dropperData } from '../../assets/js/data';
import styles from './DropperView.module.scss';
import colors from '../../assets/js/colors';
import Dropper from '../../components/Dropper/Dropper';
import PageTitle from '../../components/PageTitle/PageTitle';

function DropperParent() {
  const dropper = dropperData.map((d) => (
    <Dropper key={d.id} title={d.title} iconName={d.icon}>{d.content}</Dropper>
  ));

  return (
    <Grid container component="section" flexDirection={{ xs: 'column', sm: 'row' }} className={styles.DropperParent}>
      <Grid container flexDirection={{ xs: 'column', sm: 'row' }} className={styles.DropperWrapper}>
        <Grid item xs={12} sm={5} className={styles.Left}>
          <PageTitle title="Dropper" color={colors.hotPink} />
        </Grid>
        <Grid item xs={12} sm={7} className={styles.Right}>
          {dropper}
        </Grid>
      </Grid>
    </Grid>

  );
}

export default DropperParent;
