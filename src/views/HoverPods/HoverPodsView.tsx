import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import PageTitle from '@/components/PageTitle/PageTitle.tsx';
import styles from './HoverPodsView.module.scss';
import { podData, forms } from '../../assets/js/data.ts';
import usePageSettings from '../../assets/js/hooks/usePageSettings.ts';

// Lazy Loaded Components
// @ts-ignore
const HoverPods = lazy(() => import('@/components/HoverPods/HoverPods.tsx'));

function HoverPodsView() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const pageSettings = usePageSettings(forms, 1);

  return (
    <section id={styles.HoverPodsView} className={`${isDarkMode ? styles.Dark : ''}`}>
      <PageTitle title="HoverPods" />
      <HoverPods
        delay={100}
        hoverColor={pageSettings.settings.hoverColor}
        isSquared={pageSettings.settings.isSquared}
        openTab={pageSettings.settings.openTab}
        podData={podData}
      />
    </section>
  );
}

export default HoverPodsView;
