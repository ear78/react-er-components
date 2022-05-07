import React, { useRef } from 'react';
import TeamCard from '../../components/TeamCard/TeamCard';
import AppForm from '../../components/AppForm/AppForm';
import PageTitle from '../../components/PageTitle/PageTitle';
import Typography from '../../components/Typography/Typography';
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu';
import styles from './TeamBuilding.module.scss';
import usePageSettings from '../../assets/js/hooks/usePageSettings';
import { forms } from '../../assets/js/data';

function TeamBuilding() {
  const pageSettings = usePageSettings(forms, 2);

  // Local State
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className={styles.TeamBuilding}>
      <AdjusterMenu click={pageSettings.toggleAdjusterMenu} menuActive={pageSettings.isMenuActive} bgColor="white">
        <Typography margin="0 0 20px 0" variant="h3">Adjuster Menu</Typography>
        <AppForm
          click={pageSettings.handleSettingsSave}
          formRef={formRef}
          formData={pageSettings.formData}
        />
      </AdjusterMenu>

      <PageTitle title="TeamBuilding" />
      <TeamCard delay={100} altLayout={pageSettings.settings.altLayout} />
    </div>
  );
}

export default TeamBuilding;
