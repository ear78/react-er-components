import React from 'react';
import HoverPods from '../../components/HoverPods/HoverPods';
import PageTitle from '../../components/PageTitle/PageTitle';
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu';
import Typography from '../../components/Typography/Typography';
import AppForm from '../../components/AppForm/AppForm';
import styles from './HoverPodsView.module.scss';
import { podData, forms } from '../../assets/js/data';
import usePageSettings from '../../assets/js/hooks/usePageSettings';

function HoverPodsView() {
  const pageSettings = usePageSettings(forms, 1);

  return (
    <section id={styles.HoverPodsView}>
      <AdjusterMenu click={pageSettings.toggleAdjusterMenu} menuActive={pageSettings.isMenuActive} bgColor="white">
        <Typography margin="0 0 20px 0" variant="h3">Adjuster Menu</Typography>
        <AppForm click={pageSettings.handleSettingsSave} formData={pageSettings.formData} />
      </AdjusterMenu>

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
