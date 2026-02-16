import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import PageTitle from '@/components/PageTitle/PageTitle';
import styles from './Home.module.scss';
import { homeData, pageSectionData } from '../../assets/js/data';

// Lazy load components
// @ts-ignore
const PageSection = lazy(() => import('@/components/PageSection/PageSection.tsx'));

function Home() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const pageSection = pageSectionData.map((section) => (
    <PageSection key={section.id} data={section} />
  ));

  return (
    <>
      <section className={`flex-col-reverse md:row gap-4 ${styles.HomeContainer} ${isDarkMode ? styles.Dark : ''}`}>
        <div className={`${styles.Left} w-full lg:w-1/2`}>
          <span>Welcome to ER Components! </span>
          {homeData.desc}
          &nbsp;
          <span>{homeData.components}</span>
        </div>
        <div className={`${styles.Right} w-full lg:w-1/2`}>
          <div className={styles.HomeTitle}>ER</div>
          <PageTitle title="Components" isDarkMode={isDarkMode} />
        </div>
      </section>
      <Suspense fallback="<div>Loading...</div>">
        {pageSection}
      </Suspense>
    </>
  );
}

export default Home;
