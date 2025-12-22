import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '../Typography/Typography';
import styles from './PageSection.module.scss';
import Button from '../Button/Button';
import useResetApploading from '../../assets/js/hooks/useResetAppLoading';

type PageSectionProps = {
  setThreshold?: number;
  setMarginOffset?: string;
  data: {
    id: number;
    title: string;
    component: string;
    description: string;
    img: string;
    page: string;
  };
};

function PageSection({
  data, setThreshold = 0.3, setMarginOffset = '0',
}: PageSectionProps) {
  const resetAppLoading = useResetApploading(); // Reset AppLoading
  const refEl = useRef<HTMLElement>(null);
  const [isIntersect, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `${setMarginOffset}px`,
      threshold: setThreshold,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          obs.disconnect();
        }
      });
    }, options);

    observer.observe(refEl.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Grid container ref={refEl} component="section">
      <Grid className={`${styles.HomeSections} ${styles.LazyLoad} ${isIntersect ? styles.Active : ''}`}>
        <Typography variant="h2" sx={{ textAlign: 'center', margin: '100px 0 25px' }}>{data.title}</Typography>
        <Typography variant="p">
          The&nbsp;
          <b>
            {data.component}
            &nbsp;
            Component&nbsp;
          </b>
          {data.description}
        </Typography>
        <Button tertiary center sx={{ margin: 'auto auto 35px' }} click={() => resetAppLoading()} href={data.page}>Go To Component</Button>
        <img loading="lazy" src={data.img} alt="Easy Slider Component" />
      </Grid>
    </Grid>
  );
}

export default PageSection;
