import React, { lazy, Suspense, useRef } from 'react';
import styles from './TeamBuilding.module.scss';
import usePageSettings from '../../assets/js/hooks/usePageSettings';
import { forms } from '../../assets/js/data';

// Lazy Loaded Components
const TeamCard = lazy(() => import('../../components/TeamCard/TeamCard'));
const AppForm = lazy(() => import('../../components/AppForm/AppForm'));
const PageTitle = lazy(() => import('../../components/PageTitle/PageTitle'));
const Typography = lazy(() => import('../../components/Typography/Typography'));
const AdjusterMenu = lazy(() => import('../../components/AdjusterMenu/AdjusterMenu'));

function TeamBuilding() {
  const pageSettings = usePageSettings(forms, 2);

  // Local State
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className={styles.TeamBuilding}>
      <Suspense fallback="<div>Loading...</div>">
        <AdjusterMenu click={pageSettings.toggleAdjusterMenu} menuActive={pageSettings.isMenuActive} bgColor="white">
          <Typography sx={{ margin: '0 0 20px 0' }} variant="h3">Adjuster Menu</Typography>
          <AppForm
            click={pageSettings.handleSettingsSave}
            formRef={formRef}
            formData={pageSettings.formData}
          />
        </AdjusterMenu>

        <PageTitle title="TeamBuilding" />
        <TeamCard delay={100} altLayout={pageSettings.settings.altLayout} />
      </Suspense>
    </div>
  );
}

export default TeamBuilding;
