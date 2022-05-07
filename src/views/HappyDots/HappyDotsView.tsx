import React, { useRef } from 'react';
import styles from './HappyDotsView.module.scss';
import PageTitle from '../../components/PageTitle/PageTitle';
import Spacer from '../../components/Spacer/Spacer';
import Dots from '../../components/Dots/Dots';
import { happyData, sectionData, forms } from '../../assets/js/data';
import AdjusterMenu from '../../components/AdjusterMenu/AdjusterMenu';
import AppForm from '../../components/AppForm/AppForm';
import usePageSettings from '../../assets/js/hooks/usePageSettings';

function HappyDots() {
  const elementRefs = sectionData.map(() => useRef<HTMLUListElement>(null));
  const pageSettings = usePageSettings(forms, 3);

  const sections = sectionData.map((d, i) => (
    <section
      key={d.id}
      ref={elementRefs[i]}
      className={(i % 2 !== 0) ? styles.RefReverse : styles.RefSection}
    >
      <div
        className={styles.BgImage}
        style={{ backgroundImage: `url(${d.img})` }}
      />
      <div className={styles.TextBox}>{d.text}</div>
    </section>
  ));

  return (
    <div className={styles.HappyDotsParent}>
      <PageTitle title="HappyDots" />
      <Spacer height={50} />
      <div className={styles.HappyDotsContainer}>
        <AdjusterMenu click={pageSettings.toggleAdjusterMenu} menuActive={pageSettings.isMenuActive} bgColor="white">
          <AppForm click={pageSettings.handleSettingsSave} formData={pageSettings.formData} />
        </AdjusterMenu>
        <Dots
          refs={elementRefs}
          data={happyData}
          textColor={pageSettings.settings.textColor}
          dotColor={pageSettings.settings.dotColor}
        />
        {sections}
      </div>
    </div>
  );
}

export default HappyDots;
