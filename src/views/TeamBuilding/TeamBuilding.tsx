import React, { lazy, Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import usePageSettings from '../../assets/js/hooks/usePageSettings';
import styles from './TeamBuilding.module.scss';
import { forms } from '../../assets/js/data';

// Lazy Loaded Components
const TeamCard = lazy(() => import('../../components/TeamCard/TeamCard'));
const AppForm = lazy(() => import('../../components/AppForm/AppForm'));
const PageTitle = lazy(() => import('../../components/PageTitle/PageTitle'));
const Typography = lazy(() => import('@/components/Heading/Heading'));
const AdjusterMenu = lazy(() => import('../../components/AdjusterMenu/AdjusterMenu'));

function TeamBuilding() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const pageSettings = usePageSettings(forms, 2);

  // Local State
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className={`${styles.TeamBuilding} ${isDarkMode ? styles.Dark : ''}`}>
      <Suspense fallback="<div>Loading...</div>">
        <AdjusterMenu click={pageSettings.toggleAdjusterMenu} menuActive={pageSettings.isMenuActive} bgColor="white">
          <Typography sx={{ margin: '0 0 20px 0', color: isDarkMode ? 'var(--primary-color)' : '' }} variant="h3">Adjuster Menu</Typography>
          <AppForm
            click={pageSettings.handleSettingsSave}
            formRef={formRef}
            formData={pageSettings.formData}
            isDarkMode={isDarkMode}
          />
        </AdjusterMenu>

        <PageTitle title="TeamBuilding" />
        <TeamCard delay={100} altLayout={pageSettings.settings.altLayout} isDarkMode={isDarkMode} />
      </Suspense>
    </div>
  );
}

export default TeamBuilding;
