import React, { lazy, Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import usePageSettings from '../../assets/js/hooks/usePageSettings.ts';
import PageTitle from '@/components/PageTitle/PageTitle.tsx';
import AdjusterMenu from '@/components/AdjusterMenu/AdjusterMenu.tsx';
import styles from './TeamBuilding.module.scss';
import { forms } from '../../assets/js/data.ts';

// Lazy Loaded Components
// @ts-ignore
const TeamCard = lazy(() => import('@/components/TeamCard/TeamCard.tsx'));
// @ts-ignore
const AppForm = lazy(() => import('@/components/AppForm/AppForm.tsx'));
// @ts-ignore
const Heading = lazy(() => import('@/components/Heading/Heading.tsx'));

function TeamBuilding() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const pageSettings = usePageSettings(forms, 2);

  // Local State
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className={`${styles.TeamBuilding} ${isDarkMode ? styles.Dark : ''}`}>
      <Suspense fallback="<div>Loading...</div>">
        <AdjusterMenu click={pageSettings.toggleAdjusterMenu} menuActive={pageSettings.isMenuActive} bgColor="white">
          <Heading sx={{ margin: '0 0 20px 0', color: isDarkMode ? 'var(--primary-color)' : '' }} variant="h3">Adjuster Menu</Heading>
          <AppForm
            click={pageSettings.handleSettingsSave}
            formRef={formRef}
            formData={pageSettings.formData}
            isDarkMode={isDarkMode}
          />
        </AdjusterMenu>
      </Suspense>

      <PageTitle title="TeamBuilding" />
      <TeamCard delay={100} altLayout={pageSettings.settings.altLayout} isDarkMode={isDarkMode} />
    </div>
  );
}

export default TeamBuilding;
