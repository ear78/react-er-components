import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import styles from './HoverPodsView.module.scss';
import { podData, forms } from '../../assets/js/data';
import usePageSettings from '../../assets/js/hooks/usePageSettings';

// Lazy Loaded Components
const HoverPods = lazy(() => import('../../components/HoverPods/HoverPods'));
const PageTitle = lazy(() => import('../../components/PageTitle/PageTitle'));
const AdjusterMenu = lazy(() => import('../../components/AdjusterMenu/AdjusterMenu'));
const Typography = lazy(() => import('../../components/Typography/Typography'));
const AppForm = lazy(() => import('../../components/AppForm/AppForm'));

function HoverPodsView() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const pageSettings = usePageSettings(forms, 1);

  return (
    <section id={styles.HoverPodsView} className={`${isDarkMode ? styles.Dark : ''}`}>
      <Suspense fallback="<div>Loading...</div>">
        <AdjusterMenu click={pageSettings.toggleAdjusterMenu} menuActive={pageSettings.isMenuActive} bgColor="white">
          <Typography sx={{ margin: '0 0 20px 0', color: isDarkMode ? 'var(--primary-color)' : '' }} variant="h3">Adjuster Menu</Typography>
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
