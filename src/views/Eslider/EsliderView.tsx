import React, { Suspense, lazy } from 'react';
import Grid from '@mui/material/Grid';
import Eslider from '../../components/Eslider/Eslider';

// Lazy load components
const PageTitle = lazy(() => import('../../components/PageTitle/PageTitle'));

type EsliderViewProps = {
  data: {
    id: number;
    image: string;
    text: string;
  }[];
};

export default function EsliderView({ data }: EsliderViewProps) {
  return (
    <Grid container component="section">
      <Grid size={12} mb={6}>
        <Suspense fallback="<div>Loading...</div>">
          <PageTitle title="EasySlider" />
        </Suspense>
      </Grid>
      <Grid size={12}>
        <Eslider data={data} />
      </Grid>
    </Grid>
  );
}
