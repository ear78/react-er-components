import React, { lazy, Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './HappyDotsView.module.scss';
import PageTitle from '@/components/PageTitle/PageTitle.tsx';
import Spacer from '@/components/Spacer/Spacer.tsx';
import AdjusterMenu from '@/components/AdjusterMenu/AdjusterMenu.tsx';
import { happyData, sectionData, forms } from '../../assets/js/data.ts';
import usePageSettings from '../../assets/js/hooks/usePageSettings.ts';

// Lazy load components
// @ts-ignore
const Dots = lazy(() => import('@/components/Dots/Dots.tsx'));
// @ts-ignore
const AppForm = lazy(() => import('@/components/AppForm/AppForm.tsx'));
// @ts-ignore
const Heading = lazy(() => import('@/components/Heading/Heading.tsx'));

function HappyDots() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const elementRefs = sectionData.map(() => useRef<HTMLUListElement>(null));
  const pageSettings = usePageSettings(forms, 3);

  const sections = sectionData.map((d, i) => (
    <section
      key={d.id}
      ref={elementRefs[i]}
      className={i % 2 !== 0 ? styles.RefReverse : styles.RefSection}
    >
      <div className={styles.ImgContainer}>
        <img
          src={d.img}
          loading="lazy"
          decoding="async"
          width={800}
        />
      </div>
      <div className={`${styles.TextBox} ${isDarkMode ? styles.Dark : ''}`}>
        <Heading variant="h3">{d.title}</Heading>
        <p>{d.text}</p>
      </div>
    </section>
  ));

  return (
    <div className={styles.HappyDotsParent}>
      <PageTitle title="HappyDots" />
      <Spacer height={50} />

      <div className={styles.HappyDotsContainer}>
        <Suspense fallback="<div>Loading...</div>">
          <AdjusterMenu
            click={pageSettings.toggleAdjusterMenu}
            menuActive={pageSettings.isMenuActive}
            bgColor="white"
          >
            <AppForm
              click={pageSettings.handleSettingsSave}
              formData={pageSettings.formData}
            />
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
