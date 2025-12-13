import React, { lazy, Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './HappyDotsView.module.scss';
import { happyData, sectionData, forms } from '../../assets/js/data';
import usePageSettings from '../../assets/js/hooks/usePageSettings';

// Lazy load components
const AdjusterMenu = lazy(() => import('../../components/AdjusterMenu/AdjusterMenu'));
const AppForm = lazy(() => import('../../components/AppForm/AppForm'));
const PageTitle = lazy(() => import('../../components/PageTitle/PageTitle'));
const Dots = lazy(() => import('../../components/Dots/Dots'));
const Spacer = lazy(() => import('../../components/Spacer/Spacer'));

function HappyDots() {
  const { isDarkMode } = useSelector((state: any) => state.app);
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
      <div className={`${styles.TextBox} ${isDarkMode ? styles.Dark : ''}`}>
        <h2>{d.title}</h2>
        <p>{d.text}</p>
      </div>
    </section>
  ));

  return (
    <div className={styles.HappyDotsParent}>
      <Suspense fallback="<div>Loading...</div>">
        <PageTitle title="HappyDots" />
        <Spacer height={50} />
      </Suspense>

      <div className={styles.HappyDotsContainer}>
        <Suspense fallback="<div>Loading...</div>">
          <AdjusterMenu click={pageSettings.toggleAdjusterMenu} menuActive={pageSettings.isMenuActive} bgColor="white">
            <AppForm click={pageSettings.handleSettingsSave} formData={pageSettings.formData} />
          </AdjusterMenu>
          <Dots
            refs={elementRefs}
            data={happyData}
            textColor={pageSettings.settings.textColor}
            dotColor={pageSettings.settings.dotColor}
          />
        </Suspense>
        {sections}
      </div>
    </div>
  );
}

export default HappyDots;
