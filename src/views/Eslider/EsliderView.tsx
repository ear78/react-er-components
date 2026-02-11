import React from 'react';
import Grid from '@mui/material/Grid';
import Eslider from '../../components/Eslider/Eslider';
import PageTitle from '@/components/PageTitle/PageTitle';

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
        <PageTitle title="EasySlider" />
      </Grid>
      <Grid size={12}>
        <Eslider data={data} />
      </Grid>
    </Grid>
  );
}
