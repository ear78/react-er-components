import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import PageTitle from '@/components/PageTitle/PageTitle';
import HoverPods from '@/components/HoverPods/HoverPods';
import styles from './HoverPodsView.module.scss';
import { podData, forms } from '../../assets/js/data';
import usePageSettings from '../../assets/js/hooks/usePageSettings';

// Lazy Loaded Components
// @ts-ignore
const AdjusterMenu = lazy(() => import('@/components/AdjusterMenu/AdjusterMenu.tsx'));
// @ts-ignore
const Heading = lazy(() => import('@/components/Heading/Heading.tsx'));
// @ts-ignore
const AppForm = lazy(() => import('@/components/AppForm/AppForm.tsx'));

function HoverPodsView() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const pageSettings = usePageSettings(forms, 1);

  return (
    <section id={styles.HoverPodsView} className={`${isDarkMode ? styles.Dark : ''}`}>
      <Suspense fallback="<div>Loading...</div>">
        <AdjusterMenu click={pageSettings.toggleAdjusterMenu} menuActive={pageSettings.isMenuActive} bgColor="white">
          <Heading sx={{ margin: '0 0 20px 0', color: isDarkMode ? 'var(--primary-color)' : '' }} variant="h3">Adjuster Menu</Heading>
          <AppForm
            click={pageSettings.handleSettingsSave}
            formData={pageSettings.formData}
            isDarkMode={isDarkMode}
          />
        </AdjusterMenu>

        <PageTitle title="HoverPods" />
        <HoverPods
          delay={100}
          hoverColor={pageSettings.settings.hoverColor}
          isSquared={pageSettings.settings.isSquared}
          openTab={pageSettings.settings.openTab}
          podData={podData}
        />
      </Suspense>
    </section>
  );
}

export default HoverPodsView;
